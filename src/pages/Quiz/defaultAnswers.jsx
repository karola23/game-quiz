import React, { useContext, useState } from "react";

import components from "../../components";
import { MyQuestions } from "../../context";

const DefaultAnswers = () => {
  const { Button } = components;
  const { data, questionId, setQuestionId, setTarget, score, setScore } =
    useContext(MyQuestions);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (choice, index) => {
    if (!isClicked) {
      setIsClicked(true);
      if (data.correct === choice) {
        setScore(score + 1);
        setTarget({ correct: true, index });
      } else {
        setTarget({ correct: false, index });
      }

      setTimeout(() => {
        if (choice) {
          setQuestionId(questionId + 1);
          setTarget({ ...{ index: -1 } });
          setIsClicked(false);
        }
      }, 1000);
    }
  };

  return (
    <div className="quiz__answers">
      {data.choices.map((choice, index) => (
        <Button
          text={choice}
          key={index}
          index={index}
          onClick={() => handleClick(choice, index)}
        />
      ))}
    </div>
  );
};

export default DefaultAnswers;
