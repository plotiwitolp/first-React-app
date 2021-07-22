import s from "./../Nav.module.css";
import React from "react";
import Friend from "./Friend/Friend";
import StoreContext from "../../../StoreContext";

const Friends = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const friendEl = store.getState().friends.map(f => <Friend friendAva={f.ava} friendName={f.name}/>);
                    return <div className={s.friendsBlock}>
                        <h3>Friends:</h3>
                        <div className={s.friendsWrapper}>
                            {friendEl}
                        </div>
                    </div>
                }
            }
        </StoreContext.Consumer>
    );
};
export default Friends;
