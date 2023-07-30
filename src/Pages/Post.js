import React from "react";
import { post } from "../users";
import { Link, useLocation } from "react-router-dom";

const Post = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const posts = post.find((p) => p.id.toString() === path);
  return (
    <div className='post'>
      <img className='postImg' src={posts.avatar_url} alt='PostImage' />
      <h1 className='postTitle'>{posts.login}</h1>
      <p className='postDesc'>
        {posts.login} Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nisi officia quibusdam id aut a harum sed accusamus iste.
      </p>
      <p className='postLongDesc'>
        This is a Contact to this GitHub:-{" "}
        <span>{posts.login}gitHub@profile.com</span> and also Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Distinctio, adipisci! the Email:-{" "}
        <span>{posts.login}@gmail.com</span>Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Commodi necessitatibus laboriosam delectus
        architecto non animi error beatae quasi optio reiciendis dolor in link
        to{" "}
        <a href={posts.html_url} target="__blank" title='user detail'>
          Click Here 👈
        </a>
      </p>
    </div>
  );
};

export default Post;
