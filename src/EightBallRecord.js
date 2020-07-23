import React from "react";
import "./EightBallRecord.css";

const EightBallRecord = ({ colorCount }) => (
  <ul className="EightBallRecord">
    <li className="green">
      <span>{colorCount.green && colorCount.green}</span>
    </li>
    <li className="goldenrod">
      <span>{colorCount.goldenrod && colorCount.goldenrod}</span>
    </li>
    <li className="red">
      <span>{colorCount.red && colorCount.red}</span>
    </li>
  </ul>
);

export default EightBallRecord;
