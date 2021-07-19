import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    const postsElements = props.state.posts
        .map(post => <Post id={post.id} message={post.msg} likesCount={post.likesCount}/>)

    const newPostElement = React.createRef();

    const addPost = () => {
        const text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }

    return (
        <div>
            <h2>My posts</h2>
            <div>
                <h3>New post:</h3>
                <textarea className={s.textarea} ref={newPostElement}></textarea>
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
