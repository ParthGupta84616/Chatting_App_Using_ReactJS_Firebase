import React from 'react';

function Searchbar() {
  return (
    <div>
      <input
        type="text"
        placeholder="Find User"
        className="w-full h-10 px-4  bg-slate-700 text-black text-xl focus:outline-none focus:bg-pink-400 focus:text-gray-900"
      />
       <div className="flex bg-slate-800 p-4 rounded-lg">
        <img
          src="https://th.bing.com/th?id=ORMS.8ffbda0a4d3dd77c25111cd220429d7f&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0" // Replace with the correct path to your avatar image
          alt="Avatar"
          className="w-16 h-16 rounded-full"
        />
        <div className="ml-5 text-12 text-white flex items-center">
          <div className="font-bold">Lorem Ipsum</div>
          
        </div>
      </div>  
    </div>
  );
}

export default Searchbar;
