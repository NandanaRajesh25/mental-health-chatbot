import { useState } from "react";
import "./styles.css";
import Avatar from "./components/Avatar";
import Chat from "./components/Chat";
import Bubble from "./components/Bubble";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [bubbles, setBubbles] = useState([]);
  const [mood, setMood] = useState("idle");

  const sendMessage = (msg) => {
    setMessages([...messages, { text: msg, from: "user" }]);
    setMood("happy");
    setTimeout(() => setMood("idle"), 3000);
  };

  const createBubble = (text) => {
    const newBubble = { id: Date.now(), text };
    setBubbles([...bubbles, newBubble]);
  };

  const popBubble = (id) => {
    setBubbles(bubbles.filter((b) => b.id !== id));
  };

  return (
    <div className="main-container">
      <div className="left-pane">
        <h1 className="app-title">Mental Health Chatbot</h1>
        <Avatar mood={mood} />
        {bubbles.map((b, index) => (
          <Bubble 
            key={b.id} 
            message={b.text} 
            onPop={() => popBubble(b.id)}
            index={index}
          />
        ))}
      </div>
      <div className="right-pane">
        <Chat messages={messages} onSend={sendMessage} onBubbleCreate={createBubble} />
      </div>
    </div>
  );
}
