import { useState, useEffect } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "../firebase";
import Message from "./Message";
import SendMessage from "./SendMessage";

const ChatBox = ({user, auth}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe;
  }, []);

  return (
    <div className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
      <div className="card w-100">
        <div className="card-header">
          Chat
        </div>
        <ul className="list-group list-group-flush">
          {messages?.map((message) => (
              <Message key={message.id} message={message} user={user}/>
          ))}
        </ul>
      </div>
      <SendMessage auth={auth}/>
    </div>
  );
};

export default ChatBox;
