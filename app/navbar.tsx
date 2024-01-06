import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar: React.FC<NavbarProps> = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [randomNum, setRandomNum] = useState(1);
  const [curPage, setCurPage] = useState("home");
  const [homePlaying, setHomePlaying] = useState(false);
  const [projPlaying, setProjPlaying] = useState(false);
  const [aboutPlaying, setAboutPlaying] = useState(false);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  const handleLinkClick = (link: string) => {
    let func: ((arg0: boolean) => void) | null = null;
    if (link === "home" && curPage !== "home") func = setHomePlaying;
    // if (link === "home") func = setHomePlaying;
    if (link === "proj" && curPage !== "proj") func = setProjPlaying;
    if (link === "about" && curPage !== "about") func = setAboutPlaying;
    console.log(curPage, link);
    if (!func) return;
    func(true);
    setTimeout(() => {
      func(false);
    }, 750);
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
          <Link
            className="mr-8 relative"
            onClick={() => {
              if (curPage !== "home")
                setRandomNum(Math.floor(Math.random() * 6) + 1);
              setCurPage("home");
              handleLinkClick("home");
            }}
            href="/"
          >
            <img
              className={`absolute top-0 left-0 scale-[2.2] translate-y-[6px] scale-y-150 -z-10 ${
                curPage === "home" ? "" : "hidden"
              }`}
              src={
                homePlaying
                  ? `/underline${randomNum}.gif`
                  : `/underline${randomNum}.png`
              }
              alt=""
            />
            Home
          </Link>
          <Link
            className="mr-8 relative"
            onClick={() => {
              if (curPage !== "proj")
                setRandomNum(Math.floor(Math.random() * 6) + 1);
              setCurPage("proj");
              handleLinkClick("proj");
            }}
            href="/"
          >
            <img
              className={`absolute top-0 left-0 scale-[2.2] translate-y-[3px] scale-y-150 -z-10 ${
                curPage === "proj" ? "" : "hidden"
              }`}
              src={
                projPlaying
                  ? `/underline${randomNum}.gif`
                  : `/underline${randomNum}.png`
              }
              alt=""
            />
            Projects
          </Link>
          <Link
            className="mr-8 relative"
            onClick={() => {
              if (curPage !== "about")
                setRandomNum(Math.floor(Math.random() * 6) + 1);
              setCurPage("about");
              handleLinkClick("about");
            }}
            href="/about"
          >
            <img
              className={`absolute top-0 left-0 scale-[2.2] translate-y-[6px] scale-y-150 -z-10 ${
                curPage === "about" ? "" : "hidden"
              }`}
              src={
                aboutPlaying
                  ? `/underline${randomNum}.gif`
                  : `/underline${randomNum}.png`
              }
              alt=""
            />
            About
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
