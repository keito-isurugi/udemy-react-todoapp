import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("first");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUP = () => {
    setNum(num + 1);
  };
  const onClickCountSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  if (num % 3 === 0) {
    faceShowFlag || setFaceShowFlag(true);
  } else {
    faceShowFlag && setFaceShowFlag(false);
  }

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorfulMessage color="yellow">ほげほげ</ColorfulMessage>
      <ColorfulMessage color="pink">ほげほげ!!!!!!!!!!!!!!!!</ColorfulMessage>
      <button onClick={onClickCountUP}>Button</button>
      <button onClick={onClickCountSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};

export default App;
