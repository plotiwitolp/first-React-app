import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const Dialog = (props) => {
    let idDialog = "/dialogs/" + props.id
  return (
    <NavLink to={idDialog}>
      <div className={s.item} >
        {props.name}
        <div className={s.user}>
          <img src={props.img} />
        </div>
      </div>
    </NavLink>
  );
};

const Message = (props) =>{
    return (
<div className={s.item}>
          <div>
            <div className="user_name">{props.name}</div>
            <div className={s.user}>
              <img src={props.img} />
            </div>
          </div>
          <div>
            <div className="message_inner">
                {props.msg}
            </div>
          </div>
        </div>
    )
}

const Dialogs = (props) => {
  return (
    <div className={s.dialogs_wrapper}>

      <div className={s.dialogs}>
      <Dialog name="Group All" id="all" img=""/>
      <Dialog name="User 1" id="1" img="https://i.pinimg.com/736x/74/0e/72/740e7295e0cfd3c09babc149c1d98f19--animal-logo-sport-logos.jpg"/>
      <Dialog name="User 2" id="2" img="https://pbs.twimg.com/profile_images/794516170313437184/RhO--wss.jpg"/>
      <Dialog name="User 3" id="3" img="https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Florida_Tuskers_logo.svg/1920px-Florida_Tuskers_logo.svg.png"/>
      </div>

      <div className={s.messages}>
        <Message name="User 3" msg="Test message" img="https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Florida_Tuskers_logo.svg/1920px-Florida_Tuskers_logo.svg.png"/>
        <Message name="User 2" msg="Test message 2" img="https://pbs.twimg.com/profile_images/794516170313437184/RhO--wss.jpg"/>
        <Message name="User 1" msg="Test message 3" img="https://i.pinimg.com/736x/74/0e/72/740e7295e0cfd3c09babc149c1d98f19--animal-logo-sport-logos.jpg"/>
      </div>
    </div>
  );
};

export default Dialogs;
