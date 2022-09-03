import React, { useState, useContext } from "react";
import Input from "../components/Input";

import { AuthContext } from "../contexts/AuthContext"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { Login } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    Login({email, password});
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input type="email" placeholder="Email" onChange={setEmail} />
      <Input type="password" placeholder="Password" onChange={setPassword} />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
