import React, { useContext, useState } from 'react';
import { db } from '../firebase';
import { collection, query, where, getDocs, setDoc  ,doc,updateDoc, serverTimestamp, getDoc } from 'firebase/firestore';
import { AuthContext } from '../Context/AuthContext';

function Searchbar() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const {currentUser} = useContext(AuthContext)

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
  const handleSelect = async () => {
    const combinedID = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
    try {
        const res = await getDoc(doc(db, 'Chats', combinedID)); // Corrected the usage of getDocs
        if (!res.exists()) {
            await setDoc(doc(db, 'chats', combinedID), {
                messages: []
            });
            await updateDoc(doc(db, 'userChats', currentUser.uid), {
                [combinedID + '.userInfo']: {
                    uid: user.uid,
                    name: user.name,
                    photoURL: user.photoURL
                },
                [combinedID + '.date']: serverTimestamp()
            });
            await updateDoc(doc(db, 'userChats', user.uid), {
              [combinedID + '.userInfo']: {
                  uid: currentUser.uid,
                  name: currentUser.name,
                  photoURL: currentUser.photoURL
              },
              [combinedID + '.date']: serverTimestamp()
          });
        }
    } catch (error) {
        console.error('Error creating or updating chat:', error);
    }
    setUser(null)
    setUsername("")
};

  
  return (
    <div>
      <input
        type="text"
        onKeyDown={handleKey}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Find User"
        value={username}
        className="w-full h-10 px-4 bg-slate-700 text-black text-xl focus:outline-none focus:bg-pink-400 focus:text-gray-900"
      />
      {error && <span>User Not Found!</span>}
      {user && (
        <div className="flex bg-slate-800 p-4 rounded-lg " onClick={handleSelect}>
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
