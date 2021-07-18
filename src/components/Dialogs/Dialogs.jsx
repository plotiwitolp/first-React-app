import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import MyMessage from "./Message/MyMessage";


const Dialogs = (props) => {

    const dialogsElements = props.state.dialogs
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>);

    const messagesElements = props.state.messages
        .map( massage => <Message msg={massage.msg} /> )

    const myMessagesElements = props.state.myMessages
        .map( massage => <MyMessage myMsg={massage.myMsg} /> )

    return (
        <div className={s.dialogs_wrapper}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messagesWrapper}>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.myMessages}>
                {myMessagesElements}
            </div>
            </div>
        </div>
    );
};

export default Dialogs;
