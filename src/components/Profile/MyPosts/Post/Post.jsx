import s from "./Post.module.css";




const Post = (props) => {

  return (
    <div className={s.item}>
      <img src="https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg" />
      {props.message}
      <div></div>
      <div>
        <span className={s.likeBtn}>
        {props.likesCount} 
          <img src="https://clipart-best.com/img/like/like-clip-art-51.png"/>
          </span>
      </div>
    </div>
  );
};

export default Post;
