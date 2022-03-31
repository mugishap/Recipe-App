import React from "react";
import Home from './Home'
import { Route, Routes } from "react-router-dom"
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";

function Pages() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/recipe/:name" element={<Recipe />} />
                <Route path="/cuisine/:type" element={<Cuisine />} />
                <Route path="searched/:search" element={<Searched />} />
            </Routes>
        </div>
    )
}

export default Pages