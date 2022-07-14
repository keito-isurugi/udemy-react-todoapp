import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickBtn = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorfulMessage color="yellow">ほげほげ</ColorfulMessage>
      <ColorfulMessage color="pink">ほげほげ!!!!!!!!!!!!!!!!</ColorfulMessage>
      <button onClick={onClickBtn}>Button</button>
    </>
  );
};

export default App;
