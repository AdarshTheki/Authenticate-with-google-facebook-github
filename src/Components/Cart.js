import React from 'react'

const Card = ({post}) => {
  return (
    <div className='card'>
      <span className='title'>{post.login}</span>
      <img className='img' src={post.avatar_url} alt={post.login} />
      <p className='desc'>
        {post.login} Lorem ipsum dolor sit amet consectetur adipisicing{" "}
        <span className='email'>{post.login}@gitHub.com</span>
      </p>
      <button className='card-btn'>Read More</button>
    </div>
  );
}

export default Card
