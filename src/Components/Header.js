import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <ul className="flex gap-4">
        <li>
          <Link href="/sign-in">Sign In</Link>
        </li>
        <li className="hidden sm:block">
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hidden sm:block">
            About
          </Link>
        </li>
      </ul>
      <Link href="/" className="flex gap-1 items-center">
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
          IMDB
        </span>
        <span className="text-xl hidden sm:inline">Clone</span>
      </Link>
    </div>
  );
};

export default Header;
