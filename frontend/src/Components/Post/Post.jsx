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

  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    setLiked(!liked);
  }

  return (
    <div className="post">
      <div className="postHeader">
        
        {isAccount ? <Button>
          <MoreVert/>
        </Button> : null}

      </div>

      <img src={postImage} alt="Post" />

      <div className="postDetails">
        <Avatar src={ownImage} alt="User" sx={{
          height: "3vmax",
          width: "3vmax",
        }} />

        <Link to={`/user/${ownId}`}>
          <Typography fontWeight={700}>{ownName}</Typography>
        </Link>

        <Typography
          fontWeight={100}
          color="rgba(0,0,0,0.5)"
          style={{ alignSelf: "center" }}
        >
          {caption}
        </Typography>

      </div>

      <button
        style={{
          border: "none",
          backgroundColor: "white",
          cursor: "pointer",
          margin: "1vmax 2vmax",
        }}
      >
      </button>

      <div className="postFooter">

        <Button onClick={handleLike}>
          {
            liked ? <ThumbUp style={{color: "blue" }} /> : <ThumbUpOutlined />
          }
        </Button>

        <Button>
          <ChatBubbleOutline />
        </Button>

        {isDelete ? (<Button>
            <DeleteOutline />
          </Button>) : null}

      </div>
    </div>
  )
}

export default Post
