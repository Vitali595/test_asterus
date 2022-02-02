export type PostType = {
    body: string
    id: number
    title: string
    userId: number
    comments: CommentsType
};

export type CommentsType = {
    body: string
    email: string
    id: number
    name: string
    postId: number
};

export type UserType = {
    id: number
    name: string
    age: number
    gender: string
}