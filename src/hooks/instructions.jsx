import React, { useState } from "react";

function Instructions() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button onClick={handleButtonClick}>Click Me</button>

      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <h2>Pop-up Message</h2>
            <p>This is a pop-up message!</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .popup {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .popup-content {
          background: white;
          padding: 20px;
          border-radius: 5px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }
        button {
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
}

export default Instructions;
