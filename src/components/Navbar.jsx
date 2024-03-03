import React from 'react';

function Navbar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full h-1/6 bg-gray-800 rounded-xl">
      <div className="w-full md:w-1/4 p-4 text-center md:text-left">
        <span className="text-lg font-bold"><strong>Telugram</strong></span>
      </div>
      <div className="w-full md:w-1/4 flex justify-center p-4">
        <img src="" alt="Avatar" className="w-8 h-8 rounded-full" />
      </div>
      <div className="w-full md:w-1/4 flex justify-center p-4">
        <span className="name">Lorem ipsum</span>
      </div>
      <div className="w-full md:w-1/4 flex justify-end p-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Logout</button>
      </div>
    </div>
  );
}

export default Navbar;
