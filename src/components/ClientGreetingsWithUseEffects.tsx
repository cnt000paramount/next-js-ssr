"use client";

import { useEffect, useState } from "react";

function ClientGreetingsWithUseEffects({ children }: { children: any }) {
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
    <>
      <div className="text-orange-700">{children} aaaaa</div>
      <ul className="text-orange-700">
        {todos.slice(0, 3).map((todo: any) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}

export default ClientGreetingsWithUseEffects;
