import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login/Login';
import Home from '../Pages/Home/HomeLanding';
import UserSettings from '../Pages/Configuracoes/UserSettings';
import Navigation from '../Pages/Components/Navigation/menuNav';
import Dashboard from '../Pages/Dashboard/Dashboard';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/usersettings" element={<UserSettings />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/settings" element={<Settings />} /> */}
        {/* <Route path="/configuracoes/usuarios" element={<UserPermissions />} />
        <Route path="/configuracoes/notificacoes" element={<NotificationsAlerts />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
