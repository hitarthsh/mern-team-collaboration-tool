import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();   // ✅ add this

    const handleRegister = async () => {
        try {
            await API.post("/auth/register", form);

            alert("User Registered ✅");

            navigate("/login");   // ✅ redirect to login
        } catch (err) {
            console.error(err);
            alert("Register failed ❌");
        }
    };

    return (
        <div>
            <h2>Register</h2>

            <input
                placeholder="Name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
            />

            <input
                placeholder="Email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
            />

            <input
                placeholder="Password"
                type="password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
            />

            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;