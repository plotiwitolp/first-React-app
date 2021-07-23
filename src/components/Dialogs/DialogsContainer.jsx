import React from "react";
import {addMyMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().dialogsPage;
//
//                     const addNewMessage = () => {
//                         store.dispatch(addMyMessageActionCreator());
//                     }
//                     const onMessageChange = (text) => {
//                         store.dispatch(updateNewMessageTextActionCreator(text));
//                     }
//                     return <Dialogs updateNewMessageBody={onMessageChange}
//                                     addMyMessage={addNewMessage}
//                                     dialogsPage={state}
//                     />;
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// };

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        },
        addMyMessage: () => {
            dispatch(addMyMessageActionCreator())
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;
