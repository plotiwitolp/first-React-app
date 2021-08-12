import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import s from "./ProfileInfo/ProfileInfo.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
        return (
            <div className={s.wrapper}>
                <div className={s.headpic}>
                </div>
                    <ProfileInfo savePhoto={props.savePhoto}
                                 isOwner={props.isOwner}
                                 profile={props.profilePage.profile}
                                 status={props.status}
                                 updateStatus={props.updateStatus}
                                 loading={props.loading}
                                 error={props.error}

                    />
                <MyPostsContainer />
            </div>
        );
}

export default Profile;
