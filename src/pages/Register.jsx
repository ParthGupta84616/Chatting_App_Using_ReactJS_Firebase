import add from "../imgaes/Picture.png"
import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../firebase'; 



function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const displayPicture = e.target[3].files[0]; 

    const auth = getAuth(); 

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Registration error:", errorMessage);
      });
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="box p-8 bg-gray-800 rounded-lg shadow-lg text-center md:w-1/2 lg:w-1/3">
        <div className="text-3xl font-bold text-white mb-4">Telugram</div>
        <div className="text-xl font-semibold text-white mb-4">Register</div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="displayName" className="sr-only">Display Name</label>
            <input
              id="displayName"
              name="displayName"
              type="text"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:bg-gray-600"
              placeholder="Display Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:bg-gray-600"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:bg-gray-600"
              placeholder="Password"
              required
            />
          </div>
          <div className="relative">
            <input
              id="avatar"
              name="avatar"
              type="file"
              className="hidden"
            />
            <label htmlFor="avatar" className="text-white absolute top-0 right-0 cursor-pointer"><img src={add} alt="" className="w-6 h-6" /></label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
          <p className="text-white mt-4">Already Have An Account? Login!</p>
        </form>
      </div>
    </div>
  );
}

export default Register;
