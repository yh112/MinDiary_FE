import React, { useState, useEffect } from "react";
import Chart from "../components/Chart";
import DiaryList from "../components/DiaryList";

const AnalyzeView = () => {
  // 지난 주 감정 데이터(더미)
  const [lastweekData, setLastweekData] = useState([
    { id: "기쁨", label: "기쁨", value: 30 },
    { id: "슬픔", label: "슬픔", value: 20 },
    { id: "분노", label: "분노", value: 15 },
    { id: "두려움", label: "두려움", value: 10 },
    { id: "혐오", label: "혐오", value: 5 },
    { id: "놀람", label: "놀람", value: 20 },
  ]);

  // 이번 주 감정 데이터(더미)
  const [thisweekData, setThisweekData] = useState([
    { id: "기쁨", label: "기쁨", value: 20 },
    { id: "슬픔", label: "슬픔", value: 10 },
    { id: "분노", label: "분노", value: 25 },
    { id: "두려움", label: "두려움", value: 5 },
    { id: "혐오", label: "혐오", value: 10 },
    { id: "놀람", label: "놀람", value: 30 },
  ]);

  // 일기 데이터(더미)
  const [diaryData, setDiaryData] = useState([
    {
      date: "2024-07-01",
      content: "직장에서 생산적인 하루를 보냈고, 성취감을 느꼈다.",
    },
    {
      date: "2024-07-02",
      content: "공원에서 긴 산책을 하며 신선한 공기를 즐겼다.",
    },
    {
      date: "2024-07-03",
      content: "오랜 친구를 만나 과거를 회상하며 이야기 나눴다.",
    },
    {
      date: "2024-07-04",
      content: "오후에 새로운 책을 읽었는데, 꽤 흥미로웠다.",
    },
    {
      date: "2024-07-05",
      content: "저녁에 새로운 요리법을 시도했는데, 맛있게 잘 됐다.",
    },
    {
      date: "2024-07-06",
      content: "장을 보러 갔는데, 좋은 할인 상품을 찾았다.",
    },
    {
      date: "2024-07-07",
      content: "집에서 편안히 쉬며 영화를 봤다. 한 주를 완벽하게 마무리했다.",
    },
  ]);

  const getLastweekData = () => {
    //TODO: 지난 주 데이터 가져오기
  };
  const getThisweekData = () => {
    //TODO: 이번 주 데이터 가져오기
  };
  const getDiaryData = () => {
    //TODO: 일기 데이터 가져오기
  };

  // useEffect(() => {
  //   getLastweekData();
  //   getThisweekData();
  //   getDiaryData();
  // }, []);

  return (
    <div className="analysis-page">
      <div className="analysis-title">EMOTION ANALYSIS</div>
      <div className="chart-container">
        <div className="chart">
          <div className="chart-title">This Week</div>
          <Chart data={lastweekData} lastweek="true" />
        </div>
        <div className="chart">
          <div className="chart-title">Last Week</div>
          <Chart data={thisweekData} lastweek="false" />
        </div>
      </div>
      <DiaryList diaryData={diaryData} />
    </div>
  );
};

export default AnalyzeView;
