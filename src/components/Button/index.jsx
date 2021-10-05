import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Draggable } from "react-beautiful-dnd";

import { MyQuestions } from "../../context";

import iconCorrect from "../../assets/correct.svg";
import iconInCorrect from "../../assets/incorrect.svg";

const Button = ({
  text,
  draggable = false,
  isDragDisabled = false,
  index,
  onClick,
  answer = false,
}) => {
  const [image, setImage] = useState("");
  const { target } = useContext(MyQuestions);

  useEffect(() => {
    if (target.correct) setImage(iconCorrect);
    else setImage(iconInCorrect);
  }, [target]);

  return (
    <>
      {draggable ? (
        <Draggable
          draggableId={"a" + index}
          index={index}
          isDragDisabled={isDragDisabled}
        >
          {(provided) => (
            <div
              className={`btn btn--drag ${answer && "btn--answer"}`}
              ref={provided.innerRef}
              onClick={onClick}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <p className="btn__text">{text}</p>
              <img
                className={`btn__img ${
                  index !== undefined &&
                  target.index === index &&
                  "btn__img--show"
                }`}
                src={image}
                alt=""
              />
            </div>
          )}
        </Draggable>
      ) : (
        <button className="btn" onClick={onClick}>
          <p className="btn__text">{text}</p>
          <img
            className={`btn__img ${
              index !== undefined && target.index === index && "btn__img--show"
            }`}
            src={image}
            alt=""
          />
        </button>
      )}
    </>
  );
};

export default Button;
