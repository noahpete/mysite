"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Scene from "./scene";

export default function Home() {
  const comp = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1 });

    tl.fromTo(
      ".name-animation",
      {
        x: -200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out(1,0.3)",
        stagger: { each: 0.1 },
      }
    );

    return () => tl.kill();
  }, []);

  const renderLetters = (name: string, key: string) => {
    if (!name) return;

    return name
      .split("")
      .map((letter, index) => (
        <span className="name-animation inline-block">{letter}</span>
      ));
  };
  return (
    <main className="">
      <div className="grid min-h-[70vh] grid-cols-1 md:grid-cols-2 items-center">
        <Scene />
        <div className="col-start-1 md:row-start-1">
          <h1
            className="text-8xl font-bold ml-4 -mt-12"
            aria-label="Noah Peters"
            ref={comp}
          >
            <span className="block">{renderLetters("Noah", "first")}</span>
            <span className="block">{renderLetters("Peters", "last")}</span>
          </h1>
        </div>
      </div>
    </main>
  );
}
