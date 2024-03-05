import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { ChatContext } from '../Context/ChatContext';

function Message({ message }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const bgWidth = `${message?.text?.length * 10 + 125}px`; 

  return (
    <>
      <div className="bg-slate-600 border-b border-gray-200 border-2 rounded-2xl m-2" style={{ width: bgWidth }}>
        <div className="flex items-center space-x-4">
          {/* User Name */}
          <div className="name">
            <h1 className="text-lg font-bold">
              {message?.senderId === currentUser?.uid ? currentUser.displayName : data.user?.name}
            </h1>
          </div>

          {/* User message */}
          <div className="message">
            <p>{message?.text}</p> 
          </div>
        </div>
        <div className="time">
          <p className="text-gray-500 ml-2">Now</p>
        </div>
      </div>
    </>
  );
}

export default Message;
