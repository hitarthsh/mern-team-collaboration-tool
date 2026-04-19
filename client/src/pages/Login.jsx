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

            localStorage.setItem("token", data.token);
            navigate("/");
        } catch (err) {
            console.error(err);
            alert("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            {/* Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md w-96">

                <h2 className="text-2xl font-bold text-center mb-6">
                    Welcome Back 👋
                </h2>

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    onChange={handleChange}
                    className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                {/* Password */}
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    onChange={handleChange}
                    className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                {/* Button */}
                <button
                    onClick={handleLogin}
                    className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
                >
                    Login
                </button>

                {/* Footer */}
                <p className="text-center text-gray-500 mt-4">
                    Don’t have an account?{" "}
                    <span
                        className="text-blue-500 cursor-pointer"
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login; 