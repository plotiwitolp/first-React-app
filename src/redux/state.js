import {rerenderEntireTree} from "../render";

const state = {
    profilePage: {
        posts: [
            {id: 1, msg: "These posts create by React's props", likesCount: 20},
            {id: 2, msg: "Hi! How are you?", likesCount: 15},
            {id: 3, msg: "It is my first post", likesCount: 7}
        ],
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
        myMessages:[
            {id: 1, myMsg: "Test myMsg 1 Test myMsg 1 Test myMsg 1 Test myMsg 1 Test myMsg 1 Test myMsg 1 "},
            {id: 2, myMsg: "Test myMsg 2 Test myMsg 2 Test myMsg 2 Test myMsg 2 Test myMsg 2 Test myMsg 2 "},
        ]
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
}

export const addPost = (postMessage) => {

    const newPost = {
        id: 5,
        msg: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}

export const addMyMessage = (myMessage) => {

    const newMyMessage = {
        id: 3,
        myMsg: myMessage
    }
    state.dialogsPage.myMessages.push(newMyMessage);
    rerenderEntireTree(state)
}


export default state;

