'use client'

import React from 'react'
import Home  from './CustomNavbar';
import Link from 'next/link';

const CustomNavbar = () => {

  return (
  <nav className="bg-red-700 h-12 py-3 px-3 flex justify-between items-center">
    <div className="brand"> 
    <h1 className="text-2xl font-semibold"> <a href="#/"> Work Manager </a></h1>
    </div>
    <div>
      <ul className="flex space-x-5 justify-between"> 
        <li> 
          {/* <a href="/Home">Home</a> */}
          <Link href={"/"} className="hover:text-green-400"> Home</Link>
        </li>
        <li> 
          <Link href={"/add-Task"} className="hover:text-green-400">Add Tasks</Link>
        </li>
        <li> 
          <Link href={"/show-tasks"} className="hover:text-green-400">Show Tasks</Link>
        </li>
      </ul>
    </div>
    <div> 
      <ul className="flex space-x-5 justify-between"> 
      <li> 
          <Link href={"/login"} className="hover:text-green-400"> Login</Link>
        </li>
        <li> 
          <a href="#!"> Sign Up</a>
        </li>
      </ul>
    </div>
  </nav>
)}

export default CustomNavbar