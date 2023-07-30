import React from "react";
import { FaGoogle, FaFacebookSquare, FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div className='login'>
      <h1 className='loginTitle'>choose a Login Method</h1>
      <div className='loginWrapper'>
        <div className='loginLeft'>
          <div className='loginButton google'>
            <FaGoogle className='loginIcon' />
            Google
          </div>
          <div className='loginButton facebook'>
            <FaFacebookSquare className='loginIcon' />
            Facebook
          </div>
          <div className='loginButton github'>
            <FaGithub className='loginIcon' />
            GitHub
          </div>
        </div>
        <div className='loginCenter'>
          <div className='loginLine'></div>
          <div className='loginOr'>or</div>
        </div>
        <div className='loginRight'>
          <input type='text' placeholder='Enter UserName ...' />
          <input type='text' placeholder='Enter Password ...' />
          <button className='loginSubmit'>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
