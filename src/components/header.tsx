import Link from "next/link";
import React from "react";
import NavBar from "./navbar";

export default function Header() {
  return (
    <header className="top-0 z-50 px-4 mx-auto max-w-[1000px] md:sticky md:top-4">
      <NavBar />
    </header>
  );
}
