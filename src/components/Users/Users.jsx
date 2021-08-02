import style from './User.module.css'
import React from "react";
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";

const Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {
    return (
        <div>
            <div className={style.paginationPage}>
                <Paginator currentPage={currentPage}
                           onPageChanged={onPageChanged}
                           totalUsersCount={totalUsersCount}
                           pageSize={pageSize}/>
            </div>
            <div>
            {users.map(u => {
                return <User key={u.id}
                             user={u}
                             followingInProgress={props.followingInProgress}
                             follow={props.follow}
                             unfollow={props.unfollow}
                />

            })}
            </div>
        </div>
    )
}
export default Users;