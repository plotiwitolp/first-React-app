import React from "react";
import style from "./User.module.css";
import * as axios from "axios";

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        console.log("render")
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        return (
            <div>
                <div className={style.paginationPage}>

                    {pages.map(p => {
                        return (
                            <span key={p.id} className={this.props.currentPage === p ? style.selectedPage : ""}
                                  onClick={() => {this.onPageChanged(p)}}>{p}</span>
                        )
                    })}

                </div>
                {
                    this.props.users.map(u => {
                        return (
                            <div className={style.userBlock} key={u.id} >
                                <div>
                                    <div className={style.imgWrapper}><img
                                        src={`${u.photos.small || "https://techmesse.com/img/anonymous.jpg"}`} alt=""/>
                                    </div>
                                    <div>
                                        {u.followed
                                            ? <button className={style.unfollow} onClick={() => {
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
                                <div className={style.status}>
                                    {"\"" + u.status + "\""}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Users;