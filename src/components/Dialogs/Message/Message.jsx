import s from "./../Dialogs.module.css";
import React from "react";

const Message = (props) => {

    return (
        <div className={s.item}>
                <div className="message_inner">
                    {props.msg}
                </div>
        </div>
    )
}

export default Message;
