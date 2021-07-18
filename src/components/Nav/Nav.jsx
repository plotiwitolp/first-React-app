import s from "./Nav.module.css";
import Friends from "./Friends/Friends";
import NavList from "./NavList/NavList";
import React from "react";

const Nav = (props) => {


    return (
        <div className={s.sideNav}>
            <NavList/>
            <Friends state={props.state}/>
        </div>
    );
};

export default Nav;
