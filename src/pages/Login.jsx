import React from 'react';
function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="box p-8 bg-gray-800 rounded-lg shadow-lg text-center md:w-1/2 lg:w-1/3">
        <div className="text-3xl font-bold text-white mb-4">Telugram</div>
        <div className="text-xl font-semibold text-white mb-4">Login</div>
        <form>
          <input
            className="w-full px-4 py-2 mb-4 rounded bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:bg-gray-600"
            type="email"
            placeholder="Email"
          />
          <input
            className="w-full px-4 py-2 mb-4 rounded bg-gray-700 text-white placeholder-gray-500 focus:outline-none focus:bg-gray-600"
            type="password"
            placeholder="Password"
          />
          <button
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Login
          </button>
          <p className="text-white mt-4">Doesn't Have An Account? Register!</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
