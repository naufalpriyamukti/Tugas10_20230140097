// src/pages/Home/HomePage.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (storedUser && token) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null); // Reset state user, akan memicu re-render ke tampilan logged-out
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    textAlign: "center",
    backgroundColor: "#282c34",
    color: "white",
    fontFamily: "sans-serif",
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "1.2em",
    marginTop: "20px",
    backgroundColor: "#61dafb",
    color: "#282c34",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    textDecoration: "none",
    minWidth: '200px',
  };

  return (
    <div style={containerStyle}>
      <h1>Selamat Datang di Aplikasi Todo List</h1>

      {user ? (
        // Tampilan jika PENGGUNA SUDAH LOGIN
        <>
          <h2>Selamat Datang, {user.name || user.email}!</h2>
          <p>Kelola semua tugas Anda dengan mudah dan efisien.</p>
          <button onClick={() => navigate('/todos')} style={buttonStyle}>
            Lihat Daftar Todo
          </button>
          <button onClick={handleLogout} style={buttonStyle}>
            Logout
          </button>
        </>
      ) : (
        // Tampilan jika PENGGUNA BELUM LOGIN
        <>
          <p>Kelola semua tugas Anda dengan mudah dan efisien.</p>
          <button onClick={() => navigate('/todos')} style={buttonStyle}>
            Lihat Daftar Todo
          </button>
          <button onClick={() => navigate('/register')} style={buttonStyle}>
            Register
          </button>
          <button onClick={() => navigate('/login')} style={buttonStyle}>
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default HomePage;