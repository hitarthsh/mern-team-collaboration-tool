// client/src/features/auth/authAPI.js
import API from "../../services/api";

// Login API
export const loginUser = async (data) => {
    const res = await API.post("/auth/login", data);
    return res.data;
};