import s from "./Dialogs.module.css";
import React from "react";
import MyMessage from "./Message/MyMessage";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {

    let state = props.dialogsPage;
    const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id} img={d.img}/>);
    const messagesElements = state.messages.map(m => <Message msg={m.msg} key={m.id}/>);
    const myMessagesElements = state.myMessages.map(m => <MyMessage myMsg={m.myMsg} key={m.id}/>);

    const addNewMessageForm = (values) => {
        props.addMyMessage(values.newMessageText);
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
            <AddMessageFormRedux onSubmit={addNewMessageForm}/>
        </div>
    );
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.answerBlock}>
            <Field component={"textarea"} name={"newMessageText"} placeholder="Enter your message" className={s.dialogsTextarea}/>

            <button className={s.btnSend} >Send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs;
