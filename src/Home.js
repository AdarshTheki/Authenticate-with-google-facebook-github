import React from "react";
import { post } from "./users"; 
import Card from "./Components/Cart";

const Home = () => {
  return (
    <div className="home">
      {post.map(post  => (
        <Card post={post} key={post.id}/>
      ))}
    </div>
  );
};

export default Home;
