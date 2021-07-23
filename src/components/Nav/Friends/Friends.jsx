import s from "./../Nav.module.css";
import React from "react";
import Friend from "./Friend/Friend";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";
import {addMyMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
// import StoreContext from "../../../StoreContext";

const Friends = (props) => {

    const friendEl = props.friends.map(f => <Friend friendAva={f.ava} friendName={f.name}/>);
    return <div className={s.friendsBlock}>
        <h3>Friends:</h3>
        <div className={s.friendsWrapper}>
            {friendEl}
        </div>
    </div>

};


export default Friends;
