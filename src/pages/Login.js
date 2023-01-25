import React, { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import LoginPhoto from '../assets/images/login.svg';
import AuthService from "../utils/services/auth.service";
import tokenHelper from '../utils/helpers/tokenHelper';
import { Loading } from '../utils/helpers/constants';
import encryptHelper from '../utils/helpers/encryptHelper';


const Login = () => {
  const navigate = useNavigate(), isLoggedIn = tokenHelper.checkIfLoggedIn();
  const [passwordType, setPasswordType] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoadingStatus] = useState(false);
  const [errorStatus, setLoginErrorStatus] = useState(false);
  const ifValidated = !email || !password;

  if (isLoggedIn) return <Navigate to={{ pathname: "/" }} />;

  const togglePasswordField = type => {
    setPasswordType(type);
    document.getElementById('password').type = type;
  };

  const handleLogin = async () => {
    setLoginErrorStatus(false);
    setLoadingStatus(true);
    const { data: responseData } = await AuthService.login({ email, password });
    if (responseData.status !== Loading.SUCCESS) {
      setLoginErrorStatus(true);
      setMessage(responseData.message);
      setLoadingStatus(false);
    } else validateLogin(responseData);
  };

  const validateLogin = async responseData => {
    const tokenData = encryptHelper.jwtDecode(responseData.access);
    if (tokenData) {
      await setLoggedInUser(responseData.access, tokenData);
      setLoadingStatus(false);
      navigate('/dashboard');
    } else {
      setLoginErrorStatus(false);
      setLoadingStatus(false);
    }
  };

  const setLoggedInUser = async (token, user) => {
    tokenHelper.saveToken(token);
    tokenHelper.saveUserId(user.userId);
  };

  return (
    <div className='flex md:flex-row items-center justify-center mx-auto h-screen space-x-6'>

      <div className='hidden md:block'>
        <img src={LoginPhoto} alt='Login Photo' className="h-96 w-64" />
      </div>

      <div className=''>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-3xl m-4 text-light-bg'>User Login</p>

          {errorStatus ?
            <div className='text-red-600 text-lg font-semibold italic bg-red-100 w-64 text-center'>{message}</div> : ""
          }

          <input placeholder='email' type='email'
            value={email} onChange={e => setEmail(e.target.value)}
            className='m-2 w-64 h-10 rounded-full text-center focus:outline-none text-sm placeholder-light-bg text-light-bg bg-gray-200' />

          <div>
            <input placeholder='password' type={passwordType}
              value={password} onChange={e => setPassword(e.target.value)}
              className='m-2 w-64 h-10 rounded-full text-center focus:outline-none text-sm placeholder-light-bg text-light-bg bg-gray-200' />

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

          <button type='submit' onClick={handleLogin} disabled={ifValidated}
            className='w-64 h-10 m-2 mt-4 rounded-full text-sm text-cust-light bg-light-bg'>
            Login {loading ? <>&nbsp;<i className="uil uil-spinner"></i></> : ""}</button>
        </div>
      </div>

    </div>
  )
}

export default Login;