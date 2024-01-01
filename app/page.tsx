"use client";

import Link from "next/link";
import Tv from "./tv";
import Navbar from "./navbar";
import { useEffect, useState } from "react";

export default function Page() {
  const [lightH, setLightH] = useState("h-full");
  const [darkH, setDarkH] = useState("h-full");

  useEffect(() => {
    setTimeout(() => {
      setLightH("h-0");
    }, 400);
    setDarkH("h-0");
  }, []);

  return (
    <>
      <div
        id="transition-slide"
        className={`absolute z-50 ${lightH} min-w-full bg-slate-300`}
      ></div>
      <div
        id="transition-slide"
        className={`absolute z-50 ${darkH} min-w-full bg-slate-500`}
      ></div>

      <main className="absolute flex flex-col h-screen w-full bg-slate-100">
        <Navbar />
        <div className="ml-auto mr-auto mt-96">
          <Tv />
        </div>
      </main>
    </>
  );
}
