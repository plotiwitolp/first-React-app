import ProfileInfo from "./ProfileInfo";
import {connect} from "react-redux";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";


function mapStateToProps(state) {
    return {
        profileInfo: state.profilePage.profileInfo,
    }
}

const ProfileInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo)

export default ProfileInfoContainer;