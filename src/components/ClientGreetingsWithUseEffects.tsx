"use client";

import { Box } from "@/utils/Box";
import { ReactNode, useEffect, useState } from "react";

function ClientGreetingsWithUseEffects({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const doTheCall = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setTodos(await response.json());
    };
    doTheCall();
  }, []);

  return (
    <Box>
      <span className="font-semibold">
        Client component with useState and useEffects
      </span>
      <div className="text-orange-700">{children} aaaaa</div>
      <ul className="text-orange-700 text-small">
        {todos.slice(0, 5).map((todo: { title: string; id: string }) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </Box>
  );
}

export default ClientGreetingsWithUseEffects;
