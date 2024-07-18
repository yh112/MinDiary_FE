import React from "react";
import "../styles/DiaryList.scss";

function DiaryList({ diaryData }) {
  const handleClick = (index) => {
    console.log("click", index);
    //TODO: 일기 상세 페이지로 이동
  };

  return (
    <div>
      {diaryData.map((diary, index) => (
        <div key={index} className="diary-item" onClick={() => handleClick(index)}>
          <p className="diary-date">{diary.date}</p>
          <p className="diary-content">{diary.content}</p>
        </div>
      ))}
    </div>
  );
}

export default DiaryList;