import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./ProfileInfo/ProfileInfo.module.css";

const Profile = (props) => {
        return (
            <div className={s.wrapper}>
                <div className={s.headpic}>
                </div>
                    <ProfileInfo profilePage={props.profilePage} status={props.status} updateStatus={props.updateStatus}/>
                <MyPostsContainer />
            </div>
        );
}

export default Profile;
