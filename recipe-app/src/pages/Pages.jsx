import React from "react";
import Home from './Home'
import { Route, Routes, useLocation } from "react-router-dom"
import Cuisine from "./Cuisine";
import Searched from "./Searched";
import Recipe from "./Recipe";
import { AnimatePresence } from "framer-motion";
import styledComponents from "styled-components";

function Pages() {
    const location = useLocation()
    return (
        <Body>
            <AnimatePresence exitBeforeEnter>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/recipe/:name" element={<Recipe />} />
                <Route path="/cuisine/:type" element={<Cuisine />} />
                <Route path="searched/:search" element={<Searched />} />
            </Routes>
            </AnimatePresence>
        </Body>
    )
}
const Body = styledComponents.div`
min-width:100%;
min-height:100%;
overflow-x:hidden;
`
export default Pages