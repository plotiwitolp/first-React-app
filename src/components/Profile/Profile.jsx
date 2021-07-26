import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from "./ProfileInfo/ProfileInfo.module.css";

const Profile = (props) => {
    // debugger;
        return (
            <div className={s.wrapper}>
                <div className={s.headpic}>
                    <img src={props.profilePage.profileInfo.imgHeadpic} alt=""/>
                </div>
                    <ProfileInfo profilePage={props.profilePage}/>
                <MyPostsContainer />
            </div>
        );
}

export default Profile;
