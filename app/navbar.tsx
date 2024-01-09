import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar: React.FC<NavbarProps> = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [curPage, setCurPage] = useState("home");
  const [isPlaying, setIsPlaying] = useState(false);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const renderLink = (pageName: string, href: string) => {
    let num = 1;
    if (pageName === "projects") num = 5;
    if (pageName === "about") num = 6;
    const gif = `/underline${num}.gif`;
    const png = `/underline${num}.png`;

    return (
      <Link
        className="mr-5 relative"
        onClick={() => {
          setCurPage(pageName);
          setIsPlaying(true);
        }}
        href={href}
      >
        <img
          className={`absolute top-0 left-0 scale-[2.2] translate-y-[4px] scale-y-150 -z-10 ${
            curPage === pageName ? "" : "hidden"
          }`}
          src={isPlaying ? gif : png}
          alt=""
        />
        {`${pageName[0].toUpperCase()}${pageName.substring(1)}`}
      </Link>
    );
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsPlaying(false);
    }, 750);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isPlaying]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        id="bg"
        className="fixed w-full h-14 bg-slate-200"
        style={{
          opacity: Math.max(0, 1 - scrollPosition / 500),
        }}
      ></div>
      <div className="flex min-w-full p-4 transition-all -translate-x-16 md:translate-x-0 relative">
        <div className="opacity-0 transition-all md:block md:opacity-100">
          <Link className="mr-8" href="/">
            <b>Noah Peters</b>
          </Link>
        </div>
        <div className="mx-auto md:mr-0 md:ml-auto max-w-sm relative">
          {renderLink("home", "/#home")}
          {renderLink("projects", "/#projects")}
          {renderLink("about", "/")}
        </div>
      </div>
    </>
  );
};

export default Navbar;
