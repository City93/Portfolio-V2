import React from "react";
import './Button.css'
import arrow from '../../assets/img/arrow.png'

const Button = (props) => {
  return <>
    <button>{props.text}<img src={arrow} alt="arrow" className="arrow"></img></button>
  </>;
};

export default Button;
