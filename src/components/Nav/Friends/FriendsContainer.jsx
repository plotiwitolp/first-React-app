import s from "./../Nav.module.css";
import React from "react";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";
import {addMyMessageActionCreator, updateNewMessageTextActionCreator} from "../../../redux/dialogs-reducer";
import Friends from "./Friends";
// import StoreContext from "../../../StoreContext";

// const FriendsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const friendEl = store.getState().friends.map(f => <Friend friendAva={f.ava} friendName={f.name}/>);
//                     return <div className={s.friendsBlock}>
//                         <h3>Friends:</h3>
//                         <div className={s.friendsWrapper}>
//                             {friendEl}
//                         </div>
//                     </div>
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// };

let mapStateToProps = (state) => {
    return {
        friends: state.friends
    }
}
let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)
export default FriendsContainer;
