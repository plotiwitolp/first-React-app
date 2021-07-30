import React from "react";
import s from "./ProfileInfo.module.css"

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.setState({
                editMode: false
            })
            this.props.updateStatus(this.state.status)
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }
    render() {
        return (
            <div >
                {!this.state.editMode && <div className={s.userStatus}>
                   <b><i><span onDoubleClick={this.activateEditMode}>{this.props.status || "no status"}</span></i></b>
                </div>
                }
                {this.state.editMode && <div>
                    <input onKeyPress={this.handleKeyPress} onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;