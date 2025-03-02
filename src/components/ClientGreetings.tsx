"use client";

import { Box } from "@/utils/Box";
import { ReactNode } from "react";

function ClientGreetings({ children }: { children: ReactNode }) {
  return (
    <Box>
      <span className="font-semibold">Client component (use client)</span>
      <div>{children}</div>
    </Box>
  );
}

export default ClientGreetings;
