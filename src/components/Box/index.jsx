import React from "react";

const Box = ({ text, img }) => {
  return (
    <div className="box">
      <img className="box__img" src={img} alt="icon" />
      <p className="box__text">{text}</p>
    </div>
  );
};

export default Box;
