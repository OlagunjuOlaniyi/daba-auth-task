import React from "react";
import "./NoPage.css";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="nopage">
      <div>
        <h1>Oops!!!This Page Does Not Exist!</h1>
        <Link className="link" to="/">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default NoPage;
