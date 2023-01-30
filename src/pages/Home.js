import React from 'react';
import { NavLink } from 'react-router-dom';
import HomePhoto from '../assets/images/home_photo.svg';

const Home = () => {
  return (
    <div className=''>

      <div className='flex justify-between my-6 mx-3'>
        <p className='text-5xl font-bold text-light-bg'>Kwiz</p>
        <nav className='flex gap-2 my-auto '>
          <NavLink to="/login" className="hover:text-light-bg hover:bg-gray-200 rounded-full p-2 transition duration-300 ease-in">Login</NavLink>
          <NavLink to="/signup" className="hover:text-light-bg hover:bg-gray-200 rounded-full p-2 transition duration-300 ease-in">Sign up</NavLink>
        </nav>
      </div>

      <div className='h-32 mx-auto text-center'>
        <input type="text" placeholder='Enter Quiz Code'
          className='w-3/6 md:w-80 h-9 m-2 p-4 border-2 outline-none align-middle text-center text-light-bg'/>
        <button className='bg-light-bg h-11 w-11 mt-2 rounded-full text-white font-bold text-lg'>Go</button>
      </div>

      <div className='flex text-center items-center mx-auto'>
        <img src={HomePhoto} alt="" className='mx-auto h-72' />
      </div>

    </div>
  )
};

export default Home;