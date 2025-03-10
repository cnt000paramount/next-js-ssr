import AsyncGreetings from "@/components/AsyncGreetings";
import Greetings from "@/components/Greetings";
import { Box } from "@/utils/Box";
import { sleep } from "@/utils/sleep";
import { Suspense } from "react";

export default async function Rsc() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  await sleep(3000);
  const todos = await response.json();
  return (
    <Box>
      <div className="font-bold text-amber-600 mt-8 pt-4 border-t-2 border-t-amber-600">
        Async Server component with fetch (with 3s delay, waited before reply to
        the user)
      </div>
      <ol className="p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Greetings>
            {todos.slice(0, 5).map((todo: { id: string; title: string }) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </Greetings>
        </Suspense>
      </ol>

      <div className="font-bold text-amber-600 mt-8 pt-4 border-t-2 border-t-amber-600">
        Async Server component with fetch (with 3s delay, waited after the
        server reply arrives)
      </div>
      <ol className="p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <AsyncGreetings>
            Hello world from Async Greetings compo
          </AsyncGreetings>
        </Suspense>
      </ol>
      <div>ANOTHER DIV</div>
    </Box>
  );
}
