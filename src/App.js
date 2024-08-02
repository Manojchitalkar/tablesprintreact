import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/DashBoard/Dashboard";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />
                    <Route exact path="/" element={<Login />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
