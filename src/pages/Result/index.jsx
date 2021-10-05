import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import components from "../../components";
import { MyStats } from "../../context";

import icon_technology from "../../assets/technologia_ikona_.svg";
import icon_culture from "../../assets/kultura_ikona.svg";
import icon_automotive from "../../assets/motoryzacja_ikona.svg";
import icon_programming from "../../assets/programowanie_ikona.svg";
import icon_history from "../../assets/historia_ikona.svg";
import iconArrow from "../../assets/button_strzałka_plus.svg";

const Result = () => {
  const { Box, Button, Card, Header, Title } = components;
  const { category, setPage } = useContext(MyStats);
  const [score, setScore] = useState(0);
  const history = useHistory();

  useEffect(() => {
    setScore(localStorage.getItem("score"));
    setPage("3");
  }, [setPage]);

  const handleClick = () => {
    history.push("/category");
  };

  return (
    <div className="result">
      <Header back />

      <div className="result__container">
        <div className="result__box">
          <Box img={icon_technology} text={category} />
        </div>
        <div className="result__title">
          <Title>YOUR RESULT</Title>
          <div className="result__score">{score}/10</div>
        </div>
        <div className="result__button">
          <Button
            text="REPEAT THE QUIZ"
            img={iconArrow}
            onClick={handleClick}
          />
        </div>
        <div className="result__sidebar">
          <div className="result__text">CHOOSE ANOTHER CATEGORY:</div>

          <div className="result__categories">
            {category !== "technology" && (
              <Card img={icon_technology} text="technology" />
            )}
            {category !== "culture" && (
              <Card img={icon_culture} text="culture" />
            )}
            {category !== "automotive" && (
              <Card img={icon_automotive} text="automotive" />
            )}
            {category !== "programming" && (
              <Card img={icon_programming} text="programming" />
            )}
            {category !== "history" && (
              <Card img={icon_history} text="history" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
