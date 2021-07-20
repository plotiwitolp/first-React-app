import s from "./Dialogs.module.css";
import React from "react";
import MyMessage from "./Message/MyMessage";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);

    const messagesElements = props.dialogsPage.messages.map(m => <Message msg={m.msg}/>);

    const myMessagesElements = props.dialogsPage.myMessages.map(m => <MyMessage myMsg={m.myMsg}/>);


    const newMessage = React.createRef();

    const addNewMessage = () => {
        props.addMyMessage();
    }

    const onMessageChange = () => {
        const text = newMessage.current.value
        props.updateNewMessageText(text);
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
                <textarea onChange={onMessageChange} className={s.dialogsTextarea}
                          ref={newMessage} value={props.dialogsPage.newMessageText}/>
                <button className={s.btnSend} onClick={addNewMessage}>Send</button>
            </div>
        </div>
    );
};

export default Dialogs;
