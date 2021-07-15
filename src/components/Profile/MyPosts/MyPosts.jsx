import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {



  return (
    <div>
      <h2> My posts</h2>
      <div >
      <h3>New post:</h3>
        <textarea className={s.textarea}></textarea>
        <button className={s.button}>Add post</button>
        <button className={s.button}>Remove post</button>
      </div>
      <div className={s.posts}>
      <Post message="These posts create by React's props" likesCount="20" />
      <Post message="Hi! How are you?" likesCount="15" />
      <Post message="It is my first post" likesCount="7"/>

      </div>
    </div>
  );
};

export default MyPosts;
