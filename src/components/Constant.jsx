import React from "react";
import "./Constant.css";
import image from "../assets/img.png";

const Constant = () => {
  return (
    <div className="constant constant__screen">
      <div className="container text-center">
        <div className="img__container">
          <img src={image} alt="images" />
        </div>
        <div className="constant__text-ct mt-4">
          <h2 className="text-white py-3">
            Your Money-Making Machine in your Pocket
          </h2>
          <p className="text-secondary">
            Gain Relevant Strategies & Global Skills for scaling, Wealth
            Creation and Financial Freedom.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Constant;
