import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../features/auth/authAPI";

const Login = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = async () => {
        try {
            const data = await loginUser(form);

            // Save token
            localStorage.setItem("token", data.token);

            // Redirect
            navigate("/");
        } catch (err) {
            console.error(err);
            alert("Invalid credentials");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Login</h2>

            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />

            <br /><br />

            <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
            />

            <br /><br />

            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;