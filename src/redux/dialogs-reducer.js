const ADD_MY_MESSAGE = "ADD-MY-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MY_MESSAGE:
            const newMyMessage = {
                id: 3,
                myMsg: state.newMessageText
            }
            state.myMessages.push(newMyMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;

    }
}

export const addMyMessageActionCreator = () => ({type: ADD_MY_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;