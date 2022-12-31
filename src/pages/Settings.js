import React from 'react';

import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import SideMenu from '../components/sideMenu/SideMenu';

const Settings = () => {
  return (
    <div className='flex'>
      <SideMenu />

      <div>

        <div className='h-screen'>

          <Header />

          <div className='p-7 font-semibold flex-1'>
            <h1 className='text-4xl'>Settings</h1>
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

export default Settings;