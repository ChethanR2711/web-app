import React from 'react';
import {Link} from 'react-router-dom';
import { Typography } from "@mui/material";

const User = ({userId,name,dp}) => {
  return (
    <Link to={`/user/${userId}`} className="homeUser">
        <img src={dp} alt={name} />
        <Typography>{name}</Typography>
    </Link>
  )
}
 
export default User
