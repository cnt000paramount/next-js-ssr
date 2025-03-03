import { ReactNode } from "react";
import { Box } from "../utils/Box";
import { sleep } from "@/utils/sleep";

async function AsyncGreetings({ children }: { children: ReactNode }) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  await sleep(3000);
  const posts = await response.json();
  return (
    <Box>
      <span className="font-semibold">
        Async Server component
      </span>
      <div>
        {posts.slice(0, 5).map((post: { id: string; title: string }) => (
          <div key={post.id}>{post.title}</div>
        ))}
      </div>
      <div>{children}</div>
    </Box>
  );
}

export default AsyncGreetings;
