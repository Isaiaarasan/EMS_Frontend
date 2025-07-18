import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // ✅ hook for navigation

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        userName,
        password,
      });
      
      const { token, roles } = response.data;
      const roleNames = roles;
      localStorage.setItem("role", roleNames); 
      if (token) {
        localStorage.setItem("token", token);
        setIsLoggedIn(true);
        alert("Login Successful");
        console.log("Token stored in localStorage:", token);
        navigate("/"); // ✅ redirect to home
      } else {
        alert("Token not received from backend.");
      }
    } catch (e) {
      console.log("Login Error", e);
      alert("Invalid Credentials");
    }
    console.log("Form Submitted");
  }

  // Inline CSS styles
  const containerStyle = {
    maxWidth: "400px",
    margin: "60px auto",
    padding: "30px",
    borderRadius: "10px",
    backgroundColor: "#f8f9fa",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
    fontWeight: "bold",
    color: "#555",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Login</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="userName" style={labelStyle}>User Name</label>
        <input
          id="userName"
          name="userName"
          value={userName}
          type="text"
          onChange={(e) => setUserName(e.target.value)}
          style={inputStyle}
        />

        <label htmlFor="password" style={labelStyle}>Password</label>
        <input
          id="password"
          name="password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>Login</button>
      </form>
    </div>
  );
};

export default Login;