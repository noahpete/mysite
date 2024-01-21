"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Scene from "./scene";
import Header from "@/components/header";
import Footer from "@/components/footer";

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

    return name.split("").map((letter, index) => (
      <span key={key + index} className="name-animation inline-block">
        {letter}
      </span>
    ));
  };

  return (
    <main className="">
      <Header />
      <div className="grid mx-auto max-w-[500px] md:max-w-[800px] h-[50vh] md:-mt-12 grid-cols-1 md:grid-cols-2 items-center">
        <Scene />
        <div className="col-start-1 md:row-start-1">
          <h1
            className="text-8xl md:text-[107px] font-bold ml-8 -mt-24 md:mt-48"
            aria-label="Noah Peters"
            ref={comp}
          >
            <span className="block">{renderLetters("Noah", "first")}</span>
            <span className="block">{renderLetters("Peters", "last")}</span>
          </h1>
        </div>
      </div>
      <Footer />
    </main>
  );
}
