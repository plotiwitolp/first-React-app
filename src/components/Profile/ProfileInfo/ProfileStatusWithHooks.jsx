import React, {useEffect, useState} from "react";
import s from "./ProfileInfo.module.css"

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            setEditMode(false)
            props.updateStatus(status)
        }
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <div>
                <b><i><span onDoubleClick={activateEditMode}>{props.status || "no status"}</span></i></b>
            </div>
            }
            {editMode &&
            <div>
                <input onChange={onStatusChange} onKeyPress={handleKeyPress} autoFocus={true} onBlur={deactivateEditMode}
                       value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;
