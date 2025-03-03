"use client";

import { Box } from "@/utils/Box";
import { use, useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function ClientGreetingsWithUse({
  children,
  todosPromise,
}: {
  children: React.ReactNode;
  todosPromise: Promise<Todo[]>;
}) {
  const [flag, setFlag] = useState(false);
  const todos = use(todosPromise);
  const handleSetFlag = () => setFlag(!flag);

  return (
    <Box>
      <span className="font-semibold">Client component with use</span>
      <div className={`${flag ? "text-green-600" : ""}`}>{children}</div>
      <ul className="text-green-600">
        {todos.slice(0, 5).map((todo: Todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button onClick={handleSetFlag}>Click me!</button>
    </Box>
  );
}

export default ClientGreetingsWithUse;
