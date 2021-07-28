const ADD_MY_MESSAGE = "ADD-MY-MESSAGE";

let initialState = {
    dialogs: [
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
    ],
    messages: [
        {
            id: 1,
            msg: "Test message 1 Test message 1 Test message 1 Test message 1 Test message 1 Test message 1 Test message 1 Test message 1 Test message 1 ",
        },
        {
            id: 2,
            msg: "Test message 2 Test message 2 Test message 2 Test message 2 Test message 2 Test message 2 Test message 2 Test message 2 Test message 2 Test message 2 Test message 2 Test message 2 Test message 2 Test message 2 Test message 2 Test message 2 ",
        },
        {
            id: 3,
            msg: "Test message 3 Test message 3 Test message 3 Test message 3 Test message 3 Test message 3 Test message 3 Test message 3 Test message 3 Test message 3 Test message 3 ",
        },
    ],
    myMessages: [
        {id: 1, myMsg: "Test myMsg 1 Test myMsg 1 Test myMsg 1 Test myMsg 1 Test myMsg 1 Test myMsg 1 "},
        {id: 2, myMsg: "Test myMsg 2 Test myMsg 2 Test myMsg 2 Test myMsg 2 Test myMsg 2 Test myMsg 2 "},
        {id: 3, myMsg: "Test myMsg 3 Test myMsg 3 Test myMsg 3 Test myMsg 3 Test myMsg 3 Test myMsg 3 "},
    ]
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MY_MESSAGE: {
            let text = action.newMessageText
            return {
                ...state,
                myMessages: [...state.myMessages, {id: 4, myMsg: text}]
            }
        }
        default:
            return state;
    }
}

export const addMyMessageActionCreator = (newMessageText) => ({type: ADD_MY_MESSAGE, newMessageText})

export default dialogsReducer;