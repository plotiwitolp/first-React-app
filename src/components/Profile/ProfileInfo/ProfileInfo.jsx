import s from "./ProfileInfo.module.css";
import * as React from "react";


class ProfileInfo extends React.Component{
  render() {
    return (
        <div className={s.wrapper}>
          <div className={s.headpic}>
            <img src={this.props.profileInfo.imgHeadpic} alt=""/>
          </div>
          <div className={s.user}>
            <img src={this.props.profileInfo.imgUser} alt=""/>
            <div className={s.desription}>
              <p>
                {this.props.profileInfo.description}
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default ProfileInfo;
