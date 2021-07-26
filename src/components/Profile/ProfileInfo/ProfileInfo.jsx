import s from "./ProfileInfo.module.css";
import * as React from "react";
import Preloader from "../../Common/Preloader/Preloader";


const ProfileInfo = (props) => {
    // debugger
    if (!props.profilePage.profile) {
        return <Preloader/>
    }
    let contacts = props.profilePage.profile.contacts
    return (
        <div className={s.wrapper}>
            <div className={s.headpic}>
                {/*<img src={props.profilePage.profileInfo.imgHeadpic} alt=""/>*/}
            </div>
            <div className={s.user}>
                {/*<img src={props.profilePage.profileInfo.imgUser} alt=""/>*/}
                <img src={props.profilePage.profile.photos.large} alt=""/>
                <div className={s.desription}>
                    <p>
                        Полное имя:
                        <p>
                            {props.profilePage.profile.fullName}
                        </p>
                    </p>
                    <p>
                        Вы ищите работу?
                        <p>
                            {props.profilePage.profile.lookingForAJobDescription}
                        </p>

                    </p>
                    <p>
                        Обо мне:
                        <p>
                            {props.profilePage.profile.aboutMe}
                        </p>
                    </p>
                    <p>
                        Контакты:
                        <p>
                            <p>facebook: {contacts.facebook ? contacts.facebook : null}</p>
                            <p>website: {contacts.website ? contacts.website : null}</p>
                            <p>vk: {contacts.vk ? contacts.vk : null}</p>
                            <p>twitter: {contacts.twitter ? contacts.twitter : null}</p>
                            <p>instagram: {contacts.instagram ? contacts.instagram : null}</p>
                            <p>youtube: {contacts.youtube ? contacts.youtube : null}</p>
                            <p> github: {contacts.github ? contacts.github : null}</p>
                        </p>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
