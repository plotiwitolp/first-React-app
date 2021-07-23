import React from "react";
import {
    addLikeActionCreator,
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";
import {addMyMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";

// const MyPostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState()
//                     const addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }
//                     const onPostChange = (text) => {
//                         let action = updateNewPostTextActionCreator(text)
//                         store.dispatch(action);
//                     }
//                     const addLike = (i) => {
//                         store.dispatch(addLikeActionCreator(i));
//                     }
//                     return <MyPosts updateNewPostText={onPostChange}
//                                     addPost={addPost}
//                                     addLike={addLike}
//                                     posts={state.profilePage.posts}
//                                     newPostText={state.profilePage.newPostText}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// };

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        addLike: (i) => {
            dispatch(addLikeActionCreator(i));
        }

    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)


export default MyPostsContainer;
