"use Client"
import React from 'react'

const Footer = () => {
  return (
    <footer className="h-40 bg-red-700 mt-5">
    <div className="flex p-5 justify-around">
      <div className="text-center justify-center">
        <h1>Welcome To Work Manager</h1>
        <p>Lorem, ipsum dolor dolorum, esse ipsa aliquid!</p>
      </div>
      <div className="text-center" >
        <h1>Important Links</h1>
        <ul>
          <li><a href="#!">Facebook</a></li>
          <li><a href="#!">YouTube</a></li>
          <li><a href="#!">Instagram</a></li>
        </ul>
      </div>
    </div>
</footer>
  )
}

export default Footer