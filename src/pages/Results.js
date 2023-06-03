import React from 'react';
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import AwardGif from '../assets/images/Award_Animation.gif';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state;

  return (
    <div className=''>
      <div className='w-2/7'>

        <div className='my-3 md:my-6 mx-3'>
          <NavLink to='/' className='text-4xl md:text-5xl font-bold text-light-bg'>Kwiz</NavLink>
        </div>

        <div className='mx-auto text-center my-2 md:my-4 w-full'>
          <h1 className='text-3xl font-bold text-light-bg'>Results</h1>
          <div className='flex items-center justify-center'>
            <img src={AwardGif} alt="" className='w-52 h-52' />
          </div>
          <div className='font-bold text-xl'>You scored: <span className='text-light-bg'>{score}</span>/{total}</div>
          <button onClick={() => {navigate('/')}} className='h-10 p-1 w-40 rounded-sm text-white font-bold text-md bg-light-bg m-4 hover:text-light-bg hover:bg-white hover:border-2 hover:border-light-bg'>Return Home</button>
        </div>
      </div>
    </div>
  )
}

export default Results;