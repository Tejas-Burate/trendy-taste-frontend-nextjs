"use client"

import React, { useState, useEffect } from 'react';

export default function userProfile(){

    const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from an API endpoint
    fetch('https://trendy-taste-a7jv.onrender.com/users/getAllUsers')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
    return(
        // <div>
        //     <h1> This is User Profile Page </h1>
        // </div>
        <div className="overflow-x-auto ">
        <table className="w-full border-red-600 ">
          <thead>
            <tr className="bg-green-600">
              <th className="border px-4 py-2">User ID</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Mobile</th>
              <th className="border px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user._id} className="bg-yello-100">
                <td className="border px-4 py-2">{user._id}</td>
                <td className="border px-4 py-2">{user.mobile}</td>
                <td className="border px-4 py-2">{user.fullName}</td>
                <td className="border px-4 py-2">{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}


