import React, { useContext } from 'react'
import { useEffect, useState } from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../Context/AuthContext';
function Chats() {
  const [chats, setChats] = useState([])
  const { currentUser }= useContext(AuthContext)
    
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);
  console.log(Object.entries(chats));
  return (
    
    
    <div>
      {Object.entries(chats)?.map((chat)=>(
        <div key={chat[0]} className="relative flex bg-slate-800 p-4 rounded-lg ">
        <img
          src={chat[1].userInfo.photoURL} // Replace with the correct path to your avatar image
          alt="Avatar"
          className="w-16 h-16 rounded-full"
        />
        <div className="ml-5 text-12 text-white flex-col items-center">
          <div className="font-bold">{chat[1].userInfo.name}</div>
          <div><p className='text-sm'>{chat[1].userInfo.lastMessage?.text}</p></div>
        </div>
      </div>  
        ))}
        
    </div>
    
  )
}

export default Chats