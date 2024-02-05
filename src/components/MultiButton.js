import React from "react";

function SingleButton({ number, onClick }) {
  return <button onClick={() => onClick(number)}>Button {number}</button>;
}

function MultiButton({ onButtonClick }) {
  return (
    <div>
      <SingleButton number={1} onClick={onButtonClick} />
      <SingleButton number={2} onClick={onButtonClick} />
      <SingleButton number={3} onClick={onButtonClick} />
    </div>
  );
}

export default MultiButton;

