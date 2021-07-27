import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 18605;
        }
        this.props.getUserProfile(userId);
    }
    render(){
        return (
            <div>
                <Profile {...this.props} profilePage={this.props.profilePage}/>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    profilePage: state.profilePage
});

export default compose(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)
