import s from "./Dialogs.module.css";
import React from "react";
import MyMessage from "./Message/MyMessage";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


class Dialogs extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let state = this.props.dialogsPage;
        const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} img={d.img}/>);
        const messagesElements = state.messages.map(m => <Message msg={m.msg} key={m.id}/>);
        const myMessagesElements = state.myMessages.map(m => <MyMessage myMsg={m.myMsg} key={m.id}/>);
        const addNewMessage = () => {
            this.props.addMyMessage();
        }
        const onMessageChange = (e) => {
            const text = e.target.value
            this.props.updateNewMessageBody(text);
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
                    <div>
                        {myMessagesElements}
                    </div>
                </div>
                <div></div>
                <div className={s.answerBlock}>
                <textarea placeholder="Enter your message" onChange={onMessageChange} className={s.dialogsTextarea}
                          value={state.newMessageText}/>
                    <button className={s.btnSend} onClick={addNewMessage}>Send</button>
                </div>
            </div>
        );
    }
}
export default Dialogs;
