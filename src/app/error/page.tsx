export default function Error() {
  async function createServerAction(formData: FormData) {
    "use server";
    console.log(formData.toString());
    // @ts-expect-error new error
    throw new Error("This is an error");
  }

  return (
    <form action={createServerAction} className="flex w-32">
      <button type="submit">Generate Error</button>
    </form>
  );
}
