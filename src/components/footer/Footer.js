import React from 'react';

const Footer = ({ fixed = false }) => {
  return (
    <footer className={`text-cust-light md:h-16 text-xs text-center bg-light-bg p-2
    dark:bg-cust-dark-nav w-full bottom-0 ${fixed ? 'fixed' : ''}`}>
      <p className='mt-2'>powered by Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quidem ipsa sed. Doloremque, ullam eveniet?</p>
      <span>Copyright @ {new Date().getFullYear()}</span>
    </footer>
  )
}

export default Footer;