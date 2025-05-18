import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h>Hello world.!</h>
      <div>
        <Link href="cabins">Cabins </Link>
        <Link href="cabins">About </Link>
      </div>
    </div>
  );
}
