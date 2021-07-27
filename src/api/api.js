import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "7cdcdf82-0385-46c4-a703-7ef937a48ba0"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => {
            return response.data;
        });
    },
    follow(iserId) {
        return instance.post(`follow/${iserId}`)
    }
    ,
    unfollow(iserId) {
        return  instance.delete(`follow/${iserId}`)
    }
}
