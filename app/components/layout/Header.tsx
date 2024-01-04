import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-semibold text-2xl" href="">
        Marreco Lanches
      </Link>
      <nav className="flex items-center gap-8 text-gray-500 font-semibold">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>Sobre</Link>
        <Link href={""}>Contato</Link>
        <Link
          className="bg-primary rounded-full text-white px-4 py-2"
          href={""}
        >
          Login
        </Link>
      </nav>
    </header>
  );
}

export default Header;
