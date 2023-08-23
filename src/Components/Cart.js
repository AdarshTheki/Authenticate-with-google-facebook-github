import React from "react";
import { Link } from "react-router-dom";
import 'react-icons/md'
import { MdOutlineEmail } from "react-icons/md";

const Card = ({ login, id, avatar_url }) => {
  return (
    <div className='card'>
      <Link className="cardLink" to={`post/${id}`}>
        <span className='title'>{login}</span>
        <img className='img' src={avatar_url} alt={login} />
        <p className='desc'>
          <span className='email'><MdOutlineEmail/> {login}@gitHub.com</span>
        </p>
        <button className='card-btn'>Read More</button>
      </Link>
    </div>
  );
};

export default Card;
