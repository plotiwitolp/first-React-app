import s from "./ProfileInfo.module.css";
import * as React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
    if (!props.profilePage.profile) {
        return <Preloader/>
    }
    let contacts = props.profilePage.profile.contacts
    return (
        <div className={s.wrapper}>
            <div className={s.user}>
                <div>
                    <img src={props.profilePage.profile.photos.large} alt=""/>
                    <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <div className={s.desription}>
                    <div>
                            <h3>{props.profilePage.profile.fullName}</h3>
                    </div>
                    <div>
                        <h4>Работа:</h4>
                        <p>
                            {props.profilePage.profile.lookingForAJobDescription}
                        </p>
                    </div>
                    <div>
                        <h4>Обо мне:</h4>
                        <p>
                            {props.profilePage.profile.aboutMe}
                        </p>
                    </div>
                    <div>
                        <h4>Контакты:</h4>
                        <div>
                            <p>{contacts.facebook ? contacts.facebook : null}</p>
                            <p>{contacts.website ? contacts.website : null}</p>
                            <p>{contacts.vk ? contacts.vk : null}</p>
                            <p>{contacts.twitter ? contacts.twitter : null}</p>
                            <p>{contacts.instagram ? contacts.instagram : null}</p>
                            <p>{contacts.youtube ? contacts.youtube : null}</p>
                            <p>{contacts.github ? contacts.github : null}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
