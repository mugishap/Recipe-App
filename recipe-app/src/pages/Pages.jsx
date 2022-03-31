import React from "react";
import Home from './Home'
import { Route, Routes, BrowserRouter, NavLink } from "react-router-dom"
import Cuisine from "./Cuisine";

function Pages() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cuisine/:type" element={<Cuisine />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Pages