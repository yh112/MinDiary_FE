import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import backimg from "./backimg.png";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.png";
import Aboutimg from "./About.png";
import num1 from "./1.png";
import num2 from "./2.png";
import num3 from "./3.png";
const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <img
          src={backimg}
          alt="GET OFF of DEPRESSION"
          className="header-image"
        />
      </header>

      <main className="main-content">
        <div className="about-section">
          <img src={Aboutimg} alt="About" className="about-img" />
          <h1>
            Depression,
            <br /> the enemy of modern man
          </h1>
          <p>
            우울증 환자 100만 시대, 현대인들에게 우울과 불안은 감기와도 같다.
            <br /> 누구나 살아가는 과정에 스트레스와 우울을 느낄 수 있지만 그
            정도가 심해지면 건강을 심하게 해칠 수 있다.
          </p>
        </div>

        <div className="features">
          <div className="feature-item">
            <div>
              <img src={num1} />
            </div>
            <h2>기분의 저하나 의욕상실이 지속되고 있나요?</h2>
          </div>
          <div className="feature-item">
            <div>
              <img src={num2} />
            </div>
            <h2>낮은 자신감, 저하된 삶의 의욕, 쉽게 느끼는 피로감</h2>
          </div>
          <div className="feature-item">
            <div>
              {" "}
              <img src={num3} />
            </div>
            <h2>건강하고 규칙적인 일상을 되찾는 것이 중요!</h2>
          </div>
        </div>

        <div className="recovery-section">
          <p>
            HOW DO I RECOVER? HOW DO I RECOVER? HOW DO I RECOVER? HOW DO I
            RECOVER? HOW DO I RECOVER? HOW DO I RECOVER?
          </p>
        </div>
      </main>

      <section className="what-can-we-do">
        <h2>What can we do to help overcome this?</h2>
        <p>
          현대인의 만성질환 우울증에서 벗어나 정신 건강을 회복하기 위해서 우리는
          어떤 것을 해야 하는가?
        </p>

        <div className="steps">
          <div className="step">
            <img src={image1} alt="Step 1" />
            <div className="step-description">
              <h3>Step 1</h3>
              <p>
                솔직하게 감정 일기를 작성하며 <br />
                지친 마음을 해소하세요
              </p>
              <p>
                자신에 대한 이야기와 감정을 솔직하게 쓰는 행위는 <br /> 심리적,
                감정적, 또는 육체적 문제 해결과 <br />
                치유를 촉진하는 글쓰기 치료의 한 부분입니다.
              </p>
            </div>
          </div>
          <div className="step">
            <img src={image2} alt="Step 2" />
            <div className="step-description">
              <h3>Step 2</h3>
              <p>
                오늘 하루에 대한
                <br />
                AI 감정 피드백을 확인하세요
              </p>
              <p>
                작성한 일기를 바탕으로 AI의 감정 피드백을 제공합니다. <br />
                자기자신을 이해한다면, 문제를 스스로 해결할 수 있어요.
              </p>
            </div>
          </div>
          <div className="step">
            <img src={image3} alt="Step 3" />
            <div className="step-description">
              <h3>Step 3</h3>
              <p>
                이번주는 어떠셨나요? <br />
                AI 주간 감정 분석 결과를 확인하세요
              </p>
              <p>
                감정 수치를 그래프로 제공해 주간 감정을 쉽게 비교할 수 있으며{" "}
                <br /> 그간 작성한 한 주의 일기 내용을 바탕으로 <br />
                AI의 주간 감정 피드백을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-text">
            <p>개인정보 처리방침 Privacy Policy</p>
            <p>
              명이현(FE) 박준혁(FE) 성지훈(FE) 차경태(BE) 박준용(BE) 강나영(DE)
            </p>
            <p>ALL RIGHTS RESERVED 2024 © Cheonan Metropolitan City</p>
          </div>
          <div className="footer-image">
            <img
              src="/path-to-your-circular-image.png"
              alt="Logo"
              className="footer-logo"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
