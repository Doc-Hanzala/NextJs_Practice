import Link from "next/link";

const links = [
  { href: "/client", label: "client" },
  { href: "/drinks", label: "drinks" },
  { href: "/prisma-example", label: "prisma" },
  { href: "/tasks", label: "tasks" },
];

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-7 max-w-6xl mx-auto flex-col sm:flex-row  ">
        <Link href="/" className="btn btn-primary">
          next js
        </Link>
        <ul className="menu menu-horizontal md:ml-5">
          {links.map((link) => {
            return (
              <li key={link.href}>
                <Link className="capitalize" href={link.href}>
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
