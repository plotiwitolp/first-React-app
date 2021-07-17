import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";


const Dialogs = (props) => {

    const dialogsData = [
        {id: "all", name: "Group All", img: ""},
        {
            id: 1,
            name: "User 1",
            img: "https://i.pinimg.com/736x/74/0e/72/740e7295e0cfd3c09babc149c1d98f19--animal-logo-sport-logos.jpg"
        },
        {id: 2, name: "User 2", img: "https://pbs.twimg.com/profile_images/794516170313437184/RhO--wss.jpg"},
        {
            id: 3,
            name: "User 3",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Florida_Tuskers_logo.svg/1920px-Florida_Tuskers_logo.svg.png"
        }
    ]

    const messagesData = [
        {
            id: 1,
            name: "User 1",
            msg: "Test message 1",
            img: "https://i.pinimg.com/736x/74/0e/72/740e7295e0cfd3c09babc149c1d98f19--animal-logo-sport-logos.jpg"
        },
        {
            id: 2,
            name: "User 2",
            msg: "Test message 2",
            img: "https://pbs.twimg.com/profile_images/794516170313437184/RhO--wss.jpg"
        },
        {
            id: 3,
            name: "User 3",
            msg: "Test message 3",
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Florida_Tuskers_logo.svg/1920px-Florida_Tuskers_logo.svg.png"
        }
    ]

    const dialogsElements = dialogsData
        .map( dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img}/>);

    const messagesElements = messagesData
        .map( massage => <Message name={massage.name} msg={massage.msg} img={massage.img}/> )

    return (
        <div className={s.dialogs_wrapper}>
            <div className={s.dialogs}>
                {
                    dialogsElements
                }

            </div>
            <div className={s.messages}>
                {
                    messagesElements
                }
            </div>
        </div>
    );
};

export default Dialogs;
