import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import components from "../../components";

import iconArrow from "../../assets/button_strzałka_plus.svg";
import { MyQuestions, MyStats } from "../../context";

const Category = () => {
  const { Box, Button, Header, Title } = components;
  const { category, setPage } = useContext(MyStats);
  const { setScore } = useContext(MyQuestions);

  useEffect(() => {
    setScore(0);
    setPage("1");
    localStorage.setItem("category", category);
  }, [category, setPage, setScore]);

  return (
    <div className="category">
      <Header back />
      <div className="category__title">
        <Title center>SELECTED CATEGORY</Title>
      </div>

      <div className="category__box">
        <Box img="" text={category} />
      </div>

      <div className="category__button">
        <Link to="/quiz">
          <Button text="GET STARTED" img={iconArrow} />
        </Link>
      </div>
    </div>
  );
};

export default Category;
