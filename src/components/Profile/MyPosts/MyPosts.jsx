import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../Common/FormsControls/FormsControls";

const maxLength300 = maxLengthCreator(300)

let AddNewPostForm = (props) => {
    return <form onSubmit={props.handleSubmit} >
        <h3>New post:</h3>
        <Field name={"newPostText"} component={Textarea} validate={[required, maxLength300]} placeholder={"Post message"} className={s.NewPostTextArea}/>
        <button className={s.button}>Add post</button>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)

 const MyPosts = (props) => {

    const addLike = (i) => {
        props.addLike(i)
    }
    const postsElements = [...props.posts]
        // .reverse()
        .map(post => <Post addLike={addLike} id={post.id} key={post.id} message={post.msg}
                           likesCount={post.likesCount}/>)

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.wrapperForm}>
            <h2>My posts</h2>
            <AddNewPostFormRedux onSubmit={onAddPost} value={props.newPostText} onClick={onAddPost}/>
            <div>
                {postsElements}
            </div>
        </div>
    );
}


export default MyPosts;
