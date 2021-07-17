import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";

const Profile = (props) => {

    const bdPosts = props.bdPosts


  return (
    <div>
      <ProfileInfo />
      <MyPosts bdPosts={bdPosts}/>
    </div>
  );
};

export default Profile;
