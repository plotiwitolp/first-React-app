import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const ADD_LIKE = "ADD_LIKE";
const SET_USER_PROFILE = "SET_USER_PROFILE";

const SET_USER_PROFILE_START = "SET_USER_PROFILE_START";
const SET_USER_PROFILE_SUCCESS = "SET_USER_PROFILE_SUCCESS";
const SET_USER_PROFILE_FAIL = "SET_USER_PROFILE_FAIL";

const SET_STATUS = "SET_STATUS";
const POST_DELETE = "POST_DELETE";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

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
            "                accusantium ratione labore voluptatem nulla? Reiciendis explicabo\n",
        imgUser: "https://www.pinclipart.com/picdir/big/138-1385107_png-file-user-vector-icon-png-clipart.png",
        imgHeadpic: "https://cdn.fishki.net/upload/post/2018/06/04/2615820/11.jpg",
    },
    profile: null,
    status: "",
    loading: true,
    error: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = action.newPostText;
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 5, msg: newPost, likesCount: 0}]
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
        // case SET_USER_PROFILE: {
        //     return {...state, profile: action.profile}
        // }
        case SET_USER_PROFILE_START: {
            return setUserProfileStartReducer(state, action)
        }
        case SET_USER_PROFILE_SUCCESS: {
            return setUserProfileSuccessReducer(state, action)
        }
        case SET_USER_PROFILE_FAIL: {
            return setUserProfileFailReducer(state, action)
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case POST_DELETE: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        default:
            return state;
    }
}
const setUserProfileStartReducer = (state, action) => {
    return {...state, loading: action.loading}
}
const setUserProfileSuccessReducer = (state, action) => {
    return {...state, profile: action.profile, loading: action.loading, error: action.error}
}
const setUserProfileFailReducer = (state, action) => {
    return {...state, loading: action.loading, error: action.error}
}
export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})

// export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserProfileStart = () => ({type: SET_USER_PROFILE_START, loading: true})
export const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE_SUCCESS, profile, loading: false, error: null})
export const setUserProfileFail = (error) => ({type: SET_USER_PROFILE_FAIL, loading: false, error})

export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: POST_DELETE, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})


export const getStatus = (userId) => async (dispatch) => {
   await profileAPI.getStatus(userId).then(res=> dispatch(setStatus(res.data))).catch(err => {
      console.log(err)
   });
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}
export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}
export const getUserProfile = (userId) => async (dispatch) => {
    dispatch(setUserProfileStart())
    await usersAPI.getProfile(userId)
        .then(res => {
            // console.log(Object.entries(res).map(err => err))
            dispatch(setUserProfileSuccess(res.data));
        }).catch(err => {
            const error = Object.entries(err)[2][1].data.message
            dispatch(setUserProfileFail(error));
        })

}

export const addLikeActionCreator = (currentIndexPost) => ({type: ADD_LIKE, currentPost: currentIndexPost})


export default profileReducer;