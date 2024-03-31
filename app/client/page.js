"use client";

import { useState } from "react";

const ClientPage = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1 className="text-6xl font-bold mb-8">{counter}</h1>
      <button
        onClick={() => setCounter(counter + 1)}
        className="btn btn-primary"
      >
        increase
      </button>
    </>
  );
};

export default ClientPage;
