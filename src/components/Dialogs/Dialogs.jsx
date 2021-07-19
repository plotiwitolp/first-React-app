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

    const newMessage = React.createRef();

    const addNewMessage = () => {

        const text = newMessage.current.innerText;
        props.addMyMessage(text);
        newMessage.current.innerText = "";
    }

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
            <div></div>
            <div className={s.answerBlock}>
            <div contenteditable="true" className={s.dialogsTextarea} ref={newMessage}></div>
            <button className={s.btnSend} onClick={addNewMessage}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;
