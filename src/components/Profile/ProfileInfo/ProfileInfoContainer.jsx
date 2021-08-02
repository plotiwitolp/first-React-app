import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import {updateStatus} from "../../../redux/profile-reducer";


function mapStateToProps(state) {
    return {
        profileInfo: state.profilePage.profileInfo,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        updateStatus: state.profilePage.updateStatus

    }
}

const ProfileInfoContainer = connect(mapStateToProps, {updateStatus})(ProfileInfo)

export default ProfileInfoContainer;