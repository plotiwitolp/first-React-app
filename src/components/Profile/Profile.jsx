import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts state={props.state} addPost={props.addPost}/>
    </div>
  );
};

export default Profile;
