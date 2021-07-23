import React from "react";
import s from "./User.module.css";

const Users = (props) => {

    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                name: "John",
                location: {country: "Russia", city: "Moscow",},
                status: "I like JS",
                followed: true,
                avatar: "https://oir.mobi/uploads/posts/2021-05/1620142499_7-oir_mobi-p-krol-zhivotnoe-zhivotnie-krasivo-foto-7.jpg"
            },
            {
                id: 2,
                name: "Jerry",
                location: {country: "USA", city: "New-York",},
                status: "I like cheese",
                followed: true,
                avatar: "https://ih0.redbubble.net/image.373516895.6916/raf,750x1000,075,t,a5efff:96a8d4a45a.u2.jpg"
            },
            {
                id: 3,
                name: "Tom",
                location: {country: "USA", city: "Washington",},
                status: "I like mouses",
                followed: false,
                avatar: "https://upload.wikimedia.org/wikipedia/ru/c/c9/Tom_the_Cat.jpg"
            },
            {
                id: 4,
                name: "Tom",
                location: {country: "USA", city: "Washington",},
                status: "I like mouses",
                followed: false,
                avatar: "https://upload.wikimedia.org/wikipedia/ru/c/c9/Tom_the_Cat.jpg"
            }])
    }


    return (
        <div>
            {
                props.users.map(u => {

                    return (

                        <div className={s.userBlock} key={u.id} id={u.id}>
                            <div>
                                <div className={s.imgWrapper}><img src={`${u.avatar}`} alt=""/></div>
                                <div>
                                    {u.followed
                                        ? <button className={s.unfollow} onClick={() => {props.unfollow(u.id)}}>unfollow</button>
                                        : <button onClick={() => {props.follow(u.id)}}>follow</button>}
                                </div>
                            </div>
                            <div>
                                <div>Name: {u.name}</div>
                                <div>Country: {u.location.country}</div>
                                <div>City: {u.location.city}</div>
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
export default Users;