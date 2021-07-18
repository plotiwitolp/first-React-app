import s from "./../Dialogs.module.css";
import React from "react";

const MyMessage = (props) => {

    return (
        <div className={s.myMessageItem}>
                <div className={s.messages}>
                    {props.myMsg}
                </div>
        </div>
    )
}

export default MyMessage;
