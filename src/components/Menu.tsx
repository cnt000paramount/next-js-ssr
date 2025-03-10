import Link from "next/link";

export function Menu() {
  return (
    <ul>
      <li>
        <Link href="/ssr">Go to /ssr</Link>
      </li>
      <li>
        <Link href="/rsc">Go to /rsc</Link>
      </li>
      <li>
        <Link href="/forms">Go to /forms</Link>
      </li>
      <li>
        <Link href="/error">Go to /error</Link>
      </li>
    </ul>
  );
}
