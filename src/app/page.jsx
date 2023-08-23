"use client"

import React,{useState} from 'react';
import { useRouter } from "next/navigation";

const login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showErrorPopup, setShowErrorPopup] = useState(false);
    const router = useRouter();
  
    const handleLogin = async (event) => {
      console.log("In a handle Login Function");
      event.preventDefault();
      localStorage.setItem("email", email)
      // Regular expression to check if the email is in the desired format
      const emailPattern = /^[A-Za-z0-9._%+-]+@gmail.com$/;
  
      if (!email || !password) {
        // If email or password is empty, show error message in the popup
        setErrorMessage('Please enter both email and password.');
        setShowErrorPopup(true);
      } else if (!emailPattern.test(email)) {
        // If email is not in the desired format, show error message in the popup
        setErrorMessage('Invalid email format. Please use the format username@gmail.com.');
        setShowErrorPopup(true);
      } else {
        
    try {
      const response = await fetch('https://trendy-taste-a7jv.onrender.com/auth/login', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Save the authentication token in local storage
        localStorage.setItem('userId',data.userId);
        localStorage.setItem('accessToken',data.token);
        // Successful login, navigate to leftNavbar or any other route you desire
        window.location.href = '/profile';
        // router.push("")
      } else {
        // Login failed, show error message in the popup
        setErrorMessage('Invalid email or password. Please try again.');
        setShowErrorPopup(true);
      }
    } catch (error) {
          console.error('Error during login:', error);
          // Handle any error that occurred during the API call
          setErrorMessage('An error occurred during login. Please try again later.');
          setShowErrorPopup(true);
        }
      }
    };

  return (
  <div className="grid grid-cols-12">
  <div className="col-span-4 col-start-5">
    <div className="py-5 "></div>

    <h1 className="text-3xl text-center">Admin Login </h1>

    <form action="#!"  onSubmit={handleLogin}>
      <div className="mt-3">
        <label
          htmlFor="email"
          className="block text-sm font-medium mb-2 ps-2"
        >
          Email
        </label>
        <input
          type="email"
          className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
          placeholder="Enter here"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          
        />
      </div>
      {/* password */}
      <div className="mt-3">
        <label
          htmlFor="password"
          className="block text-sm font-medium mb-2 ps-2"
        >
          Password
        </label>
        <input
          type="password"
          className="w-full p-3 rounded-2xl bg-gray-800 focus:ring-gray-400-100 border border-gray-800"
          placeholder="Enter here"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mt-3 text-center">

        <button
          type="submit"
          className="px-3 py-2 bg-green-600  rounded hover:bg-green-400"
        >
          Login
        </button>
        <button
          type="button"
          className="px-3 py-2 bg-orange-600 ms-3 rounded hover:bg-orange-400"
        >
          Reset
        </button>
      </div>
    </form>
  </div>
  {/* {JSON.stringify(loginData)} */}
</div>
  )
}

export default login