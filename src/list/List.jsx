import React from "react";
import "./list.css";

function List({ list, handleClick }) {
  return (
    <>
      <div className="list">
        {list.map((li, index) => {
          return (
            <li key={index} onClick={() => handleClick(index)}>
              {li}
            </li>
          );
        })}
      </div>
    </>
  );
}

export default List;
