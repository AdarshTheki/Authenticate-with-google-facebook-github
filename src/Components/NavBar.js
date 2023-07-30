import React from 'react'
import "./NavBar.css";
import logo from "./Logo.png";


const NavBar = () => {
  return (
    <div>
      <div className='navbar'>
        <span className='logo'>Your LOGO</span>
        <ul className='list'>
          <li className='listItems'>
            <img className='avatar' src={logo} alt='avatar' />
          </li>
          <li className='listItems'>Adarsh Verma</li>
          <li className='listItems'>adadrshverma549@gmail.com</li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar
