import React, { useState } from "react";
import Dropdown from "./dropdown/Dropdown";
import "./App.css";

const App = () => {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState("");
  const list = ["Mango", "Banana", "Orange", "Watermelon", "Grapes", "Kiwi"];

  const handleClick = (index) => {
    setClicked(!clicked);
    setSelected(list[index]);
  };
  //   console.log(selected);

  return (
    <>
      <Dropdown
        clicked={clicked}
        list={list}
        handleClick={handleClick}
        selected={selected}
      />
    </>
  );
};

export default App;
