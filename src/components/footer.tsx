import clsx from "clsx";
import React from "react";
import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="p-4 flex-col sm:flex-row flex gap-y-4 sm:justify-between items-center max-w-[1200px] mx-auto">
      {/* Noah Peters, © DATE */}
      <div className="flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
        <Link
          href="/"
          className="text-xl font-bold tracking-tighter  transition-all duration-150 hover:scale-125"
        >
          Noah Peters
        </Link>
        <span className="hidden leading-[0] sm:inline">/</span>
        <p>© {new Date().getFullYear()} Noah Peters</p>
      </div>

      {/* Social links */}
      <div className="inline-flex justify-center sm:justify-end">
        <Link
          href="https://github.com/noahpete"
          className="p-2 text-2xl transition-all duration-150 hover:scale-125"
        >
          <FaGithub />
        </Link>
        <Link
          href="https://www.linkedin.com/in/noah-f-peters/"
          className="p-2 text-2xl transition-all duration-150 hover:scale-125"
        >
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
}
