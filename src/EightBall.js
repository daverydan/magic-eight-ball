import React, { useState } from "react";
import "./EightBall.css";
import RefreshButton from "./RefreshIcon";
import EightBallRecord from "./EightBallRecord";

const EightBall = ({ answers }) => {
  const [color, setColor] = useState("black");
  const [message, setMessage] = useState("Think of a question");
  const [colorCount, setColorCount] = useState({
    green: 0,
    goldenrod: 0,
    red: 0,
  });

  const handleClick = () => {
    const randomNum = Math.floor(Math.random() * answers.length);
    const newAnswer = answers[randomNum];
    setColor(newAnswer.color);
    setMessage(newAnswer.msg);
    setColorCount({
      ...colorCount,
      [newAnswer.color]: colorCount[newAnswer.color] + 1,
    });
  };

  const hasCount =
    colorCount.green > 0 || colorCount.goldenrod > 0 || colorCount.red > 0;

  const handleRefresh = () => {
    setColor("black");
    setMessage("Think of a question");
    setColorCount({
      green: 0,
      goldenrod: 0,
      red: 0,
    });
  };
  
  return (
    <>
      <div className="EightBall" onClick={handleClick}>
        <div className="EightBall-window" style={{ background: color }}></div>
        <p>{message}</p>
      </div>
      {hasCount && (
        <>
          <EightBallRecord colorCount={colorCount} />
          <RefreshButton refresh={handleRefresh} />
        </>
      )}
    </>
  );
};

export default EightBall;
