import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function PanelMenu() {
  return (
    <div className="flex flex-col h-full">
      <h3 className="p-4 font-bold">Panel Menu</h3>
      <nav className="flex flex-col p-4">
        <Link href="/"> Main </Link>
        <Link href="/panel/users"> Users </Link>
        <Link href="/panel/reservations"> Reservations </Link>
        <button onClick={() => signOut()}>Logout</button>
      </nav>
    </div>
  );
}
