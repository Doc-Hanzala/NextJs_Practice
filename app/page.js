import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="text-5xl font-bold mb-5">next js tutorial</h1>
      <Link className="btn btn-accent text-white" href="/client">
        get started
      </Link>
    </>
  );
}
