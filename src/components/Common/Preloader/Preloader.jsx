import preloader from "../../../assets/image/preloader.gif";
import s from "../../Users/User.module.css";
import React from "react";

const Preloader = (props) => {
    return (
        <img src={preloader} className={s.fetchingImg} alt=""/>
    )
}
export default Preloader;