/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTasks, updateTask, createTask } from "../features/tasks/taskAPI";

const Dashboard = () => {
    const navigate = useNavigate();

    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [loading, setLoading] = useState(true);

    // 🔥 Fetch tasks
    const fetchTasks = async () => {
        try {
            const res = await getTasks();
            setTasks(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // 🔐 Logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    // ➕ Create task
    const handleCreate = async () => {
        if (!title.trim()) return;

        try {
            await createTask({ title });
            setTitle("");
            fetchTasks();
        } catch (err) {
            console.error(err);
        }
    };

    // 🔄 Update status
    const handleStatusChange = async (id, status) => {
        try {
            await updateTask(id, { status });
            fetchTasks();
        } catch (err) {
            console.error(err);
        }
    };

    // 📊 Stats
    const totalTasks = tasks.length;
    const inProgress = tasks.filter(t => t.status === "in-progress").length;
    const completed = tasks.filter(t => t.status === "done").length;

    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* Sidebar */}
            <div className="w-64 min-w-62.5 bg-white shadow-md p-5">
                <h2 className="text-2xl font-bold mb-6">TeamCollab</h2>

                <ul className="space-y-4">
                    <li className="text-blue-500 font-semibold">Dashboard</li>
                    <li className="text-gray-600 hover:text-blue-500 cursor-pointer">Tasks</li>
                    <li className="text-gray-600 hover:text-blue-500 cursor-pointer">Chat</li>
                    <li className="text-gray-600 hover:text-blue-500 cursor-pointer">Settings</li>
                </ul>
            </div>

            {/* Main */}
            <div className="flex-1 w-full p-6">

                {/* Top */}
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold">Dashboard</h1>

                    <button
                        onClick={handleLogout}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                        Logout
                    </button>
                </div>

                {/* Create Task */}
                <div className="bg-white p-4 rounded-xl shadow mb-6 flex gap-3">
                    <input
                        type="text"
                        placeholder="Enter task title..."
                        className="flex-1 border p-3 rounded-lg"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <button
                        onClick={handleCreate}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        Add
                    </button>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-xl shadow">
                        <h3 className="text-gray-500">Total Tasks</h3>
                        <p className="text-2xl font-bold">{totalTasks}</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow">
                        <h3 className="text-gray-500">In Progress</h3>
                        <p className="text-2xl font-bold">{inProgress}</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow">
                        <h3 className="text-gray-500">Completed</h3>
                        <p className="text-2xl font-bold">{completed}</p>
                    </div>
                </div>

                {/* Tasks */}
                <div className="mt-8 bg-white p-6 rounded-xl shadow">
                    <h2 className="text-xl font-semibold mb-4">Tasks</h2>

                    {loading ? (
                        <p className="text-gray-500">Loading...</p>
                    ) : tasks.length === 0 ? (
                        <p className="text-gray-500">No tasks yet</p>
                    ) : (
                        <div className="space-y-3">
                            {tasks.map((task) => (
                                <div
                                    key={task._id}
                                    className="flex justify-between items-center border p-3 rounded-lg"
                                >
                                    <span>
                                        {task.title} ({task.status})
                                    </span>

                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => handleStatusChange(task._id, "in-progress")}
                                            className="bg-yellow-400 px-2 py-1 rounded"
                                        >
                                            In Progress
                                        </button>

                                        <button
                                            onClick={() => handleStatusChange(task._id, "done")}
                                            className="bg-green-500 text-white px-2 py-1 rounded"
                                        >
                                            Done
                                        </button>

                                        <button
                                            onClick={() => handleStatusChange(task._id, "Deleted")}
                                            className="bg-gray-500 text-white px-2 py-1 rounded"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Dashboard;