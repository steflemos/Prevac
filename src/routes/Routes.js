import React from "react";
import Login from "../Pages/Login/Login";
import Home from "../Pages/Home/HomeLanding";
import Navigation from "../Pages/Components/Navigation/menuNav";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const AppRoutes = () => {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/navigation" element={<Navigation/>} />
          </Routes>

      </BrowserRouter>

    )
}
export default AppRoutes;