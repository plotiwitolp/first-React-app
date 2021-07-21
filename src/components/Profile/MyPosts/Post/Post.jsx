import s from "./Post.module.css";
import {addLikeActionCreator} from "../../../../redux/profile-reducer";


const Post = (props) => {

    const addLike = () => {
        let arrElements = document.querySelectorAll(".Post_item__10eNe")
        for (let i = 0; i < arrElements.length; i++) {
            (function (i) {
                let el = arrElements[i].childNodes[3].childNodes[0].childNodes[1];
                // debugger;
                el.onclick = function () {
                    props.dispatch(addLikeActionCreator(i));
                }
            })(i);
        }
    }


    return (
        <div className={s.item}>
            <img src="https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg"/>
            {props.message}
            <div></div>
            <div>
        <span className={s.likeBtn} key={"key"}>
        {props.likesCount}
            <img onMouseUp={addLike} src="https://clipart-best.com/img/like/like-clip-art-51.png"/>
          </span>
            </div>
        </div>
    );
};

export default Post;
