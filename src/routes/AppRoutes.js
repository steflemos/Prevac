import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/HomeLanding';
import UserSettings from '/Users/tiagosilva/Desktop/sitePrevac/Prevac/src/Pages/Configuracoes/UserSettings.js';
import Navigation from '../Pages/Components/Navigation/menuNav';
import Dashboard from '../Pages/Dashboard/Dashboard';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/user-settings" element={<UserSettings />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
