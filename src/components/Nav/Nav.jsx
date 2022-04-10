import React from "react";
import "./Nav.css"
import line from '../../assets/img/line.png'
import github from '../../assets/img/github.png'
import linkedin from '../../assets/img/linkedin.png'

const Nav = () => {
  return <nav>
    <ul>
      <li><img id="avatar" src="https://randomuser.me/api/portraits/men/10.jpg" alt="Avatar"></img></li>
      <li>Works</li>
      <li className="linePosition"><img src={line} className="line" alt="It's a line"></img></li>
      <li>Contact</li>
      <li className="linePosition"><img src={line} className="line" alt="It's a line"></img></li>
      <li>
      <div className="socialMedia">
        <img src={github} alt="github icon"></img>
        <img src={linkedin} alt="linkedin icon"></img>
      </div>
      </li>
      </ul>
  </nav>;
};

export default Nav;
