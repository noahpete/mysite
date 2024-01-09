"use client";

import Navbar from "./navbar";
import { useEffect, useState } from "react";
import Home from "./home";
import Projects from "./projects";

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
        className={`absolute z-50 ${lightH} w-full bg-slate-300`}
      ></div>
      <div
        id="transition-slide"
        className={`absolute z-50 ${darkH} w-full bg-slate-500`}
      ></div>

      <main className="">
        {/* Navbar */}
        <div className="fixed z-40 left-0 right-0 mx-auto">
          <Navbar />
        </div>

        <Home />

        <Projects />

        <div className="h-[150vh]"></div>
      </main>
    </>
  );
}
