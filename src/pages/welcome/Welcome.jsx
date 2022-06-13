import React from "react";
import "./Welcome.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Welcome = () => {
  return (
    <div className="welcome width__others">
      <div className="container welcome__container text-center">
        <div className="welcome__text-ct mb-5">
          <h3 className="text-white py-3">
            Your Money-Making Machine in your Pocket
          </h3>
          <p className="text-white">
            By creating an account, you agree to your{" "}
            <Link to="/" className="link">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/" className="link">
              Privacy Policy
            </Link>
          </p>
          <button className="btn btn-primary px-5 my-3">
            <FcGoogle /> Continue with Google
          </button>
        </div>

        {/* strike through */}
        <div className="welcome__strike mt-3">
          <div></div>
          <span className="strike__text text-light">or</span>
        </div>

        {/* welcome login - register */}
        <div className="welcome__loginReg">
          <Link className="register" to="/register">
            Create my account
          </Link>
          <Link className="login my-3" to="/login">
            Login to my account
          </Link>

          {/* Browse courses */}
          <Link className="browse" to="/">
            Browse Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
