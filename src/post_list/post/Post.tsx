import React, {MouseEvent} from "react";
import style from "./Post.module.css";
import {api} from "../../api/api";
import {CommentsType, PostType} from "../../types/types";

type PostPropsType = {
    postData: PostType
    setComments: (comments: CommentsType) => void
};

export const Post = React.memo(({postData, setComments}: PostPropsType) => {
    const onClickHandler = (e: MouseEvent<HTMLInputElement>) => {
        if (e.currentTarget.checked) {
            api.getComments(postData.id)
                .then((res) => {
                    setComments(res.data);
                })
                .catch(error => {
                    throw new Error(error);
                });
        } else {
            setComments({...postData.comments, postId: 0})
        }
    };

    return (
        <div className={style.post}>
            <div className={`${style.wrapper} ${style.title}`}>{postData.title}</div>
            <div className={`${style.wrapper} ${style.body}`}>{postData.body}</div>
            <label className={`${style.wrapper} ${style.checkboxBtn}`}>
                <input type="checkbox" onClick={onClickHandler}/>
                    <span>Комментарии</span>
            </label>
            {postData.comments && postData.comments.postId ?
            <div className={style.wrapper}>
                <div className={style.name}>{postData.comments.name}:&nbsp;
                <span className={style.body}>{postData.comments.body}</span>
                </div>
            </div> : false}
        </div>
    );
});