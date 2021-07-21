const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_LIKE = "ADD_LIKE";

const profileReducer = (state, action) => {

    if (action.type === ADD_POST) {
        const newPost = {
            id: 5,
            msg: state.newPostText,
            likesCount: 0
        };
        state.posts.unshift(newPost);
        state.newPostText = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostText = action.newText;
    } else if (action.type === ADD_LIKE) {
        state.posts[action.currentPost].likesCount++;
    }

    return state;
}
export default profileReducer;