import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import Profile from "../../svg/profile-icon.svg";
import companyDashboardIcon from "../../svg/company-dashboard-icon.svg";

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/");
    };

    return (
        <div className="dashboard-head">
            <img
                style={{ height: "32px" }}
                src={companyDashboardIcon}
                alt="Dashboard"
            />
            <img
                onClick={handleLogout}
                src={Profile}
                className="App-logo"
                alt="Profile"
            />
        </div>
    );
};

export default Dashboard;
