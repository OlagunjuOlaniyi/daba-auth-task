import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  const [showHide, setShowHide] = useState(false);
  return (
    <div className="width__others">
      <div className="container">
        <Link to="/">
          <AiOutlineClose className="close-btn" />
        </Link>
        <h3 className="text-white my-5">Sign Up</h3>

        {/* Login Form Section */}

        <div className="login__form">
          <form action="">
            <div className="mb-3">
              <label for="fname" className="text-secondary label">
                First Name:
              </label>
              <input
                type="text"
                className="form-control border-secondary"
                id="fname"
                placeholder="Enter your first name"
                name="fname"
              />
            </div>
            <div className="mb-3">
              <label for="lname" className="text-secondary label">
                Last Name:
              </label>
              <input
                type="text"
                className="form-control border-secondary"
                id="lname"
                placeholder="Enter your last name"
                name="lname"
              />
            </div>
            <div className="mb-3">
              <label for="email" className="text-secondary label">
                Email:
              </label>
              <input
                type="email"
                className="form-control border-secondary"
                id="email"
                placeholder="user@example.com"
                name="email"
              />
            </div>
            <div className="mb-3">
              <label for="pwd" className="text-secondary label">
                Password:
              </label>
              <input
                type={showHide ? "text" : "password"}
                className="form-control border-secondary"
                id="pwd"
                placeholder="********"
                name="pswd"
              />
              <span className="showHide" onClick={() => setShowHide(!showHide)}>
                {showHide ? "Hide" : "Show"}
              </span>
            </div>
            <Link to="/" className="link">
              Forget password?
            </Link>
            <div className="my-3">
              <button className="btn btn-gen">Create account</button>
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
    </div>
  );
};

export default Register;
