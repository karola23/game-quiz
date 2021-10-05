import React from "react";
import { Droppable } from "react-beautiful-dnd";

import Button from "../Button";

const PlaceHolder = ({ answer }) => {
  return (
    <Droppable droppableId="answer">
      {(provided) => (
        <div
          className="placeholder"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {answer && (
            <Button text={answer} index={10} draggable={true} answer={true} />
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default PlaceHolder;
