import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {

    const postsElements = props.profilePage.posts
        .map(post => <Post dispatch={props.dispatch} id={post.id} message={post.msg} likesCount={post.likesCount}/>)

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div>
            <h2>My posts</h2>
            <div>
                <h3>New post:</h3>
                <textarea onChange={onPostChange} className={s.textarea}
                          value={props.profilePage.newPostText}/>
                <button className={s.button} onClick={addPost}>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
