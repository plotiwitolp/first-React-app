import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

class Profile extends React.Component{
    render(){
        return (
            <div>
                <ProfileInfoContainer />
                <MyPostsContainer />
            </div>
        );
    }
}

export default Profile;
