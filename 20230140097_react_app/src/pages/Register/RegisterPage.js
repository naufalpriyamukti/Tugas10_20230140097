// src/pages/Register/RegisterPage.js

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/api/auth/register', {
        name, // Kirim 'name' ke backend
        email,
        password,
      });
      alert('Registrasi berhasil! Silakan login.');
      navigate('/login'); // Arahkan ke halaman login setelah berhasil
    } catch (error) {
      console.error('Registrasi gagal:', error.response?.data || error.message);
      alert('Registrasi gagal. Coba lagi.');
    }
  };

  // --- STYLING INLINE (Sama seperti LoginPage) ---
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
  const linkStyle = { color: '#61dafb', marginTop: '1rem' };

  return (
    <div style={containerStyle}>
      <h1 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Registrasi</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={formGroupStyle}>
          <label htmlFor="name" style={labelStyle}>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            required
          />
        </div>
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
          Register
        </button>
      </form>
      <p style={{ marginTop: '1rem' }}>
        Sudah punya akun? <Link to="/login" style={linkStyle}>Login di sini</Link>
      </p>
    </div>
  );
}

export default RegisterPage;