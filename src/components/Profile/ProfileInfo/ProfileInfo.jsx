import s from "./ProfileInfo.module.css";
import * as React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import anonymous from "./../../../assets/image/anonymous.jpg"

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, loading, error}) => {
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }

    }
    return (
        <>
        { loading ? <Preloader /> : error ? <h2>{error}</h2> :
          profile ?
                (<div className={s.wrapper}>
                    <div className={s.user}>
                        <div>
                            <img src={profile.photos.large || anonymous} alt=""/>
                            {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                        </div>
                        <div className={s.desription}>
                            <div>
                                <h2>{profile.fullName}</h2>
                            </div>
                            <div className={s.chapterProfileInfo}>
                                {profile.lookingForAJobDescription &&
                                <div>
                                    <h3>Looking job:</h3>
                                    <p>
                                        {profile.lookingForAJobDescription}
                                    </p>
                                </div>
                                }
                            </div>
                            <div className={s.chapterProfileInfo}>
                                <div>
                                    <h3>About me:</h3>
                                    <p>
                                        {profile.aboutMe}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3>Contacts:</h3>
                                    <div>
                                        {Object.keys(profile.contacts).map((key) => {
                                            return <Contact key={key} contactTitle={key}
                                                            contactValue={profile.contacts[key]}/>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : null
        }</>);
}

const Contact = ({contactTitle, contactValue}) => {
    return (
        <div>
            {contactValue ? (<div className={s.contact}><b>{contactTitle}:</b> {contactValue} </div>) : ""}
        </div>)
}

export default ProfileInfo;
