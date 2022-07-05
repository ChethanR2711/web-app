import React from "react";
import Post from "../Post/Post";
import User from "../User/User";
import "./Home.css";

const Home = () => {
  return (
    <div className="home ">
      <div className="homeleft">
        <User
          userId={"user._id"}
          name={"Abhishek"}
          dp={"https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg"}
        />
        <User
          userId={"user._id"}
          name={"Adithya U bhat"}
          dp={"https://img-b.udemycdn.com/user/200_H/121329372_617a.jpg"}
        />
        <User
          userId={"user._id"}
          name={"Chethan"}
          dp={
            "https://th.bing.com/th/id/OIP.LBPVUEMkAvRxo4ck7aXEJQHaE8?w=252&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          }
        />
        <User
          userId={"user._id"}
          name={"Harsha"}
          dp={"https://img-b.udemycdn.com/user/200_H/127072178_c9a0_3.jpg"}
        />
      </div>
      <div className="homeright">
        <div class="bg"></div>
        <div class="bg bg2"></div>
        <div class="bg bg3"></div>
        <Post
          postImage="https://cdn.unenvironment.org/2022-03/field-ge4d2466da_1920.jpg"
          ownName="Abhishek"
          caption={"This is sample post of nature"}
        />
      </div>
    </div>
  );
};

export default Home;
