import React from "react";
import "./RefreshIcon.css";

const RefreshIcon = ({ refresh }) => (
  <div className="RefreshIcon" onClick={() => refresh()}>
    <i className="fa fa-refresh"></i>
  </div>
);

export default RefreshIcon;
