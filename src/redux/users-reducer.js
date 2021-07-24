const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";


let initialState = {
    users: [
    //     {
    //     id: 1,
    //     name: "John",
    //     location: {country: "Russia", city: "Moscow",},
    //     status: "I like JS",
    //     followed: true,
    //     avatar: "https://oir.mobi/uploads/posts/2021-05/1620142499_7-oir_mobi-p-krol-zhivotnoe-zhivotnie-krasivo-foto-7.jpg"
    // },
    //     {
    //         id: 2,
    //         name: "Jerry",
    //         location: {country: "USA", city: "New-York",},
    //         status: "I like cheese",
    //         followed: true,
    //         avatar: "https://ih0.redbubble.net/image.373516895.6916/raf,750x1000,075,t,a5efff:96a8d4a45a.u2.jpg"
    //     },
    //     {
    //         id: 3,
    //         name: "Tom",
    //         location: {country: "USA", city: "Washington",},
    //         status: "I like mouses",
    //         followed: false,
    //         avatar: "https://upload.wikimedia.org/wikipedia/ru/c/c9/Tom_the_Cat.jpg"
    //     },
    //     {
    //         id: 4,
    //         name: "Tom",
    //         location: {country: "USA", city: "Washington",},
    //         status: "I like mouses",
    //         followed: false,
    //         avatar: "https://upload.wikimedia.org/wikipedia/ru/c/c9/Tom_the_Cat.jpg"
    //     }
        ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case FOLLOW:
            return {
                state: {...state},
                // users: [...state.users],
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: true}
                        }
                        return u;
                    }
                ),
            }

        case UNFOLLOW:
            return {
                state: {...state},
                // users: [...state.users],
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u;
                    }
                ),
            }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})


export default usersReducer;