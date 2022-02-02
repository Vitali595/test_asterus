import axios from "axios";
import {CommentsType, PostType} from "../types/types";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const api = {
    getPosts() {
        return instance.get<PostType[]>('posts');
    },
    getComments(postId: number) {
        return instance.get<CommentsType>(`comments/${postId}`);
    }
};