import React, { useState } from "react";
import "./App.css";

function App() {
  const [response, setResponse] = useState("");

  const handleResponse = (answer) => {
    setResponse(`You chose: ${answer}`);
  };

  return (
    <div className="container">
      <div className="card">
        <h2>PLEASE...</h2>
        <img src="/dog.jpg" alt="Cute Dog" className="dog-img" />
        <p className="message">Nicoool, will you be my Valentine?</p>
        <div className="buttons">
          <button className="yes" onClick={() => handleResponse("Absolutely 💖")}>
            Absolutely 💖
          </button>
          <button className="maybe" onClick={() => handleResponse(" Nooo... 😢")}>
            Nooo... 😢
          </button>
        </div>
        <p className="response">{response}</p>
      </div>
    </div>
  );
}

export default App;