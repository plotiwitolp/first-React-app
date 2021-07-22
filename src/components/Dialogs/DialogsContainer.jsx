import React from "react";
import {addMyMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;

                    const addNewMessage = () => {
                        store.dispatch(addMyMessageActionCreator());
                    }
                    const onMessageChange = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text));
                    }
                    return <Dialogs updateNewMessageBody={onMessageChange}
                                    addMyMessage={addNewMessage}
                                    dialogsPage={state}
                    />;
                }
            }
        </StoreContext.Consumer>
    )
};
export default DialogsContainer;
