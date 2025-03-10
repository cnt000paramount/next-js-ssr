"use server";

import { notFound } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createServerAction(prevState: any, formData: FormData) {
  "use server";

  const name = formData.get("name") as string;
  const rawFormData = {
    title: formData.get("name"),
    userId: formData.get("age"),
  };

  if ("error".includes((formData.get("name") as string).toLowerCase())) {
    notFound();
  }
  if (!/John Doe/i.test(name)) {
    return {
      errors: "Error!",
      message: "Name only with numbers",
    };
  }
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
      {
        method: "PUT",
        body: JSON.stringify(rawFormData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );
    console.log(await response.json());
    return {
      name: formData.get("name"),
      age: formData.get("age"),
      errors: "",
      message: "Ok!",
    };
  } catch (e) {
    console.error(e);
  }
}
