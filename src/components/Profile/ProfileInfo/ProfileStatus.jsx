import React from "react";
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState({
           editMode: true
        })
        // this.forceUpdate()
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode && <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode && <div>
                    <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}></input>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;