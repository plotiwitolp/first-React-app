import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./ProfileInfo/ProfileInfo.module.css";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

const Profile = (props) => {

        return (
            <div className={s.wrapper}>
                <div className={s.headpic}>
                </div>
                    <ProfileInfoContainer />
                <MyPostsContainer />
            </div>
        );
}

export default Profile;
