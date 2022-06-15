import React, { useContext } from "react";
import "./Dashboard.css";
import AuthContext from "../../context/AuthProvider";

export const Dashboard = () => {
  const { auth } = useContext(AuthContext);
  return (
    <div className="dashboard">
      <div>
        <h1>Welcome {auth.firstName || localStorage.getItem("firstName")}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
