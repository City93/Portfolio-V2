import React from "react";
import "./Home.css"
import Button from "../Button/Button"
import arrow from "../../assets/img/arrow.png"

const Home = () => {
  return <div className="home">
      <p id="name">Christian Ciudad</p>
      <p id="role">Junior Full Stack Developer</p>
      <Button text="About me"></Button>
  </div>;
};

export default Home;
