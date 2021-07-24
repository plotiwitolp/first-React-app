import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";



class MyPosts extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const addLike = (i) => {
            this.props.addLike(i)
        }
        const postsElements = this.props.posts
            .map(post => <Post addLike={addLike} id={post.id} key={post.id} message={post.msg} likesCount={post.likesCount}/>)

        const onAddPost = () => {
            this.props.addPost();
        }
        const onPostChange = (e) => {
            let text = e.target.value;
            this.props.updateNewPostText(text);
        }
        return (
            <div>
                <h2>My posts</h2>
                <div>
                    <h3>New post:</h3>
                    <textarea onChange={onPostChange} className={s.textarea}
                              value={this.props.newPostText}/>
                    <button className={s.button} onClick={onAddPost}>Add post</button>
                </div>
                <div >
                    {postsElements}
                </div>
            </div>
        );
    }

}

//
// const MyPosts = (props) => {
//
//     const addLike = (i) => {
//         props.addLike(i)
//     }
//     const postsElements = props.posts
//         .map(post => <Post addLike={addLike} id={post.id} key={post.id} message={post.msg} likesCount={post.likesCount}/>)
//
//     const onAddPost = () => {
//         props.addPost();
//     }
//     const onPostChange = (e) => {
//         let text = e.target.value;
//         props.updateNewPostText(text);
//     }
//     return (
//         <div>
//             <h2>My posts</h2>
//             <div>
//                 <h3>New post:</h3>
//                 <textarea onChange={onPostChange} className={s.textarea}
//                           value={props.newPostText}/>
//                 <button className={s.button} onClick={onAddPost}>Add post</button>
//             </div>
//             <div >
//                 {postsElements}
//             </div>
//         </div>
//     );
// };

export default MyPosts;
