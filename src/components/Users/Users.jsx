import React from "react";
import s from "./User.module.css";
import * as axios from "axios";

class Users extends React.Component {
    render() {
        return (
            <div>
                {this.props.users.map(u => {
                    return (
                        <div className={s.userBlock} key={u.id} id={u.id}>
                            <div>
                                <div className={s.imgWrapper}><img
                                    src={`${u.photos.small || "https://techmesse.com/img/anonymous.jpg"}`} alt=""/>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button className={s.unfollow} onClick={() => {
                                            this.props.unfollow(u.id)
                                        }}>unfollow</button>
                                        : <button onClick={() => {
                                            this.props.follow(u.id)
                                        }}>follow</button>}
                                </div>
                            </div>
                            <div>
                                <div>Name: {u.name}</div>
                                <div>Country: {"u.location.country"}</div>
                                <div>City: {"u.location.city"}</div>
                            </div>
                            <div className={s.status}>
                                {"\"" + u.status + "\""}
                            </div>
                        </div>
                    )
                })
                }
            </div>
        )
    }
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items);
        })
    }
}
export default Users;