"use client"


import React, { useState, useEffect } from 'react';

export default function userProfile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from an API endpoint
    fetch('https://trendy-taste-a7jv.onrender.com/users/getAllUsers')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className=" py-3 px-20 items-center h-screen overflow-x-auto">
      <table className="w-full table-striped rounded-sm p-2.5 border-separate table-auto border-red-700  shadow-red-700 shadow-lg">
        <thead className="">
          <tr className="bg-red-600 font-semibold text-3xl">
            <th className="border px-4 py-2">Sr. No</th>
            <th className="border px-4 py-2">User ID</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Mobile</th>
            <th className="border px-4 py-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={user._id} className="font-semibold text-2xl">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{user._id}</td>
              <td className="border px-4 py-2">{user.fullName}</td>
              <td className="border px-4 py-2">{user.mobile}</td>
              <td className="border px-4 py-2">{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


