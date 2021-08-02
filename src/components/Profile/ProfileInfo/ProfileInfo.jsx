import s from "./ProfileInfo.module.css";
import * as React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import anonymous from "./../../../assets/image/anonymous.jpg"

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    let contacts = profile.contacts
    return (
        <div className={s.wrapper}>
            <div className={s.user}>
                <div>
                    <img src={`${profile.photos.large || anonymous}`}
                         alt=""/>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                </div>
                <div className={s.desription}>
                    <div>
                            <h3>{profile.fullName}</h3>
                    </div>
                    <div>
                        <h4>Работа:</h4>
                        <p>
                            {profile.lookingForAJobDescription}
                        </p>
                    </div>
                    <div>
                        <h4>Обо мне:</h4>
                        <p>
                            {profile.aboutMe}
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
