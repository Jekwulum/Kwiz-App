import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import SignupPhoto from "../assets/images/signup_photo.svg";
import AuthService from '../utils/services/auth.service';
import encryptHelper from '../utils/helpers/encryptHelper';
import tokenHelper from '../utils/helpers/tokenHelper';
import { Loading } from '../utils/helpers/constants';

const Signup = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoadingStatus] = useState(false);

  const togglePasswordField = type => {
    setPasswordType(type);
    document.getElementById('passwordMain').type = type;
  };

  const toggleConfirmPasswordField = type => {
    setConfirmPasswordType(type);
    document.getElementById('confirmPassword').type = type;
  };

  return (
    <div className='flex md:flex-row items-center justify-center mx-auto h-screen space-x-6'>
      <div className='hidden md:block'>
        <img src={SignupPhoto} alt='Login Photo' className="h-96 w-64" />
      </div>

      <div>
        <div className="flex flex-col justify-center items-center">
          <p className='text-3xl m-4 text-light-bg'>Create an account</p>

          <input placeholder='email' type='email'
            value={email} onChange={e => setEmail(e.target.value)}
            className='m-2 w-64 h-10 rounded-full text-center focus:outline-none text-sm placeholder-light-bg text-light-bg bg-gray-200' />

          <input placeholder='First name' type='text'
            className='m-2 w-64 h-10 rounded-full text-center focus:outline-none text-sm placeholder-light-bg text-light-bg bg-gray-200' />

          <input placeholder='Last name' type='text'
            className='m-2 w-64 h-10 rounded-full text-center focus:outline-none text-sm placeholder-light-bg text-light-bg bg-gray-200' />

          <div>
            <input placeholder='password' type={passwordType} value={password} onChange={e => setPassword(e.target.value)} id='passwordMain'
              className='m-2 w-64 h-10 rounded-full text-center focus:outline-none text-sm placeholder-light-bg text-light-bg bg-gray-200' />

            <div className='h-0 eye-right relative left-60 bottom-10 text-light-bg'>
              {
                passwordType === "password" ?
                  <i onClick={() => togglePasswordField('text')} className='uil uil-eye'></i> :
                  <i onClick={() => togglePasswordField('password')} className='uil uil-eye-slash'></i>
              }
            </div>
          </div>

          <div>
            <input placeholder='confirm password' type={confirmPasswordType} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} id={'confirmPassword'}
              className='m-2 w-64 h-10 rounded-full text-center focus:outline-none text-sm placeholder-light-bg text-light-bg bg-gray-200' />

            <div className='h-0 eye-right relative left-60 bottom-10 text-light-bg'>
              {
                confirmPasswordType === "password" ?
                  <i onClick={() => toggleConfirmPasswordField('text')} className='uil uil-eye'></i> :
                  <i onClick={() => toggleConfirmPasswordField('password')} className='uil uil-eye-slash'></i>
              }
            </div>
          </div>

          <button type='submit'
            className='w-64 h-10 m-2 mt-4 rounded-full text-sm text-cust-light bg-light-bg'>
            Create {loading ? <>&nbsp;<i class="fa fa-spinner fa-spin mx-1"></i></> : ""}</button>

          <p className='text-xs'>Already have an account? <a href="/login" className='text-light-bg'>Sign in here</a></p>
        </div>
      </div>
    </div>
  )
};

export default Signup;