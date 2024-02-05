import React from "react";
import TickleButton from "./Tickler";
import MultiButton from "./MultiButton";
import ChangeItUp from "./ChangeItUp";
import LoginForm from "./Login";

function App() {
  // Event handler functions
  function tickleHandler() {
    console.log("Teehee!");
  }

  function buttonClickHandler(number) {
    console.log(`Button ${number} was clicked`);
  }

  function changeHandler(event) {
    console.log(`${event.target.name}: ${event.target.value}`);
  }

  function submitHandler() {
    console.log("I submit");
  }

  return (
    <div>
      <h3>onClick</h3>
      <TickleButton onClick={tickleHandler} />
      <hr />

      <MultiButton onButtonClick={buttonClickHandler} />
      <hr />

      <h3>onChange</h3>
      <ChangeItUp onChange={changeHandler} />
      <hr />

      <h3>onSubmit</h3>
      <LoginForm onSubmit={submitHandler} />
      <hr />
    </div>
  );
}

export default App;

