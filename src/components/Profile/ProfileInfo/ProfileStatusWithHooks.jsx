import React, { useState } from 'react';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);
    
    let activateEditMode = () =>{
        setEditMode(true)
    }
    let deactivateEditMode = () =>{
        setEditMode(false)
        props.updateStatus(status)
    }

    let onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    return <>
        {!editMode &&
            <div>
                <span onDoubleClick={activateEditMode} >{props.status || "--------"}</span>
            </div>
        }
        {editMode &&
            <div>
                <input autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status} />
            </div>
        }
    </>


}

export default ProfileStatusWithHooks;