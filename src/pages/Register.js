import React, { useState, useContext } from "react";
import Input from "../components/Input";

import { AuthContext } from "../contexts/AuthContext"

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { Register } = useContext(AuthContext)

  const handleSubmit = (e) => {
    e.preventDefault();

    Register({name, email, password});
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input type="text" placeholder="Username" onChange={setName} />
      <Input type="email" placeholder="Email" onChange={setEmail} />
      <Input type="password" placeholder="Password" onChange={setPassword} />
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
