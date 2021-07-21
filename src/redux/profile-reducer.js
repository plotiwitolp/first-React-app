const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_LIKE = "ADD_LIKE";

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 5,
                msg: state.newPostText,
                likesCount: 0
            };
            state.posts.unshift(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case ADD_LIKE:
            state.posts[action.currentPost].likesCount++;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addLikeActionCreator = (currentIndexPost) => ({type: ADD_LIKE, currentPost: currentIndexPost})


export default profileReducer;