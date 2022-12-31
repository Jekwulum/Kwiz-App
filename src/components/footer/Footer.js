import React from 'react'

const Footer = () => {
  return (
    <footer className='text-cust-light text-xl text-center bg-cust-green w-full fixed bottom-0'>
      <span>Copyright @ {new Date().getFullYear()}</span>
    </footer>
  )
}

export default Footer;