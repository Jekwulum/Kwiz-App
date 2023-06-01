import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import SignupPhoto from "../assets/images/signup_photo.svg";
import UserService from '../utils/services/user.service';
import { Loading } from '../utils/helpers/constants';
import { validateEmail } from '../utils/helpers/validators';

const Signup = () => {
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const [re_passwordType, setRePasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [re_password, setRePassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoadingStatus] = useState(false);
  const [errorStatus, setSignUpErrorStatus] = useState(false);
  const [emailValidator, setEmailValidator] = useState(null);

  const isDisabled = !lastName || !firstName || !email || !validateEmail(email) || !password || !re_password || !(re_password === password);

  const togglePasswordField = type => {
    setPasswordType(type);
    document.getElementById('passwordMain').type = type;
  };

  const togglere_passwordField = type => {
    setRePasswordType(type);
    document.getElementById('re_password').type = type;
  };

  const handleEmailValidator = event => {
    const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = event.target.value.toLowerCase().replace(/ /g, "");
    if (!pattern.test(email)) setEmailValidator('Please enter a valid email');
    else {
      setEmailValidator(null);
      setEmail(email);
    }
  };

  const handleSignUp = async () => {
    let payload = { firstName, lastName, email, password, re_password };

    setSignUpErrorStatus(false);
    setLoadingStatus(true);
    const { data: responseData } = await UserService.createUser(payload);
    if (responseData.status !== Loading.SUCCESS) {
      setSignUpErrorStatus(true);
      setMessage(responseData.message);
      setLoadingStatus(false);
    } else navigate('/login');
  };

  return (
    <div className="h-screen">
      <NavLink to="/" className='text-5xl font-bold text-light-bg'>Kwiz</NavLink>
      <div className='flex md:flex-row items-center justify-center mx-auto space-x-6'>
      <div className='hidden md:block'>
        <img src={SignupPhoto} alt='Login' className="h-96 w-64" />
      </div>

      <div>
        <div className="flex flex-col justify-center items-center">
          <p className='text-3xl m-4 text-light-bg'>Create an account</p>

          {errorStatus ?
            <div className='text-red-600 text-lg font-semibold italic bg-red-100 w-64 text-center'>{message}</div> : ""
          }
          <input placeholder='email' type='email'
            value={email} onChange={e => setEmail(e.target.value)} onInput={handleEmailValidator}
            className='m-2 w-64 h-10 rounded-full text-center focus:outline-none text-sm placeholder-light-bg text-light-bg bg-gray-200' />
          {emailValidator ? <small className="text-red-700">{emailValidator}</small> : ''}

          <input placeholder='First name' type='text'
            value={firstName} onChange={e => setFirstName(e.target.value)}
            className='m-2 w-64 h-10 rounded-full text-center focus:outline-none text-sm placeholder-light-bg text-light-bg bg-gray-200' />

          <input placeholder='Last name' type='text'
            value={lastName} onChange={e => setLastName(e.target.value)}
            className='m-2 w-64 h-10 rounded-full text-center focus:outline-none text-sm placeholder-light-bg text-light-bg bg-gray-200' />

          <div>
            <input placeholder='password' type={passwordType} value={password} onChange={e => setPassword(e.target.value)} id='passwordMain'
              className='m-2 w-64 h-10 rounded-full text-center focus:outline-none text-sm placeholder-light-bg text-light-bg bg-gray-200' />

            <div className='h-0 eye-right relative left-60 bottom-10 text-light-bg'>
              {
                passwordType === "password" ?
                  <i onClick={() => togglePasswordField('text')} className='uil uil-eye hover:cursor-pointer'></i> :
                  <i onClick={() => togglePasswordField('password')} className='uil uil-eye-slash hover:cursor-pointer'></i>
              }
            </div>
          </div>

          <div>
            <input placeholder='confirm password' type={re_passwordType} value={re_password} onChange={e => setRePassword(e.target.value)} id={'re_password'}
              className='m-2 w-64 h-10 rounded-full text-center focus:outline-none text-sm placeholder-light-bg text-light-bg bg-gray-200' />

            <div className='h-0 eye-right relative left-60 bottom-10 text-light-bg'>
              {
                re_passwordType === "password" ?
                  <i onClick={() => togglere_passwordField('text')} className='uil uil-eye hover:cursor-pointer'></i> :
                  <i onClick={() => togglere_passwordField('password')} className='uil uil-eye-slash hover:cursor-pointer'></i>
              }
            </div>
          </div>
          {password !== re_password ? <small className="text-red-700">Passwords do not match!</small> : ''}

          <button type='submit' disabled={isDisabled} onClick={handleSignUp}
            className={`w-64 h-10 m-2 mt-4 rounded-full text-sm text-cust-light bg-light-bg ${isDisabled ? 'opacity-50' : ''}`}>
            Create {loading ? <>&nbsp;<i class="fa fa-spinner fa-spin mx-1"></i></> : ""}</button>

          <p className='text-xs'>Already have an account? <a href="/login" className='text-light-bg'>Sign in here</a></p>
        </div>
      </div>
    </div>
    </div>
  )
};

export default Signup;