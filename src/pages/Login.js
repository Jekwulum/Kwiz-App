import React, { useState } from 'react';
import LoginPhoto from '../assets/images/login.svg';


const Login = () => {
  const [passwordType, setPasswordType] = useState("password");

  const togglePasswordField = type => {
    setPasswordType(type);
    document.getElementById('password').type = type;
  };

  return (
    <div className='flex md:flex-row items-center justify-center mx-auto h-screen space-x-6'>

      <div className='hidden md:block'>
        <img src={LoginPhoto} className="h-96 w-64" />
      </div>

      <div className=''>
        <form className='flex flex-col justify-center items-center'>
          <p className='text-3xl m-4 text-light-bg'>User Login</p>

          <input placeholder='email' type='email' className='m-2 w-64 h-10 rounded-full text-center focus:outline-none text-sm placeholder-light-bg text-light-bg bg-gray-200' />

          <div>
            <input placeholder='password' type={passwordType} className='m-2 w-64 h-10 rounded-full text-center focus:outline-none text-sm placeholder-light-bg text-light-bg bg-gray-200' />
            <div className='eye-right relative left-60 bottom-10 text-light-bg'>
              {
                passwordType === "password" ?
                  <i onClick={() => togglePasswordField('text')} className='uil uil-eye'></i> :
                  <i onClick={() => togglePasswordField('password')} className='uil uil-eye-slash'></i>
              }
            </div>
          </div>

          <div className='flex space-x-10 text-xs text-light-bg m-2 items-center text-center'>

            <span className='flex items-center'>
              <input id="checkbox_id" type='checkbox' className='focus:outline-none m-1 hover:cursor-pointer text-light-bg' />
              <label htmlFor='checkbox_id' className='hover:cursor-pointer'>remember me</label>
            </span>

            <a href='#' className='underline'>Forgot Password?</a>

          </div>

          <button type='submit' className='w-64 h-10 m-2 mt-4 rounded-full text-sm text-cust-light bg-light-bg'>Login</button>
        </form>
      </div>

    </div>
  )
}

export default Login;