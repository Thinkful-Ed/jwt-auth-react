import React from "react";
import axios from "axios";
import { authToken } from "./authToken"

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const [username, password] = event.target.children;
  };

  return (
    <form onSubmit={(event) => {handleSubmit(event);}}>
      <span><label>Username</label>
      <input type="input" id="username"/></span><br /><br />
      <span><label>Password</label>
      <input type="password" id="password" /></span><br /><br />
      <input type="submit" value="submit" />
    </form>
  );
}
export default Login;
