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
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      </div>
    </div>
  );
};

export default MyPosts;
