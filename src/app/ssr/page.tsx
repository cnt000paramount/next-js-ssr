import { Suspense } from "react";
import ClientGreetings from "@/components/ClientGreetings";
import ClientGreetingsWithUse from "@/components/ClientGreetingsWithUse";
import ClientGreetingsWithUseEffects from "@/components/ClientGreetingsWithUseEffects";
import ClientGreetingsWithUseState from "@/components/ClientGreetingsWithUseState";
import Greetings from "@/components/Greetings";
import GreetingsWithUse from "@/components/GreetingsWithUse";
import { todosPromise } from "@/utils/todoPromise";

export default function Ssr() {
  return (
    <>
      <noscript className="font-bold text-red-800 text-lg font-mono">
        <div>_________________________________</div>
        <div>_________ JS IS DISABLED _________</div>
      </noscript>

      <div>
        <div className="font-bold text-amber-600 mt-8 pt-4 border-t-2 border-t-amber-600">
          Server component with children
        </div>
        <Greetings>Hello world from Greetings compo</Greetings>
        <Greetings>
          <Greetings>(Nested with himself)</Greetings>
        </Greetings>

        <div className="font-bold text-amber-600 mt-8 pt-4 border-t-2 border-t-amber-600">
          Simple client component with children
        </div>
        <ClientGreetings>
          Hello world from CLIENT Greetings compo
        </ClientGreetings>
        <ClientGreetings>
          <ClientGreetings>(Nested with himself)</ClientGreetings>
        </ClientGreetings>

        <div className="font-bold text-amber-600 mt-8 pt-4 border-t-2 border-t-amber-600">
          Client component with use (promise as prop)
        </div>
        <ClientGreetingsWithUse todosPromise={todosPromise()}>
          <ClientGreetingsWithUse todosPromise={todosPromise()}>
            (Nested with himself)
          </ClientGreetingsWithUse>
        </ClientGreetingsWithUse>

        <div className="font-bold text-amber-600 mt-8 pt-4 border-t-2 border-t-amber-600">
          Client component with use and Suspense (promise as prop)
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <ClientGreetingsWithUse todosPromise={todosPromise()}>
            Hello world from CLIENT Greetings compo with use
          </ClientGreetingsWithUse>
        </Suspense>

        <div className="font-bold text-amber-600 mt-8 pt-4 border-t-2 border-t-amber-600">
          Server component with use and Suspense (promise as prop)
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <GreetingsWithUse todosPromise={todosPromise()}>
            Hello world from CLIENT Greetings compo with use
          </GreetingsWithUse>
        </Suspense>

        <div className="font-bold text-amber-600 mt-8 pt-4 border-t-2 border-t-amber-600">
          Client component with useState
        </div>
        <ClientGreetingsWithUseState>
          Hello world from CLIENT Greetings compo with useState
        </ClientGreetingsWithUseState>

        <div className="font-bold text-amber-600 mt-8 pt-4 border-t-2 border-t-amber-600">
          Client component with useState and useEffects
        </div>
        <ClientGreetingsWithUseEffects>
          Hello world from CLIENT Greetings compo with useEffects
        </ClientGreetingsWithUseEffects>
        <div>ANOTHER DIV</div>
      </div>
    </>
  );
}
