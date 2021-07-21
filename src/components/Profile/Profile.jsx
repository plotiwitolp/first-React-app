import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import React from "react";

const Profile = (props) => {

  return (
    <div>
      <ProfileInfo />
      <MyPosts profilePage={props.profilePage}
               // newPostText={props.profilePage.newPostText}
               dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
