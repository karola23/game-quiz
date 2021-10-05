import React, { useContext, useEffect } from "react";

import components from "../../components";

import icon_technology from "../../assets/technologia_ikona_.svg";
import icon_culture from "../../assets/kultura_ikona.svg";
import icon_automotive from "../../assets/motoryzacja_ikona.svg";
import icon_programming from "../../assets/programowanie_ikona.svg";
import icon_history from "../../assets/historia_ikona.svg";
import { MyStats } from "../../context";

const Intro = () => {
  const { Card, Header, Title } = components;
  const { setPage } = useContext(MyStats);

  useEffect(() => {
    setPage("1");
  }, [setPage]);

  return (
    <div className="intro">
      <Header />
      <div className="intro__title">
        <Title center>10 questions / 5 CATEGORIES </Title>
      </div>

      <div className="intro__categories">
        <Card img={icon_technology} text="technology" />
        <Card img={icon_culture} text="culture" />
        <Card img={icon_automotive} text="automotive" />
        <Card img={icon_programming} text="programming" />
        <Card img={icon_history} text="history" />
      </div>
    </div>
  );
};

export default Intro;
