import React, { useState } from "react";
import "./App.css";
import thinkingPenguin from "./assets/thinking_penguin.png";
import holdingPenguins from "./assets/holding_penguins.png";

function App() {
  const [noClicks, setNoClicks] = useState(0);
  const [showNo, setShowNo] = useState(true);
  const [noHiding, setNoHiding] = useState(false);
  const [accepted, setAccepted] = useState(false);

  // Clicking Yes shows the accepted message + image
  const handleYesClick = () => {
    setAccepted(true);
  };

  const handleNoClick = () => {
    setNoClicks((c) => {
      const next = c + 1;
      if (next >= 4) {
        // start hide animation, then remove from DOM after animation
        setNoHiding(true);
        setTimeout(() => {
          setShowNo(false);
          setNoHiding(false);
        }, 300);
      }
      return next;
    });
  };

  return (
    <div className="container">
      {/* Penguin emojis in corners */}
      <span className="penguin top-left">🐧</span>
      <span className="penguin top-right">🐧</span>
      <span className="penguin bottom-left">🐧</span>
      <span className="penguin bottom-right">🐧</span>

      <div className="card">
        {accepted ? (
          <div className="accepted">
            <p className="message">Yay — I'm yours! 💕</p>
            <img src={holdingPenguins} alt="Holding Penguins" className="holding-img" />
          </div>
        ) : (
        <>
        <p className="message">Nicooool, will you be my Valentine?</p>
        <img src={thinkingPenguin} alt="Thinking Penguin" className="penguin-img"/>
        <div className="buttons">
          {/** scale yes button based on number of No clicks */}
          {(() => {
            const scale = Math.min(1 + noClicks * 0.25, 2.2); // cap scale to avoid excessive growth
            const paddingV = 18 * scale;
            const paddingH = 36 * scale;
            const fontSize = 1.25 * scale;
            const minWidth = 160 * scale;
            return (
              <button
                className="yes"
                onClick={handleYesClick}
                style={{ padding: `${paddingV}px ${paddingH}px`, fontSize: `${fontSize}rem`, minWidth: `${minWidth}px` }}
              >
                Absolutely 💕
              </button>
            );
          })()}

          {/** keep No button in DOM while fading */}
          {showNo && (
            <button className={`maybe ${noHiding ? 'hiding' : ''}`} onClick={handleNoClick}>
              Noo... 😢
            </button>
          )}
        </div>
        </>
        )}
      </div>
    </div>
  );
}

export default App;