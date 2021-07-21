import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import friendsReducer from "./friends-reducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_LIKE = "ADD_LIKE";

const ADD_MY_MESSAGE = "ADD-MY-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";


const store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 3,
                    msg: "Test message 3 Test message 3 Test message 3 Test message 3 Test message 3",
                    likesCount: 7
                },
                {
                    id: 2,
                    msg: "Test message 2 Test message 2 Test message 2 Test message 2 Test message 2 Test message 2 Test message 2 Test message 2 Test message 2",
                    likesCount: 15
                },
                {
                    id: 1,
                    msg: "Test message 1 Test message 1 Test message 1 Test message 1 Test message 1 Test message 1 Test message 1 Test message 1 Test message 1",
                    likesCount: 20
                },
            ],
            newPostText: [""],
        },
        dialogsPage: {
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
            ],
            newMessageText: [""]
        },
        friends: [
            {name: "Alex", ava: "https://i.pinimg.com/originals/2f/b5/c5/2fb5c548dcff728484aae036fc45e5d6.jpg"},
            {
                name: "Nick",
                ava: "https://www.ejin.ru/wp-content/uploads/2017/12/zoo-portraits-animals-dressed-like-humans-03.jpg"
            },
            {
                name: "Jack",
                ava: "https://yt3.ggpht.com/a/AGF-l7938tGYn0CYQfogO8LFSM-rIQ0_9qygzvM_ng=s900-c-k-c0xffffffff-no-rj-mo"
            },


        ]
    },
    _callSubscriber() {
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.friends = friendsReducer(this._state.friends, action);

        this._callSubscriber(this._state);

    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addMyMessageActionCreator = () => ({type: ADD_MY_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
export const addLikeActionCreator = (currentIndexPost) => ({type: ADD_LIKE, currentPost: currentIndexPost})

export default store;
window.state = store;