import {apiClient} from "../../../config/axios";

export const getPosts = async () => {
    return apiClient.get('/posts');
}

export const postPost = async (postData) => {
    return apiClient.post('/posts', postData);
}


export const updatePost = async (postData) => {
    return apiClient.put(`/posts`, postData);
}