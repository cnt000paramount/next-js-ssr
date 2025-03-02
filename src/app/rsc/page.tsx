import { Suspense } from "react";

export default async function Rsc() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();
  return (
    <div className="p-4">
      <ol>
        <Suspense>
          {todos.slice(0, 5).map((todo: { id: string; title: string }) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </Suspense>
      </ol>
      <div>ANOTHER DIV</div>
    </div>
  );
}
