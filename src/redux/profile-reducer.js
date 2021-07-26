const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_LIKE = "ADD_LIKE";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
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
    profileInfo: {
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores\n" +
            "                tempore ea maiores iure qui eveniet voluptatibus quia necessitatibus\n" +
            "                earum quis iste non error voluptate possimus odio temporibus, at\n" +
            "                accusantium ratione labore voluptatem nulla? Reiciendis explicabo\n" +
            "                qui modi, recusandae laboriosam, dicta debitis corrupti cumque id\n" +
            "                eos facere ullam, repellendus earum voluptates sit. Officia\n" +
            "                doloremque quasi ipsam repudiandae totam iure quia cum velit, rerum\n" +
            "                earum quos eligendi illum non. Sunt, repellendus vel!",
        imgUser: "https://www.pinclipart.com/picdir/big/138-1385107_png-file-user-vector-icon-png-clipart.png",
        imgHeadpic: "https://cdn.fishki.net/upload/post/2018/06/04/2615820/11.jpg",
    },
    newPostText: [""],
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = state.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [{id: 5, msg: newPost, likesCount: 0}, ...state.posts]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case ADD_LIKE: {
            let stateCopy;
            stateCopy = {
                ...state,
                posts: [...state.posts],
            }
            stateCopy.posts[action.currentPost].likesCount++;
            return stateCopy;
        }
        case SET_USER_PROFILE:{
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addLikeActionCreator = (currentIndexPost) => ({type: ADD_LIKE, currentPost: currentIndexPost})


export default profileReducer;