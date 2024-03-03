import React, { useRef, useEffect } from 'react';
import Message from './Message';

function Messages() {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(() => {
    scrollToBottom();
  }, []);
  const addNewMessage = () => {
    scrollToBottom();
  };
  return (
    <div className="messages-container" style={{ maxHeight: '51vh', overflowY: 'auto' }}>
      <div className="messages">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default Messages;
