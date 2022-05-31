import React from 'react'
import User from '../User/User';
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeleft"></div>
      <div className="homeright">
        <User
          userId={"user._id"}
          name={"user.name"}
          dp={"user.dp.url"}
        />
      </div>
    </div>
  )
}

export default Home
