import style from './User.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let lastPages = (pagesCount - 2);
    let currentPage = props.currentPage;

    function paginationFun() {
        return pages.map(p => {
            return (
                <span key={p.id} className={currentPage === p ? style.selectedPage : "" + " "
                + 3 < p && p < (lastPages) && p !== currentPage && p !== currentPage + 1 && p !== currentPage - 1 ? style.hide : ""}
                      onClick={() => {
                          props.onPageChanged(p)
                      }}>{p}</span>
            )
        })
    }
    return (
        <div>
            <div className={style.paginationPage}>
                {paginationFun()}
            </div>
            {
                props.users.map(u => {
                    return (
                        <div className={style.userBlock} key={u.id}>
                            <div>
                                <div className={style.imgWrapper}>
                                    <NavLink to={"/profile/" + u.id}>
                                        <img src={`${u.photos.small || "https://techmesse.com/img/anonymous.jpg"}`}
                                             alt=""/>
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                  className={style.unfollow}
                                                  onClick={() => {props.unfollow(u.id)}}>unfollow</button>
                                        : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                                  onClick={() => {props.follow(u.id)}}>follow</button>
                                    }
                                </div>
                            </div>
                            <div>
                                <div>Name: {u.name}</div>
                            </div>
                            <div className={style.status}>
                                {"\"" + u.status + "\""}
                            </div>
                        </div>
                    )
                })
            }
            <div className={style.paginationPage}>
                {paginationFun()}
            </div>
        </div>
    )
}
export default Users;