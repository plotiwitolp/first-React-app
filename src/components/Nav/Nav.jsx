import s from "./Nav.module.css";
import NavList from "./NavList/NavList";
import React from "react";
import FriendsContainer from "./Friends/FriendsContainer";

const Nav = (props) => {
    return (
        <div className={s.sideNav}>
            <NavList/>
            <FriendsContainer />
        </div>
    );
};

export default Nav;
