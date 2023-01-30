import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import HomePhoto from '../assets/images/home_photo.svg';

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = (event) => {
    event.preventDefault();
    setShowMenu(!showMenu);
  };

  const MenuIcon = ({ showMenu }) => (
    showMenu ?
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-light-bg p-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      :
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-light-bg p-1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>

  );

  return (
    <div className=''>

      <div className='flex justify-between my-6 mx-3'>
        <p className='text-5xl font-bold text-light-bg'>Kwiz</p>
        <nav className='hidden md:flex gap-2 my-auto '>
          <NavLink to="/login" className="hover:text-light-bg hover:bg-gray-200 rounded-full p-2 transition duration-300 ease-in">Login</NavLink>
          <NavLink to="/signup" className="hover:text-light-bg hover:bg-gray-200 rounded-full p-2 transition duration-300 ease-in">Sign up</NavLink>
        </nav>

        <div onClick={e => toggleMenu(e)}
          className='md:hidden my-auto hover:cursor-pointer rounded-md hover:bg-gray-200 transition ease-in duration-300'>
          <MenuIcon showMenu={showMenu} />
        </div>

        {/* mobile nav */}
        {showMenu ?
          <div className='bg-light-bg text-white w-32 absolute top-[68px] right-3 rounded-b-lg transition duration-300 ease-in'>
            <nav className='md:hidden flex flex-col text-left'>
              <NavLink to="/login" className="hover:text-light-bg hover:bg-gray-200 p-1 rounded-b-lg transition duration-300 ease-in m-1">Login</NavLink>
              <NavLink to="/signup" className="hover:text-light-bg hover:bg-gray-200 p-1 rounded-b-lg transition duration-300 ease-in m-1">Sign up</NavLink>
            </nav>
          </div> : ""}

      </div>

      <div className='h-32 mx-auto text-center'>
        <input type="text" placeholder='Enter Quiz Code'
          className='w-3/6 md:w-80 h-9 m-2 p-4 border-2 outline-none align-middle text-center text-light-bg' />
        <button className='bg-light-bg h-11 w-11 mt-2 rounded-full text-white font-bold text-lg'>Go</button>
      </div>

      <div className='flex text-center items-center mx-auto'>
        <img src={HomePhoto} alt="" className='mx-auto h-72' />
      </div>
    </div>
  )
};

export default Home;