import {apiClient} from "../../../config/axios";

export const getUsers = async () => {
    return apiClient.get('/users');
}


export const getUser = async (UserID) => {
    return apiClient.get(`/users/${UserID}`);
}


export const updateUser = async (UserID, postData) => {
    return apiClient.put(`/users/` + UserID, postData)
}

export const postAvatar = async (avatar, UserID) => {
    return apiClient.post(`/users/` + UserID, avatar);
}