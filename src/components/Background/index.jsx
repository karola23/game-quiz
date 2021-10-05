import React, { useContext, useEffect, useState } from "react";

import { MyStats } from "../../context";
import currentTheme from "../../utils/currentTheme";

const Background = ({ children }) => {
  const [theme, setTheme] = useState("variant-");
  const { category, page } = useContext(MyStats);

  useEffect(() => {
    setTheme(currentTheme(category, page));
  }, [category, page]);

  return <div className={`container ${theme} ${category}`}>{children}</div>;
};

export default Background;
