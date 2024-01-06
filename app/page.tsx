"use client";

import Link from "next/link";
import Tv from "./tv";
import Navbar from "./navbar";
import { useEffect, useState } from "react";

export default function Page() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [lightH, setLightH] = useState("h-full");
  const [darkH, setDarkH] = useState("h-full");
  const [down, setDown] = useState("hidden");

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    setTimeout(() => {
      setLightH("h-0");
    }, 400);
    setDarkH("h-0");

    setTimeout(() => {
      setDown("gif");
      setTimeout(() => {
        setDown("png");
      }, 490);
    }, 2000);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

        {/* Home */}
        <div className="h-[100vh] w-screen bg-slate-100">
          <Tv />
          <img
            className="absolute translate-y-142 -translate-x-2 mx-auto left-0 right-0 bottom-0 scale-[0.3]"
            src={
              down === "hidden"
                ? ""
                : down === "gif"
                ? "/down.gif"
                : "/down.png"
            }
            alt=""
            style={{
              opacity: Math.max(0, 1 - scrollPosition / 500),
            }}
          />
        </div>

        {/* Projects */}
        <div className="h-[150vh]"></div>
      </main>
    </>
  );
}
