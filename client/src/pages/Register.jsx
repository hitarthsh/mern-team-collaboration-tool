import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Register = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegister = async () => {
        try {
            setLoading(true);

            await API.post("/auth/register", form);

            alert("User Registered ✅");

            navigate("/login");
        } catch (err) {
            console.error(err);
            alert("Register failed ❌");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            {/* Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md w-96">

                <h2 className="text-2xl font-bold text-center mb-6">
                    Create Account 🚀
                </h2>

                {/* Name */}
                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    onChange={handleChange}
                    className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

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
                    onClick={handleRegister}
                    disabled={loading}
                    className="w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition"
                >
                    {loading ? "Registering..." : "Register"}
                </button>

                {/* Footer */}
                <p className="text-center text-gray-500 mt-4">
                    Already have an account?{" "}
                    <span
                        className="text-blue-500 cursor-pointer"
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;