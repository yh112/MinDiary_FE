import React from "react";
import { useNavigate } from "react-router-dom";
import landingImage from "../images/Landing.png";
import "../styles/Home.scss";

const Home = () => {
  const navigate = useNavigate();
  return <div className="home-page">
    <img src={landingImage} />
  </div>;
};

export default Home;
