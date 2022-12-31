import React from 'react';
import profilePicture from '../../assets/images/profile-pic.svg';

const Header = () => {
  return (
    <div className='flex justify-end items-center px-4 h-14 bg-cust-green'>
      <img className='h-12 w-12 border-none p-1 hover:cursor-pointer hover:bg-cust-light/25 rounded-full' src={profilePicture} alt="" />
    </div>
  )
}

export default Header;