import React from "react";

const ColorfulMessage = (props) => {
  console.log("からふる");
  const { color, message, children } = props;
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
