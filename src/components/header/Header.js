import React from 'react';
import profilePicture from '../../assets/images/profile-pic.svg';
import AuthService from '../../utils/services/auth.service';

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 p-1 text-cust-light">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
  </svg>
);

const SignOutIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 p-1 text-cust-light">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
  </svg>

);

const removeLoggedInUser = async () => {};

const Header = () => {

  const toggleMode = () => {
    const element = document.querySelector('html').className;
    document.querySelector('html').className = element === 'dark' ? '' : 'dark';
  };

  return (
    <div className='flex justify-end text-cust-light items-center px-4 h-14 bg-light-bg dark:bg-cust-dark-nav'>

      <div onClick={() => toggleMode()}
        className='border-none hover:cursor-pointer hover:bg-cust-light/25 rounded-full'>
        <MoonIcon />
      </div>

      <div className='border-none hover:cursor-pointer hover:bg-cust-light/25 rounded-full'>
        <SignOutIcon />
      </div>

      <img className='h-12 w-12 border-none p-1 hover:cursor-pointer hover:bg-cust-light/25 rounded-full' src={profilePicture} alt="" />

    </div>
  )
}

export default Header;