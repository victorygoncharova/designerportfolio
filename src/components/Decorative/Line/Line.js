import React from "react";
import "./Line.scss";

const Line = ({ startValue = "1", endValue = "-1" }) => {
  const styleInline = {
    gridColumnStart: startValue,
    gridColumnEnd: endValue,
  };

  // const { line } = styles;

  return <div style={styleInline} className="line"></div>;
};

export default Line;
