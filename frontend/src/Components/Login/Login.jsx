import React, { useState } from 'react'
import "./Login.css";
import { Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';

const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const loginHandler = (e)=>{
    e.preventDefault();
  }

  // API need to be done for email and password

  return (
    <div className="login">
        <form className="loginForm" onSubmit={loginHandler} >

            <Typography variant='h3' style={{padding : "2vmax"}} >Social media App</Typography>

            <input type="email" placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)} />

            <input type="password" placeholder='Password' required value={password} onChange = {(e)=>setPassword(e.target.value)}/>

            <Button type='submit'>Login</Button>

            <Link to="/forgot/password">
                <Typography>Forgot your password?</Typography>
            </Link> 

            <Link to="/register">
                <Typography>New user?</Typography>
            </Link> 
        </form>
    </div>
  )
}

export default Login
