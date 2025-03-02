import { ReactNode } from "react";

export const Box = ({ children }: { children: ReactNode }) => (
  <div className="border-2 border-gray-200 p-4 m-1">{children}</div>
);
