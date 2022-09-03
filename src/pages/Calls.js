import React, { useState, useEffect } from "react";

import { apiWithToken } from "../services/api";

function Calls() {
  const [calls, setCalls] = useState([]);

  const fetchCalls = async () => {
    const response = await apiWithToken.get("/call/list");

    console.log(response)

    setCalls(response.data);
  };

  useEffect(() => {
    fetchCalls();
  }, []);

  return (
    <div>
      <h1>Chamados</h1>
      <div>
        {calls?.map((call) => (
          <div>
            <h2>Titulo: {call.title}</h2>
            <p>Conteudo: {call.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calls;
