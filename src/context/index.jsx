import React, { createContext, useState } from "react";

export const MyStats = createContext({
  category: "",
  page: "",
  setCategory: () => {},
  setPage: () => {},
});

export const MyQuestions = createContext({
  data: {},
  setData: () => {},
  questionId: 1,
  setQuestionId: () => {},
  target: {},
  setTarget: () => {},
  score: 0,
  setScore: () => {},
});

export const StatsProvider = ({ children }) => {
  const [category, setCategory] = useState("programming");
  const [page, setPage] = useState("1");

  return (
    <MyStats.Provider value={{ category, page, setCategory, setPage }}>
      {children}
    </MyStats.Provider>
  );
};

export const QuestionsProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [questionId, setQuestionId] = useState(1);
  const [target, setTarget] = useState({ correct: false, index: -1 });
  const [score, setScore] = useState(0);

  return (
    <MyQuestions.Provider
      value={{
        data,
        setData,
        questionId,
        setQuestionId,
        target,
        setTarget,
        score,
        setScore,
      }}
    >
      {children}
    </MyQuestions.Provider>
  );
};
