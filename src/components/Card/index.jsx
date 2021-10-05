import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { MyStats } from "../../context";

const Card = ({ img, text }) => {
  const { setCategory } = useContext(MyStats);

  const handleClick = () => {
    setCategory(text);
  };

  return (
    <NavLink className="nav-link" to="/category">
      <div className="card" onClick={handleClick}>
        <div className="card__img">
          <img src={img} alt="category" />
        </div>
        <div className="card__text">{text}</div>
      </div>
    </NavLink>
  );
};

export default Card;
