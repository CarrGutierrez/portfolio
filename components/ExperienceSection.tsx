"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const experiences = [
  {
    id: 1,
    title: "dnsc 🎓",
    role: "bsit student",
    year: "/ now",
    logo: "/assets/dnsc.jpg",
    color: "pink",
    href: "#",
  },
  {
    id: 2,
    title: "rentopia 🏠",
    role: "product designer",
    year: "/ 2024",
    logo: "/assets/rentopia.png",
    color: "blue",
    href: "#",
  },
  {
    id: 3,
    title: "HrNexus 🔎",
    role: "frontend developer",
    year: "/ 2025",
    logo: "🔎",
    color: "yellow",
    href: "#",
  },
  {
    id: 4,
    title: "mcpi 🎓",
    role: "ict student",
    year: "/ 2022",
    logo: "/assets/mcpi.png",
    color: "cyan",
    href: "#",
  },
];

const colorClasses = {
  pink: {
    glow: "bg-gradient-to-br from-emerald-400 via-emerald-600 to-emerald-800",
    bg: "bg-gradient-to-br from-emerald-400 via-emerald-600 to-emerald-800",
  },
  blue: {
    glow: "bg-gradient-to-br from-red-100 via-red-300 to-red-500",
    bg: "bg-gradient-to-br from-red-100 via-red-300 to-red-500",
  },
  yellow: {
    glow: "bg-yellow-500",
    bg: "bg-yellow-500",
  },
  cyan: {
    glow: "bg-gradient-to-br from-sky-300 via-blue-400 to-blue-600",
    bg: "bg-gradient-to-br from-sky-300 via-blue-400 to-blue-600",
  },
};

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-y-12");
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const cards = sectionRef.current?.querySelectorAll(".experience-card");
    cards?.forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16">
      <h2 className="text-[24px] sm:text-[28px] font-extrabold tracking-[-0.6px] text-white/90 lowercase mb-8 sm:mb-12 text-center">
        Experience
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[800px] mx-auto">
        <div className="flex flex-col gap-4">
          {experiences.slice(0, 2).map((exp, index) => (
            <a
              key={exp.id}
              href={exp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="experience-card opacity-0 translate-y-12 bg-[rgb(20,21,21)] border border-white/[0.08] rounded-[20px] p-4 no-underline text-inherit transition-all duration-700 shadow-[0px_15px_40px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0px_20px_50px_25px_rgba(0,0,0,0.3)]"
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="relative w-full aspect-[1.8] rounded-[16px] overflow-hidden mb-3">
                {/* Glow effect */}
                <div
                  className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4/5 h-3/5 blur-[60px] mix-blend-hard-light opacity-60 ${
                    colorClasses[exp.color as keyof typeof colorClasses].glow
                  }`}
                />

                {/* Background */}
                <div
                  className={`absolute inset-0 ${
                    colorClasses[exp.color as keyof typeof colorClasses].bg
                  }`}
                />

                {/* Logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[36px] z-10">
                  {typeof exp.logo === "string" && exp.logo.startsWith("/") ? (
                    <Image
                      src={exp.logo}
                      alt={exp.title}
                      width={
                        exp.color === "pink"
                          ? 140
                          : exp.color === "blue"
                          ? 160
                          : 100
                      }
                      height={
                        exp.color === "pink"
                          ? 140
                          : exp.color === "blue"
                          ? 160
                          : 100
                      }
                      className="object-contain rounded-[12px] block"
                    />
                  ) : (
                    <span>{exp.logo}</span>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-[16px] sm:text-[17px] font-extrabold mb-3 text-white/90 lowercase">
                  {exp.title}
                </h3>
                <div className="flex justify-between items-end gap-3">
                  <p className="text-[10px] font-semibold tracking-[1.5px] uppercase text-white/30 flex-1">
                    {exp.role}
                  </p>
                  <p className="text-[13px] sm:text-[14px] text-white/80 shrink-0">{exp.year}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {experiences.slice(2).map((exp, index) => (
            <a
              key={exp.id}
              href={exp.href}
              target="_blank"
              rel="noopener noreferrer"
              className="experience-card opacity-0 translate-y-12 bg-[rgb(20,21,21)] border border-white/[0.08] rounded-[20px] p-4 no-underline text-inherit transition-all duration-700 shadow-[0px_15px_40px_20px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[0px_20px_50px_25px_rgba(0,0,0,0.3)]"
              style={{
                transitionDelay: `${(index + 2) * 200}ms`,
              }}
            >
              <div className="relative w-full aspect-[1.8] rounded-[16px] overflow-hidden mb-3">
                {/* Glow effect */}
                <div
                  className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-4/5 h-3/5 blur-[60px] mix-blend-hard-light opacity-50 ${
                    colorClasses[exp.color as keyof typeof colorClasses].glow
                  }`}
                />

                {/* Background */}
                <div
                  className={`absolute inset-0 ${
                    colorClasses[exp.color as keyof typeof colorClasses].bg
                  }`}
                />

                {/* Logo */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[36px] z-10">
                  {typeof exp.logo === "string" && exp.logo.startsWith("/") ? (
                    <Image
                      src={exp.logo}
                      alt={exp.title}
                      width={exp.color === "cyan" ? 100 : 100}
                      height={exp.color === "cyan" ? 100 : 100}
                      className="object-contain rounded-[12px] block"
                    />
                  ) : (
                    <span>{exp.logo}</span>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-[16px] sm:text-[17px] font-extrabold mb-3 text-white/90 lowercase">
                  {exp.title}
                </h3>
                <div className="flex justify-between items-end gap-3">
                  <p className="text-[10px] font-semibold tracking-[1.5px] uppercase text-white/30 flex-1">
                    {exp.role}
                  </p>
                  <p className="text-[13px] sm:text-[14px] text-white/80 shrink-0">{exp.year}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
