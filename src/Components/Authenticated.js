import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Authenticated = () => {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();
  console.log(user);

  if (isLoading) {
    return <h4>Loading...</h4>;
  }
  if (error) {
    return <h4>Oops... {error.message}</h4>;
  }

  if (isAuthenticated) {
    return (
      <ul className='list'>
        <li className='listItems cursor'>
          <img className='listAvatar' src={user?.picture} alt='avatar' />
        </li>
        <li className='listItems'>{user?.nickname || user?.name}</li>
        <li
          className='listItems cursor'
          onClick={() => logout({ returnTo: window.location.origin })}>
          Logout
        </li>
      </ul>
    );
  } else {
    return (
      <ul className='list'>
        <li className='listItems cursor'>
          <img className='listAvatar' src='123.png' height='30' alt='avatar' />
        </li>
        <li className='listItems'>YourName</li>
        <li className='listItems cursor' onClick={() => loginWithRedirect()}>
          LogIn
        </li>
      </ul>
    );
  }
};

export default Authenticated;
