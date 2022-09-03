import React, { useState } from "react";
import Input from "../components/Input";

import { apiWithToken } from "../services/api";

function CreateCall() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    apiWithToken.post('/call', {title, content, status: 'open', user_id: 1})
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input type="text" placeholder="Title" onChange={setTitle} />
      <Input type="text" placeholder="Content" onChange={setContent} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateCall;
