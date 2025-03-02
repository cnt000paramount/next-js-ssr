import { sleep } from "./sleep";

export async function todosPromise() {
  const r = await fetch("https://jsonplaceholder.typicode.com/todos");
  sleep(2000);
  return r.json();
}
