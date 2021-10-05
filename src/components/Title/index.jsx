import React from "react";

const Title = ({ children, count, center = "" }) => {
  return (
    <div className={`title ${center && "center-title"}`}>
      <div className="title__txt">{children}</div>
      {count && (
        <div className="title__counter">
          {count}/<span>10</span>
        </div>
      )}
    </div>
  );
};

export default Title;
