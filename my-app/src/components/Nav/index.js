import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../../pages/Home";
import "./style.scss";
import Products from "../../pages/Products/index";
import Basket from "../../pages/Basket/index";

export default function Nav() {
    return (
        <nav className={'myNavigation'}>
            <NavLink exact  to="/">Home

            </NavLink>
            <NavLink to="/products">Products

        </NavLink>
            <NavLink to="/basket">

            </NavLink>

        </nav>
    )
}