import React from "react";
import { Link } from "react-router-dom";

import iconLogo from "../../assets/logo.png";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={iconLogo} alt="Q" />
      </Link>
    </div>
  );
};

export default Logo;
