import ClientGreetings from "@/components/ClientGreetings";
import ClientGreetingsWithUse from "@/components/ClientGreetingsWithUse";
import ClientGreetingsWithUseEffects from "@/components/ClientGreetingsWithUseEffects";
import ClientGreetingsWithUseState from "@/components/ClientGreetingsWithUseState";
import Greetings from "@/components/Greetings";
import { Suspense } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function todosPromise() {
  const r = await fetch("https://jsonplaceholder.typicode.com/todos");
  await sleep(4000);
  return r.json();
}

export default function Hub() {
  return (
    <div className="p-4">
      <Greetings>Hello world from Greetings compo</Greetings>
      <ClientGreetings>Hello world from CLIENT Greetings compo</ClientGreetings>
      <ClientGreetingsWithUseState>
        Hello world from CLIENT Greetings compo with useState
      </ClientGreetingsWithUseState>
      <ClientGreetingsWithUseEffects>
        Hello world from CLIENT Greetings compo with useEffects
      </ClientGreetingsWithUseEffects>
      <Suspense fallback={<div>Loading...</div>}>
        <ClientGreetingsWithUse todosPromise={todosPromise()}>
          Hello world from CLIENT Greetings compo with use
        </ClientGreetingsWithUse>
      </Suspense>
      <div>ANOTHER DIV</div>
    </div>
  );
}
