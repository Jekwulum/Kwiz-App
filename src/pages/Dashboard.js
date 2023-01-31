import React, { useEffect } from 'react';
import { batch, useSelector, useDispatch } from 'react-redux';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import SideMenu from '../components/sideMenu/SideMenu';

import { configs } from '../utils/helpers/constants';
import { fetchUserById } from '../store/slice/userSlice';
import { Loading } from '../utils/helpers/constants';
import { SphereLoader } from '../components/loaders/SphereLoaders';
import tokenHelper from '../utils/helpers/tokenHelper';


const Dashboard = () => {

  const dispatch = useDispatch();
  const { user, loadingUser } = useSelector(state => state.user);
  const userId = tokenHelper.getUserId();
  console.log(userId);

  useEffect(() => {
    batch(() => {
      if (loadingUser !== Loading.SUCCESS) dispatch(fetchUserById(userId))
    });
  }, [dispatch, loadingUser]);

  return (
    <div className='flex'>
      <SideMenu />

      <div>
        <div className='h-screen'>
          <Header />
          <div className='p-7 h-5/6 font-semibold flex-1 dark:bg-cust-dark-body dark:text-cust-light'>
            <h1 className='text-4xl'>Dashboard</h1>
            <div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil a rerum eaque maxime id. Sed aut, mollitia maxime dolores pariatur magni corporis eveniet eaque labore quas velit aliquid eligendi repellendus tempore, ipsam repellat in modi nulla culpa, sapiente enim? Quia necessitatibus quod, praesentium soluta obcaecati nostrum. Ut debitis esse eius!</p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Dashboard;