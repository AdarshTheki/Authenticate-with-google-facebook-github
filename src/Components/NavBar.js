import React from "react";
import { Link } from "react-router-dom";
import Authenticated from './Authenticated'

const NavBar = () => {
  return (
    <div>
      <div className='navbar'>
        <span>
          <Link className='Link' to='/'>
            Gallery
          </Link>
        </span>
        <Authenticated/>
      </div>
    </div>
  );
};

export default NavBar;
