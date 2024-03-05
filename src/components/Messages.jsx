import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db } from "../firebase";
import Message from "./Message";
import { ChatContext } from "../Context/ChatContext";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages);

  return (
    <div className="messages-container" style={{ maxHeight: '51vh', overflowY: 'auto' }}>
      <div className="messages">
        {messages.map((message) => (
          <Message message={message} key={message.id} />
        ))}
        </div>
    </div>
  );
}

export default Messages;
