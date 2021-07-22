import React from "react";
import {
    addLikeActionCreator,
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()
                const addPost = () => {
                    store.dispatch(addPostActionCreator());
                }
                const onPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text)
                    store.dispatch(action);
                }
                const addLike = (i) => {
                    store.dispatch(addLikeActionCreator(i));
                }
                return <MyPosts updateNewPostText={onPostChange}
                                addPost={addPost}
                                addLike={addLike}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    );
};
export default MyPostsContainer;
