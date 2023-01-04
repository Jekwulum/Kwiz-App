import React from 'react'

const Footer = () => {
  return (
    <footer className='text-cust-light h-1/6 text-xl text-center bg-light-bg 
    dark:bg-cust-dark-nav w-full fixed bottom-0 pt-8'>
      <p>powered by Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quidem ipsa sed. Doloremque, ullam eveniet?</p>
      <span>Copyright @ {new Date().getFullYear()}</span>
    </footer>
  )
}

export default Footer;