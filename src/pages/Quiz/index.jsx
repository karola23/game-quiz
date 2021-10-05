import React, { useContext, useEffect } from "react";

import components from "../../components";
import { MyStats, MyQuestions } from "../../context";
import initialData from "../../utils/initialData";
import DefaultAnswers from "./defaultAnswers";
import DndSingle from "./dndSingle";
import { useHistory } from "react-router-dom";

const Quiz = () => {
  const { Header, Title } = components;
  const { category, setPage } = useContext(MyStats);
  const { data, setData, questionId, score } = useContext(MyQuestions);
  const history = useHistory();

  useEffect(() => {
    setPage("2");
  }, [setPage]);

  useEffect(() => {
    const { questions } = initialData;
    localStorage.setItem("score", score);

    if (questionId <= 10)
      setData(Object.assign({}, questions[category][`q${questionId}`]));
    else history.push("/result");
  }, [category, questionId, setData, history, score]);

  return (
    <div className="quiz">
      <Header back />
      <div className="quiz__title">
        <Title center count={questionId <= 10 ? questionId : 10}>
          SELECT THE CORRECT ANSWER
        </Title>
      </div>

      <p className="quiz__question">{data.question}</p>

      {data.variant === "BASIC" && <DefaultAnswers />}
      {data.variant === "DND_1" && <DndSingle />}
    </div>
  );
};

export default Quiz;
