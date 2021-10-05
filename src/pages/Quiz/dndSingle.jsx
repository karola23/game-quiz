import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import components from "../../components";
import { MyQuestions } from "../../context";

const DndSingle = () => {
  const { Button, PlaceHolder } = components;
  const { data, questionId, setQuestionId, setTarget, score, setScore } =
    useContext(MyQuestions);
  const [answer, setAnswer] = useState("");
  const [isDragDisabled, setIsDragDisabled] = useState(false);
  const [choices, setChoices] = useState([]);

  useEffect(() => {
    setChoices([...data.choices]);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      return;
    }

    setAnswer(choices[source.index]);

    if (!isDragDisabled) {
      if (data.correct === choices[source.index]) {
        setScore(score + 1);
        setTarget({ correct: true, index: 10 });
      } else {
        setTarget({ correct: false, index: 10 });
      }

      setTimeout(() => {
        setQuestionId(questionId + 1);
        setTarget({ ...{ index: -1 } });
      }, 1000);
    }

    choices.splice(source.index, 1);
    setIsDragDisabled(true);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {true && (
        <div className="quiz__placeholder">
          <PlaceHolder answer={answer} />
          <p>{data.sentence}</p>
        </div>
      )}

      <Droppable droppableId="list" isDropDisabled={true}>
        {(provided) => (
          <div
            className="quiz__answers"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {choices.map((choice, index) => (
              <Button
                text={choice}
                index={index}
                key={index}
                draggable={true}
                isDragDisabled={isDragDisabled}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DndSingle;
