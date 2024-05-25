import React from "react";
import Home from "../Pages/Home/Home";
import Cadastro from "../Pages/Cadastro";
import Navigation from "../Pages/Components/nav";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const AppRoutes = () => {
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/navigation" element={<Navigation/>} />
          </Routes>

      </BrowserRouter>

    )
}
export default AppRoutes;