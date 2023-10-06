export type PostCard = {
    id: string
    title?: string,
    body?: string
}

export type PostList = {
    posts: PostCard[];
};
