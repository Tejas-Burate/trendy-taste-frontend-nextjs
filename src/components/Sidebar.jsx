import React from 'react'
import Link from 'next/link';
// import {getAllCampus} from '../app/profile/campus'

const Sidebar = () => {
  return (
    <nav className="bg-red-700 h-screen mb-1 w-65 px-3 flex flex-col justify-between">
    <div className="brand"> 
      <h1 className="text-4xl mt-4 ">
        <Link href="/">DashBoard</Link>
      </h1>
    </div>
    <div className="border-spacing-1 mb-44 border-separate  vertical-align: top">
      <ul className="flex flex-col text-4xl space-y-5">
        <li className="mt-2"> 
          <Link href="/" className="hover:text-green-400">Home</Link>
        </li>
        <li> 
          <Link href="/profile/admin" className="hover:text-green-400">Admin</Link>
        </li>
        <li> 
          <Link href="/profile/user" className="hover:text-green-400">User</Link>
        </li>
        <li> 
          <Link href="/profile/campus" className="hover:text-green-400">Campus</Link>
        </li>
        <li> 
          <Link href="/profile/restaurant" className="hover:text-green-400">Restaurants</Link>
        </li>
        <li> 
          <Link href="/profile/category" className="hover:text-green-400">Category</Link>
        </li>
        <li> 
          <Link href="/profile/product" className="hover:text-green-400">Product</Link>
        </li>
        <li> 
          <Link href="/profile/order" className="hover:text-green-400">Orders</Link>
        </li>
      </ul>
    </div>
  </nav>

  );
}

export default Sidebar