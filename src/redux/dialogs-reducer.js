const ADD_MY_MESSAGE = "ADD-MY-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {

    if (action.type === ADD_MY_MESSAGE) {
        const newMyMessage = {
            id: 3,
            myMsg: state.newMessageText
        }
        state.myMessages.push(newMyMessage);
        state.newMessageText = '';
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newText;
    }

    return state
}
export default dialogsReducer;