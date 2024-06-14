import React from "react";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/HomeLanding";
import Configuracoes from "../Pages/Configuracoes/Configiracoes";
import Navigation from "../Pages/Components/Navigation/menuNav";
import Dashboard from "../Pages/Dashboard/Dashboard";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const AppRoutes = () => {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/navigation" element={<Navigation/>} />
            <Route path="/configuracoes" element={<Configuracoes/>} />
            <Route path="/dashboard" element={<Dashboard/>} />

          </Routes>

      </BrowserRouter>

    )
}
export default AppRoutes;