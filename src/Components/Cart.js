import React from "react";
import { Link } from "react-router-dom";

const Card = ({ post }) => {
  return (
    <div className='card'>
      <Link className="cardLink" to={`post/${post.id}`}>
        <span className='title'>{post.login}</span>
        <img className='img' src={post.avatar_url} alt={post.login} />
        <p className='desc'>
          {post.login} Lorem ipsum dolor sit amet consectetur adipisicing{" "}
          <span className='email'>{post.login}@gitHub.com</span>
        </p>
        <button className='card-btn'>Read More</button>
      </Link>
    </div>
  );
};

export default Card;
