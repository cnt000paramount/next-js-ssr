import { Box } from "@/utils/Box";
import { use } from "react";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function GreetingsWithUse({
  children,
  todosPromise,
}: {
  children: React.ReactNode;
  todosPromise: Promise<Todo[]>;
}) {
  const todos = use(todosPromise);

  return (
    <Box>
      <span className="font-semibold">Server component with use</span>
      <div>{children}</div>
      <ul className="text-green-600">
        {todos.slice(0, 5).map((todo: Todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button>X removed on click here</button>
    </Box>
  );
}

export default GreetingsWithUse;
