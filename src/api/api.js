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
    }
}


export const followAPI = {
    deleteFollow (unfollow = false, id = 1) {
        instance.delete(`follow/${id}`, {}).then(response => {
            if (response.data.resulCode === 0) {
                return   unfollow;
            }
        });
    },
    postFollow(follow = false, id = 1) {
        instance.post(`follow/${id}`, {}).then(response => {
            if (response.data.resulCode === 0) {
                return   follow;
            }
        });
    }
}
