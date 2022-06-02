import React from 'react'
import Post from '../Post/Post';
import User from '../User/User';
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="homeleft">
        <User
          userId={"user._id"}
          name={"Abhishek"}
          dp={"https://th.bing.com/th/id/OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ?w=232&h=180&c=7&r=0&o=5&pid=1.7"}
        />
        <User
          userId={"user._id"}
          name={"Elon Musk"}
          dp={"https://th.bing.com/th/id/OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ?w=232&h=180&c=7&r=0&o=5&pid=1.7"}
        />
        <User
          userId={"user._id"}
          name={"Abhishek"}
          dp={"https://th.bing.com/th/id/OIP.ddIZudKNg4dgPdTUYy7UxAHaFQ?w=232&h=180&c=7&r=0&o=5&pid=1.7"}
        />
      </div>
      <div className="homeright">
        <Post/>

      </div>
    </div>
  )
}

export default Home
