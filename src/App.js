import React, { useState } from "react";
import "./App.css";
import thinkingPenguin from "./thinking_penguin.png";

function App() {
  const [response, setResponse] = useState("");

  const handleResponse = (answer) => {
    setResponse(`You chose: ${answer}`);
  };

  return (
    <div className="container">
      {/* Penguin emojis in corners */}
      <span className="penguin top-left">🐧</span>
      <span className="penguin top-right">🐧</span>
      <span className="penguin bottom-left">🐧</span>
      <span className="penguin bottom-right">🐧</span>

      <div className="card">
        <p className="message">Nicooool, will you be my Valentine?</p>
        <img src={thinkingPenguin} alt="Thinking Penguin" className="penguin-img"/>
        <div className="buttons">
          <button className="yes" onClick={() => handleResponse("Absolutely 💕")}>
            Absolutely 💕
          </button>
          <button className="maybe" onClick={() => handleResponse("Noo... 😢")}>
            Noo... 😢
          </button>
        </div>
        <p className="response">{response}</p>
      </div>
    </div>
  );
}

export default App;