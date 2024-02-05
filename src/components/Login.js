import React from "react";

function LoginForm({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" placeholder="Enter username..." />
      <input type="password" name="password" placeholder="Enter password..." />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
