"use client";

import { Box } from "@/utils/Box";
import { useState } from "react";

function ClientGreetingsWithUseState({
  children,
}: {
  children: React.ReactNode;
}) {
  const [flag, setFlag] = useState(false);
  const handleSetFlag = () => setFlag(!flag);

  return (
    <Box>
      <span className="font-semibold">Client component with useState</span>
      <div className={`${flag ? "text-red-500" : ""}`}>{children}</div>
      <button onClick={handleSetFlag}>Click me!</button>
    </Box>
  );
}

export default ClientGreetingsWithUseState;
