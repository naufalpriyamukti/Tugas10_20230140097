// src/pages/Login/LoginPage.js

import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("http://localhost:3001/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      alert("Login berhasil!");
      navigate("/");
    } catch (error) {
      const errorMessage = error.response?.data?.msg || "Terjadi kesalahan. Silakan coba lagi.";
      setError(errorMessage);
      console.error("Login gagal:", errorMessage);
    }
  };


  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#282c34",
    color: "white",
    fontFamily: "sans-serif",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "350px",
  };
  
  const formGroupStyle = {
    marginBottom: "1rem",
    textAlign: "left",
  };
  
  const labelStyle = {
    display: 'block',
    marginBottom: "0.5rem",
    fontSize: "0.9rem",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #555",
    borderRadius: "8px",
    backgroundColor: "#3a3f4a",
    color: "white",
    fontSize: "1rem",
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    padding: "12px 20px",
    fontSize: "1em",
    marginTop: "1rem",
    backgroundColor: "#61dafb",
    color: "#282c34",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    width: '100%',
  };

  const errorStyle = {
    color: '#ff6b6b',
    marginTop: '1rem',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Login</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={formGroupStyle}>
          <label htmlFor="email" style={labelStyle}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <div style={formGroupStyle}>
          <label htmlFor="password" style={labelStyle}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>

      {error && <p style={errorStyle}>{error}</p>}
      
      <p style={{ marginTop: '1rem' }}>
        Belum punya akun? <Link to="/register" style={{ color: '#61dafb' }}>Daftar di sini</Link>
      </p>
    </div>
  );
}

export default LoginPage;