import React, {useCallback, useEffect, useState} from "react";
import style from "./PostList.module.css";
import {Post} from "./post/Post";
import {api} from "../api/api";
import {CommentsType, PostType} from "../types/types";

export const PostList = React.memo(() => {
    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        api.getPosts()
            .then((res) => {
                res.data.length = 20;
                setPosts(res.data);
            })
            .catch(error => {
                throw new Error(error);
            });
    }, []);

    const setComments = useCallback((comments: CommentsType) => {
        setPosts(posts.map(el => el.id === comments.id ? {...el, comments} : el));
    }, [posts]);

    return (
        <div className={style.postList}>
            {
                posts.map(({id, ...props}) => {
                    return <Post key={id} postData={{id, ...props}} setComments={setComments}/>
                })
            }
        </div>
    );
});