import React from "react";
import "./Nav.css"
import line from '../../assets/img/line.png'
import github from '../../assets/img/github.png'
import linkedin from '../../assets/img/linkedin.png'

const Nav = () => {
  return <nav>
    <ul>
      <li><img id="avatar" src="https://randomuser.me/api/portraits/men/10.jpg"></img></li>
      <li>Works</li>
      <li><img src={line} className="line"></img></li>
      <li>Contact</li>
      <li><img src={line} className="line"></img></li>
      <li>
      <div className="socialMedia">
        <img src={github}></img>
        <img src={linkedin}></img>
      </div>
      </li>
      </ul>
  </nav>;
};

export default Nav;
