import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        // ❗ Remove token
        localStorage.removeItem("token");

        // ❗ Redirect to login
        navigate("/login");
    };
    return (
        <div className="min-h-screen bg-gray-100 flex">

            {/* Sidebar */}
            <div className="w-64 bg-white shadow-md p-5">
                <h2 className="text-2xl font-bold mb-6">TeamCollab</h2>

                <ul className="space-y-4">
                    <li className="text-blue-500 font-semibold cursor-pointer">Dashboard</li>
                    <li className="text-gray-600 hover:text-blue-500 cursor-pointer">Tasks</li>
                    <li className="text-gray-600 hover:text-blue-500 cursor-pointer">Chat</li>
                    <li className="text-gray-600 hover:text-blue-500 cursor-pointer">Settings</li>
                </ul>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">

                {/* Top Bar */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
                        Logout
                    </button>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-3 gap-6">

                    <div className="bg-white p-5 rounded-xl shadow">
                        <h3 className="text-gray-500">Total Tasks</h3>
                        <p className="text-2xl font-bold mt-2">12</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow">
                        <h3 className="text-gray-500">In Progress</h3>
                        <p className="text-2xl font-bold mt-2">5</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow">
                        <h3 className="text-gray-500">Completed</h3>
                        <p className="text-2xl font-bold mt-2">7</p>
                    </div>

                </div>

                {/* Activity Section */}
                <div className="mt-8 bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>

                    <ul className="space-y-3">
                        <li className="text-gray-600">✔️ Task "UI Design" completed</li>
                        <li className="text-gray-600">🕒 Task "API Integration" in progress</li>
                        <li className="text-gray-600">➕ New task "Login Feature" added</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;