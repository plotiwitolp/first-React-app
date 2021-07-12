import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div className={s.headpic}>
        {/* <img src="https://cdn.fishki.net/upload/post/2018/06/04/2615820/11.jpg" /> */}
      </div>
      <div className={s.user}>
        <img src="https://images.wallpaperscraft.ru/image/kot_morda_vzglyad_89446_1024x768.jpg" />
        <div className="desription">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            debitis odio. Sint asperiores quo necessitatibus. Corrupti quidem
            eos sed nisi tenetur, velit maxime itaque doloribus amet soluta quas
            laborum facere.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
            debitis odio. Sint asperiores quo necessitatibus. Corrupti quidem
            eos sed nisi tenetur, velit maxime itaque doloribus amet soluta quas
            laborum facere.
          </p>
        </div>
      </div>
      <div>
        My posts
        <div>New post</div>
        <div className={s.posts}>
          <div className={s.item}>Post 1</div>
          <div className={s.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
