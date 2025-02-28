"use client";

import { useState } from "react";

function ClientGreetingsWithUseState({
  children,
}: {
  children: React.ReactNode;
}) {
  const [flag, setFlag] = useState(false);
  const handleSetFlag = () => setFlag(!flag);

  return (
    <>
      <div className={`${flag ? "text-red-500" : ""}`}>{children}</div>
      <button onClick={handleSetFlag}>Click me!</button>
    </>
  );
}

export default ClientGreetingsWithUseState;
