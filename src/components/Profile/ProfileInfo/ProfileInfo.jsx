import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {

  return (
    <div className={s.wrapper}>
      <div className={s.headpic}>
        <img src="https://cdn.fishki.net/upload/post/2018/06/04/2615820/11.jpg" alt=""/>
      </div>
      <div className={s.user}>
        <img src="https://images.wallpaperscraft.ru/image/kot_morda_vzglyad_89446_1024x768.jpg" alt=""/>
        <div className={s.desription}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            tempore ea maiores iure qui eveniet voluptatibus quia necessitatibus
            earum quis iste non error voluptate possimus odio temporibus, at
            accusantium ratione labore voluptatem nulla? Reiciendis explicabo
            qui modi, recusandae laboriosam, dicta debitis corrupti cumque id
            eos facere ullam, repellendus earum voluptates sit. Officia
            doloremque quasi ipsam repudiandae totam iure quia cum velit, rerum
            earum quos eligendi illum non. Sunt, repellendus vel!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
