import { useState } from "react";

export default function Chat({ messages, onSend, onBubbleCreate }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      onSend(input.trim());
      setInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleBubble = () => {
    if (input) {
      onBubbleCreate(input);
      setInput("");
    }
  };

  return (
    <div className="chat-container">      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.from}`}>
            <div className="message-content">{message.text}</div>
          </div>
        ))}
      </div>
      <div className="input-row">
        <textarea 
          value={input} 
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message here..."
          rows={3}
        />
        <div className="button-container">
          <button onClick={handleSend}>Send</button>
          <button onClick={handleBubble}>Create Bubble</button>
        </div>
      </div>
    </div>
  );
}
