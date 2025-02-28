"use client";

import { use, useState } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function ClientGreetingsWithUseEffects({
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
    <>
      <div className={`${flag ? "text-green-600" : ""}`}>{children} bbbbb</div>
      <ul className="text-green-600">
        {todos.slice(0, 6).map((todo: Todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button onClick={handleSetFlag}>Click me!</button>
    </>
  );
}

export default ClientGreetingsWithUseEffects;
