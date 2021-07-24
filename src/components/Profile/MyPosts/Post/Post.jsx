import s from "./Post.module.css";
import React from "react";


const Post = (props) =>{
       const addLike = () => {
            let arrElements = document.querySelectorAll(".Post_item__10eNe")
            for (let i = 0; i < arrElements.length; i++) {
                (function (i) {
                    let el = arrElements[i].childNodes[2];
                    el.onclick = function () {
                        props.addLike(i);
                    }
                })(i);
            }
        }
        return (
            <div className={s.item}>
                <img src="https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-49.jpg" alt=""/>
                <div className={s.postTextEl}>{props.message}</div>
                <span className={s.likeBtn} key={"key"}>
                    {props.likesCount}
                    <img onMouseUp={addLike} src="https://clipart-best.com/img/like/like-clip-art-51.png" alt=""/>
                </span>
            </div>
        );
    }
export default Post;
