import React from "react";
import { Link, useHistory } from "react-router-dom";

import imgTitle from "../../assets/logo_title.png";
import imgClose from "../../assets/zamknij_x.svg";
import imgBack from "../../assets/cofnij_x.svg";

const Header = ({ back }) => {
  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <div className="header">
      <img className="header__img" src={imgTitle} alt="QUIZ" />
      <div className="header__icons">
        {back ? (
          <img
            className="header__icons--space"
            src={imgBack}
            alt="<"
            onClick={handleClick}
          />
        ) : (
          <div></div>
        )}
        <Link to="/">
          <img src={imgClose} alt="X" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
