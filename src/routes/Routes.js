import React from "react";
import Home from "../Pages/Home/Home";
import Navigation from "../Pages/Components/Navigation/menuNav";
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