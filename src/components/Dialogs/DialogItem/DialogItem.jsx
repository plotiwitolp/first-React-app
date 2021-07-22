import {NavLink} from "react-router-dom";
import s from "./../Dialogs.module.css";
import React from "react";

const DialogItem = (props) => {
    let idDialog = "/dialogs/" + props.id
    return (
        <NavLink to={idDialog}>
            <div className={s.item}>
                {props.name}
                <div className={s.user}>
                    <img src={props.img} alt=""/>
                </div>
            </div>
        </NavLink>
    );
};

export default DialogItem;