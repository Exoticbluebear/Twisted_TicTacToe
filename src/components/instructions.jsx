import React, { useState } from "react";

const Instructions = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div style={{ textAlign: "bottom", marginTop: "50px" }}>
      <button className="instructionButton1" onClick={handleButtonClick}>
        OPEN ME
      </button>

      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>About Me: </h2>
            <p>
              Hi, I’m Kushan—a tech enthusiast with a love for reimagining the
              classics. As the creator of Twisted Tic-Tac-Toe, I’m all about
              putting a fresh spin on familiar ideas, blending creativity with
              strategy to bring a new kind of fun to your fingertips. Why This
              App? I believe games should challenge not just the player but also
              the way we think about play. With this app, my goal is to surprise
              you, engage you, and keep you coming back for more twists and
              turns. Let the fun begin!
            </p>
            <button className="instructionButton2" onClick={handleClosePopup}>
              CLOSE ME
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .popup {
          position: fixed; /* Sticks to a specific position on the screen */
          bottom: 20px; /* Distance from the bottom */
          right: 20px; /* Distance from the right */
          background-color: transparent; /* Popup background color */
          padding: 20px; /* Padding inside the popup */
          border-radius: 10px; /* Rounded corners */
          width: 300px; /* Popup width */
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25); /* Adds a shadow for depth */
          z-index: 1000; /* Ensures it stays on top */
        }

        .popup-content {
          text-align: left; /* Aligns text to the left */
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Instructions;
