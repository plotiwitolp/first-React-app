import style from './User.module.css'
import React from "react";
import {NavLink} from "react-router-dom";
import anonymous from "./../../assets/image/anonymous.jpg"

const User = ({user, followingInProgress, follow, unfollow, }) => {
    return (
        <div className={style.userBlock}>
            <div>
                <div className={style.imgWrapper}>
                    <NavLink to={"/profile/" + user.id}>
                        <img src={`${user.photos.small || anonymous}`}
                             alt=""/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  className={style.unfollow}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>follow</button>
                    }
                </div>
            </div>
            <div>
                <div>Name: {user.name}</div>
            </div>
            <div className={style.status}>
                {"\"" + user.status + "\""}
            </div>
        </div>
    )
}
export default User;