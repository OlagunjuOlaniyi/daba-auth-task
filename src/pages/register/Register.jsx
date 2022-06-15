import React, { useState } from "react";
import { useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";

const USER_URL = "/user";

const Register = () => {
  const [showHide, setShowHide] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, //spread operator
      [name]: value,
    });
  };

  const { firstName, lastName, email, password } = user;
  useEffect(() => {
    setErrMsg("");
  }, [firstName, lastName, email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check for empty input fields
    if (firstName && lastName && email && password) {
      //get user credential from api
      const getUser = await axios.get(USER_URL);
      const getUserEmail = getUser.data;

      // Get all emails from the api
      const userEmail = getUserEmail.map((users) => users.email);

      // Filter for existing emails
      const filterEmail = userEmail.filter((em) => em === user.email);

      // Authorize email before registration
      if (filterEmail.length === 0) {
        try {
          const response = await axios.post(USER_URL, user, {
            headers: { "Content-Type": "application/json" },
          });
          console.log(JSON.stringify(response?.data));

          setSuccess(true);

          // Set back to empty
          setUser({});
        } catch (error) {
          if (error?.response) {
            setErrMsg("No Server Response");
          } else {
            setErrMsg("Registration failed");
          }
        }
      } else {
        setErrMsg("Sorry! User already exist.");
      }
    } else {
      setErrMsg("Kindly fill all required fields before proceeding");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="width__others">
      {success ? (
        navigate("/dashboard")
      ) : (
        <div className="container">
          <Link to="/">
            <AiOutlineClose className="close-btn" />
          </Link>
          <h3 className="text-white my-5">Sign Up</h3>

          {/* Login Form Section */}

          <div className="login__form">
            <form onSubmit={handleSubmit}>
              {errMsg !== "" ? (
                <h6 className="alert py-2 font-bold bg-danger">{errMsg}</h6>
              ) : (
                ""
              )}

              <div className="mb-3">
                <label htmlFor="fname" className="text-secondary label">
                  First Name:
                </label>
                <input
                  type="text"
                  className="form-control border-secondary"
                  id="fname"
                  placeholder="Enter your first name"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="lname" className="text-secondary label">
                  Last Name:
                </label>
                <input
                  type="text"
                  className="form-control border-secondary"
                  id="lname"
                  placeholder="Enter your last name"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="text-secondary label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control border-secondary"
                  id="email"
                  placeholder="user@example.com"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="text-secondary label">
                  Password:
                </label>
                <input
                  type={showHide ? "text" : "password"}
                  className="form-control border-secondary"
                  id="password"
                  placeholder="********"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
                <span
                  className="showHide"
                  onClick={() => setShowHide(!showHide)}
                >
                  {showHide ? "Hide" : "Show"}
                </span>
              </div>
              <Link to="/" className="link">
                Forget password?
              </Link>
              <div className="my-3">
                <button type="submit" className="btn btn-gen">
                  Create account
                </button>
              </div>
            </form>
          </div>

          {/* Have an Account? */}
          <p className="text-white py-3 text-center">
            Already own an account?{" "}
            <Link to="/login" className="link">
              Login in
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Register;
