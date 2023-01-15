import React from 'react';
import LoginPhoto from '../assets/images/login.svg';

const Login = () => {
  return (
    <div>Login
        <div>
            <img src={LoginPhoto} className="h-75 w-32"/>
        </div>
    </div>
  )
}

export default Login;