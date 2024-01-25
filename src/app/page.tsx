// @ts-nocheck
"use client";

import { useEffect } from "react";
import Bounded from "@/components/bounded";
import Header from "@/components/header";
import Scene from "@/components/scene";
import Image from "next/image";
import gsap from "gsap";

export default function Home() {
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
    <main>
      <Bounded>
        <div>
          <Scene />
          <h1 className="text-[clamp(3rem,20vmin,14rem)] leading-none tracking-tighter font-extrabold ml-4 -mt-8 md:ml-8 md:-mt-52 xl:ml-32 xl:-mt-64">
            <span className="block">{renderLetters("Noah", "first")}</span>
            <span className="block">{renderLetters("Peters", "last")}</span>
          </h1>
        </div>
      </Bounded>
    </main>
  );
}
