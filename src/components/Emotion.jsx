import React from "react";

function Emotion({emotionName, emotionSrc, percent}) {
  return <div>
    <img src={emotionSrc}/>
    <p>{emotionName}{emotionSrc}</p>
    <p>{percent}</p>
  </div>;
}

export default Emotion;
