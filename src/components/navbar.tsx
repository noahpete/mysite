"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu, MdClose } from "react-icons/md";
import React, { useState } from "react";
import clsx from "clsx";

const LINKS = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Projects",
    link: "/projects",
  },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const MobileMenu = ({ pathname }: { pathname: string }) => {
    return (
      <div>
        <button
          className="fixed right-4 top-4 p-2 block text-2xl md:hidden"
          onClick={() => setOpen(false)}
        >
          <MdClose />
        </button>
        {LINKS.map(({ link, label }) => (
          <React.Fragment key={label}>
            <li className="first:mt-8">
              <Link
                href={link}
                onClick={() => setOpen(false)}
                className={clsx(
                  "group relative w-fit block overflow-hidden mr-16 mt-4 sm:mr-24 sm:mt-8 ml-auto px-3 text-3xl font-bold"
                )}
              >
                <span
                  className={clsx(
                    "absolute inset-0 w-4/5 mr-3 ml-auto z-0 h-full translate-y-12 bg-black transition-transform duration-300 ease-in-out",
                    pathname === link ? "translate-y-8" : "translate-y-24"
                  )}
                />
                <span>{label}</span>
              </Link>
            </li>
          </React.Fragment>
        ))}
      </div>
    );
  };

  const DesktopMenu = ({ pathname }: { pathname: string }) => {
    return (
      <div className="z-50 hidden md:flex items-center gap-1 mr-0 ml-auto">
        {LINKS.map(({ link, label }, index) => (
          <React.Fragment key={label}>
            <li className="text-lg">
              <Link href={link}>
                {/* TODO: underline */}
                <span id="underline" />
                <span>{label}</span>
              </Link>
            </li>

            {index < LINKS.length - 1 && (
              <span
                className="hidden text-lg font-thin leading-[0] md:inline"
                aria-hidden="true"
              >
                /
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <nav id="card" className="flex flex-col md:flex-row px-4 py-2">
      <ul className="flex items-center w-full">
        <div id="logo" className="z-50 flex flex-col">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter md:hidden"
          >
            NP
          </Link>
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter hidden md:flex"
          >
            Noah Peters
          </Link>
        </div>

        <button
          className="block text-3xl ml-auto mr-0 md:hidden"
          onClick={() => setOpen(true)}
        >
          <MdMenu />
        </button>

        {/* Mobile menu */}
        <div
          id="card"
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-end gap-4 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden",
            open ? "translate-x-0" : "translate-x-[110%]"
          )}
        >
          <MobileMenu pathname={pathname} />
        </div>

        {/* Desktop menu */}
        <DesktopMenu pathname={pathname} />
      </ul>
    </nav>
  );
}
