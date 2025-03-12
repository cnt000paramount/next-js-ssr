"use client";

import Image from "next/image";
import { useActionState } from "react";
import { createServerAction } from "./actions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "forms",
};

export default function Forms() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const initialState: any = { message: "", errors: "" };
  const [state, formAction] = useActionState(createServerAction, initialState);

  return (
    <form action={formAction}>
      <Image
        src={
          "https://designoholic.com/wp-content/uploads/2017/07/avatar-colored-d.png"
        }
        className="rounded-full"
        width={128}
        height={128}
        alt={`John's profile picture`}
      />
      <div className="w-32 mt-6 mb-2">
        <input
          type="text"
          name="name"
          placeholder="Your name..."
          className="border-b-2 border-orange-200 px-2 h-6 mr-2"
          defaultValue={state.name || "John Doe"}
          required
        />
        {state.errors !== "" ? (
          <span className="text-sm text-red-400">Server Error here!</span>
        ) : (
          ""
        )}
        <input
          type="number"
          name="age"
          placeholder="Your age..."
          className="border-b-2 border-orange-200 px-2 h-6 mr-2 mt-4"
          defaultValue={state.age || 26}
          required
        />
        <button type="submit">Continue</button>
      </div>
      (change the name to Error you have a 404 with notFound function)
      <pre className="text-sm text-orange-400 mt-2">
        {JSON.stringify(state, null, 2)}
      </pre>
    </form>
  );
}
