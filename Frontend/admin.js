import React, { useState } from "react";
 
import axios from "axios";
import { useNavigate } from "react-router-dom"; import "../CSS/Admin.css";
const Admin = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState(""); const [error, setError] = useState("");
const navigate = useNavigate(); const handleLogin = async (e) => { e.preventDefault();
try {
const res = await axios.post("http://localhost:5050/api/admin/login", { email, password,});
if (res.data.success) {
localStorage.setItem("admin", JSON.stringify(res.data.admin)); navigate("/admin-dashboard");
} else {
setError(res.data.message || "Invalid credentials");
}
} catch (err) {
console.error("Login failed:", err); setError("Login failed. Please try again.");
}
};
return (
<div className="admin-login-wrapper">
<div className="admin-login-container">
<h2>Pçt' Admin Login</h2>
<form onSubmit={handleLogin} className="admin-login-form">
<input type="email" placeholder="Email" value={email} Required onChange={(e) => setEmail(e.target.value)}/>
<input type="password" placeholder="Password"
value={password} required onChange={(e) => setPassword(e.target.value)}/>
<button type="submit">Login</button>
{error && <p className="error">{error}</p>}
</form>
</div>
</div>
);
};
export default Admin;
