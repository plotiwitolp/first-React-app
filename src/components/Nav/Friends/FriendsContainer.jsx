import {connect} from "react-redux";
import Friends from "./Friends";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        friends: state.friends
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps))
(Friends)
