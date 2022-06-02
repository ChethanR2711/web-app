import { Avatar, Typography } from '@mui/material'
import { Link } from "react-router-dom";
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
        <Avatar src={ownImage} alt="User" sx={{
          height : "3vmax",
          width : "3vmax",
        }}/>

        <Link to={`/user/${ownId}`}>
          <Typography fontWeight={700}>{ownName}</Typography>
        </Link>

        <Typography
          fontWeight={100}
          color = "rgba(0,0,0,0.5)"
          style={{alignSelf : "center"}}
        >
          {caption}
        </Typography>

      </div>
    </div>
  )
}

export default Post
