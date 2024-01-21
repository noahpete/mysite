"use client";

import clsx from "clsx";
import React, { useState } from "react";
import Link from "next/link";
import Button from "./button";
import { MdMenu, MdClose } from "react-icons/md";
import { usePathname } from "next/navigation";

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

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-col px-4 py-2 md:m-4 md:flex-row md:items-center md:rounded-xl">
        {/* Common elts */}
        <div className="flex items-center justify-between">
          <div className="hidden md:flex">
            <NameLogo name="Noah Peters" />
          </div>
          <div className="md:hidden">
            <NameLogo name="NP" />
          </div>
          <button
            className="block p-2 text-3xl ml-auto mr-0 md:hidden"
            onClick={() => setOpen(true)}
          >
            <MdMenu />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 max-w-[240px] mr-0 ml-auto top-0 z-50 flex flex-col items-end gap-4 bg-slate-50 pr-4 pt-14 transition-transform duration-300 ease-in-out md:hidden",
            open ? "translate-x-0" : "translate-x-[100%]"
          )}
        >
          <button
            className="fixed right-4 top-3 block p-2 text-2xl md:hidden"
            onClick={() => setOpen(false)}
          >
            <MdClose />
          </button>
          {LINKS.map(({ link, label }, index) => (
            <React.Fragment key={label}>
              <li className="first:mt-8">
                <Link
                  href={link}
                  className={clsx(
                    "group relative block overflow-hidden rounded mr-12 ml-auto px-3 text-3xl font-bold"
                  )}
                >
                  <span
                    className={clsx(
                      "absolute inset-0 z-0 h-full translate-y-12 rounded bg-slate-300 transition-transform duration-300 ease-in-out group-hover:translate-y-0",
                      pathname === link ? "translate-y-8" : "translate-y-24"
                    )}
                  />
                  <span className="relative">{label}</span>
                </Link>
              </li>
            </React.Fragment>
          ))}
        </div>

        {/* Desktop menu */}
        <DesktopMenu pathname={pathname} />
      </ul>
    </nav>
  );
}

function NameLogo({ name }: { name: string }) {
  return (
    <Link
      href="/"
      aria-label="Home page"
      className="text-xl font-extrabold tracking-tighter"
    >
      {name}
    </Link>
  );
}

function DesktopMenu({ pathname }: { pathname: string }) {
  return (
    <div className="relative z-50 hidden flex-row items-center gap-1 bg-transparent py-0 md:flex ml-auto mr-0">
      {LINKS.map(({ link, label }, index) => (
        <React.Fragment key={label}>
          <li>
            <Link
              href={link}
              className={clsx(
                "group relative block overflow-hidden px-2 py-1 text-base font-bold"
              )}
            >
              <span
                className={clsx(
                  "absolute inset-0 z-0 h-full bg-black max-w-16 transition-transform duration-300 ease-in-out",
                  pathname === link ? "translate-y-[30px]" : "translate-y-24"
                )}
              />
              <span className="relative">{label}</span>
            </Link>
          </li>
          {index < LINKS.length - 1 && (
            <span
              className="hidden text-xl font-thin leading-[0] md:inline"
              aria-hidden="true"
            >
              /
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
