import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";

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

  return (
    <>
      {isAuthenticated ? (
        <ul className='list'>
          <li className='listItems cursor'>
            <img className='listAvatar' src={user?.picture} alt='avatar' />
          </li>
          <li className='listItems'>
            Hey, {user?.given_name || user?.nickname || user?.name}
          </li>
          <li
            className='listItems cursor'
            onClick={() => logout({ returnTo: window.location.origin })}>
            Logout
          </li>
        </ul>
      ) : (
        <ul className='list'>
          <li className='listItems cursor'>
            <FaUserCircle className='listAvatar' />
          </li>
          <li className='listItems'>owner, YourName</li>
          <li className='listItems cursor' onClick={() => loginWithRedirect()}>
            LogIn
          </li>
        </ul>
      )}
    </>
  );
};

export default Authenticated;
