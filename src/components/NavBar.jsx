import React from 'react'

const NavBar = () => {
  return (
    <nav className='fixed top-0 left-0 z-50 md:p-9 p-3'>
        <img src="\images\nav-logo.svg" alt="" className='md:w-24 w-20'/>
        {/* <i class="fa-light fa-bars" className='color-black'></i> */}
    </nav>
  )
}

export default NavBar