import { ReactNode } from "react";
import { Box } from "../utils/Box";

function Greetings({ children }: { children: ReactNode }) {
  return (
    <Box>
      <span className="font-semibold">Server component (default)</span>
      <div>{children}</div>
    </Box>
  );
}

export default Greetings;
