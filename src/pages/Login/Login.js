import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Credential } from "../utils";
import companyName from "../../svg/companyName.svg";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = () => {
        if (
            username === Credential.username &&
            password === Credential.password
        ) {
            navigate("/dashboard");
        } else {
            setError("Invalid username or password");
        }
    };

    const handleForgotPassword = () => {
        navigate("/forgot-password");
    };

    const handleFieldsetClick = (ref) => {
        ref.current.focus();
    };

    return (
        <div className="login-container">
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <img src={companyName} className="App-logo" alt="Profile" />
                <h2 className="login-subheading">
                    Welcome to TableSprint admin
                </h2>
            </div>

            <fieldset
                className="input-fieldset"
                onClick={() => handleFieldsetClick(usernameRef)}
            >
                <legend>Email</legend>
                <input
                    ref={usernameRef}
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </fieldset>
            <fieldset
                className="input-fieldset"
                onClick={() => handleFieldsetClick(passwordRef)}
            >
                <legend>Password</legend>
                <input
                    ref={passwordRef}
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </fieldset>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row-reverse",
                }}
            >
                <div
                    style={{
                        color: "#5C218B",
                        height: "20px",
                        marginTop: "10px",
                        cursor: "pointer",
                    }}
                    onClick={handleForgotPassword}
                >
                    Forgot Password
                </div>
            </div>

            <button className="login-btn" onClick={handleLogin}>
                Log In
            </button>

            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default Login;
