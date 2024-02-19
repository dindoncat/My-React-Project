import React from "react";

const MyPagnationBtn = (props) => {
  const isActive = props.number === props.activeBtn;
  return (
    <li className="page-item">
      <button
        className={`page-link ${isActive ? "active2" : ""}`}
        onClick={() => props.onEach(props.number)}
      >
        {props.number}
      </button>
    </li>
  );
};

export default MyPagnationBtn;
