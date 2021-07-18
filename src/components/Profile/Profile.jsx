import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";

const Profile = (props) => {

    const state = props.state

  return (
    <div>
      <ProfileInfo />
      <MyPosts state={state}/>
    </div>
  );
};

export default Profile;
