import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";


const MyPosts = (props) => {

    const addLike = (i) => {
        props.addLike(i)
    }

    const postsElements = props.posts
        .map(post => <Post addLike={addLike} id={post.id} message={post.msg} likesCount={post.likesCount}/>)

    const onAddPost = () => {
        props.addPost();
    }
    const onPostChange = (e) => {
        let text = e.target.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <h2>My posts</h2>
            <div>
                <h3>New post:</h3>
                <textarea onChange={onPostChange} className={s.textarea}
                          value={props.newPostText}/>
                <button className={s.button} onClick={onAddPost}>Add post</button>
            </div>
            <div >
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;
