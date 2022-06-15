import React, { useState, useEffect, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import AuthContext from "../../context/AuthProvider";
import axios from "../../api/axios";

const USER_URL = "/user";

const Login = () => {
  const { setAuth } = useContext(AuthContext);
  const [showHide, setShowHide] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setErrMsg("");
  }, [user.email, user.password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    if (email && password) {
      const getUser = await axios.get(USER_URL);
      const getUserAuth = getUser.data;

      // get users credentials
      const userAuth = getUserAuth.map((users) => users);

      //filter email for authorization
      const filterEmail = userAuth.filter((em) => em.email === user.email);

      //filter password for authorization
      const filterPwd = userAuth.filter(
        (pwd) => pwd.password === user.password
      );

      if (filterEmail.length > 0 && filterPwd.length > 0) {
        const [{ firstName, lastName, email, password }] = userAuth;

        console.log(password);
        setSuccess(true);
        console.log(userAuth);

        setAuth({ firstName, lastName, email });

        localStorage.setItem("email", email);
        localStorage.setItem("firstName", firstName);
      } else {
        setErrMsg("Invalid Email or Password!");
      }
    } else {
      setErrMsg("Kindly fill all required fields before proceeding");
    }
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="width__others">
        {success ? (
          navigate("/dashboard")
        ) : (
          <div className="container">
            <Link to="/">
              <AiOutlineClose className="close-btn" />
            </Link>
            <h3 className="text-white my-5">Login</h3>

            {/* Login Form Section */}

            <div className="login__form">
              <form onSubmit={handleSubmit}>
                {errMsg !== "" ? (
                  <h6 className="alert py-2 font-bold bg-danger">{errMsg}</h6>
                ) : (
                  ""
                )}

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
                  <label htmlFor="pwd" className="text-secondary label">
                    Password:
                  </label>
                  <input
                    type={showHide ? "text" : "password"}
                    className="form-control border-secondary show__ct"
                    id="pwd"
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
                    Login to your account
                  </button>
                </div>
              </form>
            </div>

            {/* Have an Account? */}
            <p className="text-white py-3 text-center">
              Don't own an account?{" "}
              <Link to="/register" className="link">
                Sign Up
              </Link>
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
