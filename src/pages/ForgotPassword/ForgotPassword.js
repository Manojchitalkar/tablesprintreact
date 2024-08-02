import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleBackToLogin = () => {
        navigate("/");
    };

    const handlePasswordReset = () => {
        // Add logic to handle password reset with the provided email
        alert(`Password reset link sent to ${email}`);
    };

    return (
        <div className="forgot-password-container">
            <h2 className="forgot-heading">Did you forget password?</h2>
            <p className="heading2">
                Enter your email address and we’ll send you a link to restore
                password
            </p>
            <input
                className="otp-input"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button
                className={"sent-otp-btn"}
                disabled={!email}
                onClick={handlePasswordReset}
            >
                Send Reset Link
            </button>
            <div className={"back-to-login-btn"} onClick={handleBackToLogin}>
                Back to Login
            </div>
        </div>
    );
};

export default ForgotPassword;
