import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar: React.FC<NavbarProps> = ({ curPage = "home" }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="fixed w-full h-14 bg-slate-200"
        style={{
          opacity: Math.max(0, 1 - scrollPosition / 800),
        }}
      ></div>
      <div className="fixed flex min-w-full p-4">
        <div className="">
          <Link className="mr-8" href="/">
            <b>Noah Peters</b>
          </Link>
        </div>
        <div className="ml-auto">
          <Link className="mr-8" href="/">
            Home
          </Link>
          <Link className="mr-8" href="/projects">
            Projects
          </Link>
          <Link className="mr-8" href="/about">
            About
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
