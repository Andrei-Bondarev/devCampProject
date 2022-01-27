import {apiClient} from "../../../config/axios";

export const getUser = async (UserID) => {
    return apiClient.get(`/users/${UserID}`);
}