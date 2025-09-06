// src/App.js

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/Home/HomePage";
import TodoPage from "./pages/Todo/TodoPage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rute publik yang bisa diakses semua orang */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Rute yang dilindungi. Hanya bisa diakses setelah login. */}
        <Route element={<ProtectedRoute />}>
          <Route path="/todos" element={<TodoPage />} />
          {/* Rute terproteksi lainnya bisa ditambahkan di sini */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;