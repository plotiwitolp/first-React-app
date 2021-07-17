import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    const postsElements = props.bdPosts
        .map(post => <Post id={post.id} message={post.msg} likesCount={post.likesCount}/>)

    return (
        <div>
            <h2> My posts</h2>
            <div>
                <h3>New post:</h3>
                <textarea className={s.textarea}></textarea>
                <button className={s.button}>Add post</button>
                <button className={s.button}>Remove post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
