import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"

const Post = ({
  postId,
  caption,
  postImage,
  likes = [],
  comments = [],
  ownImage,
  ownName,
  ownId,
  isDelete = false,
  isAccount = false,
}) => {
  return (
    <div className="post">
      <div className="postHeader"></div>

      <img src={postImage} alt="Post" />
      
      <div className="postDetails">
        <Avatar src={ownImage} />

      </div>
    </div>
  )
}

export default Post
