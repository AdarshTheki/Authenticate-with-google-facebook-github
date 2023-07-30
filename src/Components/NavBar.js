import React from "react";
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
  return (
    <div>
      <div className='navbar'>
        <span>
          <Link className='Link' to='/'>
            Desktop
          </Link>
        </span>
        {user ? (
          <ul className='list'>
            <li className='listItems'>
              <img className='avatar' src={logo} alt='avatar' />
            </li>
            <li className='listItems'>Adarsh Verma</li>
            <li className='listItems'>Logout</li>
          </ul>
        ) : (
          <Link className="Link" to='/login'>LogIn</Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
