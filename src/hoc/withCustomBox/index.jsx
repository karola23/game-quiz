import React from "react";

import icon_technology from "../../assets/technologia_ikona_.svg";
import icon_culture from "../../assets/kultura_ikona.svg";
import icon_automotive from "../../assets/motoryzacja_ikona.svg";
import icon_programming from "../../assets/programowanie_ikona.svg";
import icon_history from "../../assets/historia_ikona.svg";

const withCustomBox = (Component) => (props) => {
  return (
    <div className="title-extendent">
      {props.text === "technology" && (
        <Component text={props.text} img={icon_technology} />
      )}
      {props.text === "culture" && (
        <Component text={props.text} img={icon_culture} />
      )}
      {props.text === "automotive" && (
        <Component text={props.text} img={icon_automotive} />
      )}
      {props.text === "programming" && (
        <Component text={props.text} img={icon_programming} />
      )}
      {props.text === "history" && (
        <Component text={props.text} img={icon_history} />
      )}
      {props.text === "" && <Component text={props.text} />}
    </div>
  );
};

export default withCustomBox;
