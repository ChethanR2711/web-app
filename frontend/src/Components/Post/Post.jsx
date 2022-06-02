import { Avatar, Button, Typography } from '@mui/material'
import { Link } from "react-router-dom";
import { 
  ThumbUp,
  ThumbUpOutlined,
  MoreVert,
  ChatBubbleOutline,
  DeleteOutline,
 } from "@mui/icons-material";
import React, { useState } from 'react'
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

  const [liked,setLiked] = useState(false)

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

      <button 
        style={{
          border :"none",
          backgroundColor : "white",
          cursor : "pointer",
          margin : "1vmax 2vmax",
        }}
      >
        {/* <Typography>5 likes</Typography> */}
      </button>

      <div className="postFooter">
        
        <Button>
          {
            liked? <ThumbUp/> : <ThumbUpOutlined />
          }
        </Button>

        <Button>
          <ChatBubbleOutline />
        </Button>

        <Button>
          <DeleteOutline />
        </Button>

      </div>
    </div>
  )
}

export default Post
