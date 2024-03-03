import React from 'react';

function Message() {
  const message = "User Message"; // Example message content
  const messageLength = message.length;
  const bgWidth = `${messageLength * 10 + 125}px`; // Assuming 10px per character, adjust as needed

  return (
    <>
      <div className="bg-slate-600 border-b border-gray-200 border-2 rounded-2xl m-2" style={{ width: bgWidth }}>
        <div className="flex items-center space-x-4">
          {/* User Avatar */}
          <div className="img">
            <img src="https://th.bing.com/th?id=ORMS.8ffbda0a4d3dd77c25111cd220429d7f&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1.25&p=0" alt="Avatar" className="size-16 p-2  rounded-full" />
          </div>

          {/* User Name */}
          <div className="name">
            <h1 className="text-lg font-bold">User</h1>
          </div>

          {/* User Message */}
          <div className="message">
            <p>{message}</p>
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
