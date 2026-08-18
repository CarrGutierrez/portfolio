"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-transparent px-4 py-4 backdrop-blur-[2px] sm:px-6 sm:py-6">
      <div
        className={`mx-auto flex w-full max-w-[900px] items-center justify-between gap-4 rounded-[18px] border px-4 py-4 transition-all duration-300 sm:rounded-[20px] sm:px-6 sm:py-5 ${
          isScrolled
            ? "border-white/10 bg-[#0c1111]/98 shadow-[0_12px_40px_rgba(0,0,0,0.28)]"
            : "border-[#181818] bg-[#0c1111]/95"
        }`}
      >
        <h2 className="text-[10px] font-semibold uppercase tracking-[1.6px] text-white/40 sm:text-xs sm:tracking-[2px]">
          Carr Gutierrez
        </h2>

        <div className="flex shrink-0 gap-2 sm:gap-3">
          <a
            href="https://www.linkedin.com/in/carr-gutierrez-a4b286374"
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6 opacity-30 transition-opacity duration-300 hover:opacity-70 sm:h-7 sm:w-7"
          >
            <Image
              src="https://framerusercontent.com/images/vbwqc7k7luxyjMDSxUCykutREUw.svg"
              alt="LinkedIn"
              width={28}
              height={28}
              className="h-full w-full"
            />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6 opacity-30 transition-opacity duration-300 hover:opacity-70 sm:h-7 sm:w-7"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-full w-full text-white"
            >
              <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988h-6.466v-14.967h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zm-3.466-8.988h3.584c2.508 0 2.906-3-.312-3h-3.272v3zm3.391 3h-3.391v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
            </svg>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=carrgutierrez24@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-6 w-6 opacity-30 transition-opacity duration-300 hover:opacity-70 sm:h-7 sm:w-7"
          >
            <Image
              src="https://framerusercontent.com/images/DSG6uQUUujv0hxhNpDXMLk3xJis.svg"
              alt="Email"
              width={28}
              height={28}
              className="h-full w-full"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}
