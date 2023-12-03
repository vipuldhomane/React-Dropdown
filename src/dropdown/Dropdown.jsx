import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import "./dropdown.css";
import List from "../list/List";

function Dropdown({ clicked, list, handleClick, selected }) {
  //   console.log(clicked);
  return (
    <div className="dropdown">
      <div className="select" onMouseEnter={handleClick}>
        <p>{selected ? selected : "Select Option"}</p>
        <AiOutlineDown />
      </div>
      {/* this line of code means if the menu is clicked only then render the list of options */}
      {clicked && <List list={list} handleClick={handleClick} />}
    </div>
  );
}

export default Dropdown;
