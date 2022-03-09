export interface PostProps {
  userId?: number
  id?: number
  title?: string
  body?: string
  posts: PostProps[]
  post?: PostProps
}

export interface CommentsProps {
  postId?: number
  id?: number
  name?: string
  body?: string
  comments: CommentsProps[]
}

export interface UsersProps {
  id?: number
  name?: string
  users: UsersProps[]
}
