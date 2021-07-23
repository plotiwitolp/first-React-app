import s from "./../Nav.module.css";
import React from "react";
import Friend from "./Friend/Friend";

const Friends = (props) => {

    const friendEl = props.friends.map(f => <Friend friendAva={f.ava} friendName={f.name} key={f.id}/>);
    return <div className={s.friendsBlock}>
        <h3>Friends:</h3>
        <div className={s.friendsWrapper}>
            {friendEl}
        </div>
    </div>

};


export default Friends;
