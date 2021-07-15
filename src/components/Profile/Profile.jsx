import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.headpic}>
        <img src="https://cdn.fishki.net/upload/post/2018/06/04/2615820/11.jpg" />
      </div>
      <div className={s.user}>
        <img src="https://images.wallpaperscraft.ru/image/kot_morda_vzglyad_89446_1024x768.jpg" />
        <div className="desription">
          <p>Description</p>
        </div>
      </div>
      <div>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
