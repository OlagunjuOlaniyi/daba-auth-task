import React, { useContext } from "react";
import "./Dashboard.css";
import AuthContext from "../../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const { auth } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <div className="dashboard">
      <div>
        <h1>Welcome {auth.firstName || localStorage.getItem("firstName")}</h1>
        <button className="btn text-danger" onClick={handleLogOut}>Logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
