import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className='header w-full h-16 bg-slate-300/20'>
      <NavLink to='/' className='w-10 h-10 rounded-lg items-center justify-center font-bold shadow-md flex'>
        <p className='blue-gradient_text'>AH</p>
      </NavLink>
      <nav className='font-medium flex items-center gap-7 text-lg'>
        <NavLink to='/about' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>About</NavLink>
        <NavLink to='/project' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>Project</NavLink>
        <NavLink to='/contact' className={({isActive})=> isActive ? 'text-blue-500' : 'text-black'}>Contact</NavLink>
        
      </nav>
    </header>
  )
}

export default Navbar
