import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs } from 'firebase/firestore';

function Searchbar() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);

  const handleSearch = async () => {
    try {
      const q = query(collection(db, 'user'), where('name', '==', username));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        setError(true);      
        setUser(null); 
      } else {
        querySnapshot.forEach((doc) => {
          setUser(doc.data()); 
        });
        setError(false); 
      }
    } catch (err) {
      setError(true);       
      setUser(null);
    }
  };

  const handleKey = (e) => {
    if (e.code === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        onKeyDown={handleKey}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Find User"
        className="w-full h-10 px-4 bg-slate-700 text-black text-xl focus:outline-none focus:bg-pink-400 focus:text-gray-900"
      />
      {error && <span>User Not Found!</span>}
      {user && (
        <div className="flex bg-slate-800 p-4 rounded-lg ">
          <img
            src={user.photoURL}
            alt="Avatar"
            className="w-16 h-16 rounded-full"
          />
          <div className="ml-5 text-12 text-white flex items-center">
            <div className="font-bold">{user.name}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Searchbar;
