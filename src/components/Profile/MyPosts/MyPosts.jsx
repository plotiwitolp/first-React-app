import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    const postsElements = props.posts
        .map(post => <Post id={post.id} message={post.msg} likesCount={post.likesCount}/>)

    const newPostElement = React.createRef();

    const addPost = () => {
        // props.addPost();
        props.dispatch({type: "ADD-POST"});
    }

    const onPostChange = () => {
        const text = newPostElement.current.value
        //props.updateNewPostText(text);
        const action = {type: "UPDATE-NEW-POST-TEXT", newText: text};
        props.dispatch(action);
    }

    return (
        <div>
            <h2>My posts</h2>
            <div>
                <h3>New post:</h3>
                <textarea onChange={onPostChange} className={s.textarea} ref={newPostElement}
                          value={props.newPostText}/>
                <button className={s.button} onClick={addPost}>Add post</button>
                <button className={s.button}>Remove post</button>
            </div>
            <div className={s.postsClass}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
