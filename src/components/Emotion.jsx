import React from "react";

function Emotion({ emotionName, emotionSrc, percent }) {
  return (
    <div className="emotion-content">
      <img src={emotionSrc} />
      <div className="emotion-title">
        <p>{emotionName}</p>
        <p style={{fontWeight:"bold"}}>{percent}</p>
      </div>
    </div>
  );
}

export default Emotion;
