import s from "./../../Nav.module.css";
import React from "react";

const Friend = (props) => {

    return (
        <div className={s.friends}>
            <div className={s.friendAva}>
                <img src={props.friendAva} alt=""/>
            </div>
            <div className={s.friendName}>
                {props.friendName}
            </div>
        </div>
    )
}

export default Friend;
