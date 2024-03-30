import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>this is homepage</h1>
      <Link className="text-2xl" href="/about">
        about page
      </Link>
    </>
  );
}
