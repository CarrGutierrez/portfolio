"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

type Experience = {
  id: number;
  title: string;
  role: string;
  year: string;
  logo: string;
  color: "magenta" | "blue" | "multi" | "cyan" | "holyChild";
  logoSize?: number;
  logoBg?: boolean;
};

const experiences: Experience[] = [
  {
    id: 1,
    title: "DNSC",
    role: "BSIT GRADUATE",
    year: "/ 2026",
    logo: "/assets/dnsc.jpg",
    color: "magenta",
  },
  {
    id: 2,
    title: "Rentopia",
    role: "UI/UX Designer",
    year: "/ 2024",
    logo: "/assets/rentopia.png",
    color: "blue",
  },
  {
    id: 3,
    title: "HRNexus",
    role: "Frontend Developer",
    year: "/ 2024",
    logo: "/assets/hrnexuslogo.png",
    color: "multi",
    logoSize: 350,
    logoBg: true,
  },
  {
    id: 4,
    title: "Holy Child",
    role: "Internship",
    year: "/ 2026",
    logo: "/assets/hccddn.png",
    color: "holyChild",
  },
];

const themes = {
  magenta: {
    panel: "from-emerald-300 via-emerald-500 to-emerald-700",
    glow: "from-emerald-300/35 via-emerald-500/20 to-emerald-800/15",
  },
  blue: {
    panel: "from-rose-200 via-red-400 to-rose-700",
    glow: "from-rose-200/30 via-red-400/20 to-rose-800/15",
  },
  multi: {
    panel: "from-[#1a1400] via-[#2a1f00] to-[#1a1400]",
    glow: "from-yellow-300/30 via-amber-400/18 to-yellow-700/15",
  },
  cyan: {
    panel: "from-sky-200 via-blue-400 to-indigo-700",
    glow: "from-sky-200/30 via-blue-400/18 to-indigo-800/15",
  },
  holyChild: {
    panel: "from-white via-slate-100 to-slate-300",
    glow: "from-white/30 via-slate-200/20 to-slate-400/12",
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
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" },
    );

    const cards = sectionRef.current?.querySelectorAll(".experience-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const leftColumn = experiences.filter((_, index) => index % 2 === 0);
  const rightColumn = experiences.filter((_, index) => index % 2 !== 0);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16">
      <h2 className="mb-8 text-center text-[22px] font-extrabold tracking-[-0.6px] text-white/90 sm:mb-12 sm:text-[24px]">
        Experience
      </h2>

      <div className="mx-auto grid max-w-[560px] grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
        <div className="flex flex-col gap-6 md:gap-8">
          {leftColumn.map((exp, index) => (
            <div
              key={exp.id}
              className="experience-card group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0c0f13] p-4 opacity-0 translate-y-12 shadow-[0_22px_70px_rgba(0,0,0,0.42)] transition-all duration-700"
              style={{ transitionDelay: `${index * 160}ms` }}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${themes[exp.color].glow} opacity-70 blur-2xl`}
              />

              <div className="relative mb-4 aspect-[1.5] overflow-hidden rounded-[18px] border border-white/10">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${themes[exp.color].panel}`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_45%)]" />

                <div className="absolute inset-0 flex items-center justify-center">
                  {exp.logo.startsWith("/") ? (
                    <Image
                      src={exp.logo}
                      alt={exp.title}
                      width={110}
                      height={110}
                      className="rounded-[14px] object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
                    />
                  ) : (
                    <span className="text-[62px] font-extrabold text-white/90">
                      {exp.logo}
                    </span>
                  )}
                </div>

                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.2)_50%,transparent_80%)]" />
              </div>

              <h3 className="text-[22px] font-extrabold leading-[1.05] text-white/92 sm:text-[24px]">
                {exp.title}
              </h3>

              <div className="mt-5 flex items-end justify-between gap-4">
                <p className="text-[9px] font-semibold uppercase tracking-[1.6px] text-white/28 sm:text-[10px]">
                  {exp.role}
                </p>
                <p className="shrink-0 text-[16px] font-semibold text-white/82 sm:text-[18px]">
                  {exp.year}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5 md:gap-6 md:pt-8">
          {rightColumn.map((exp, index) => (
            <div
              key={exp.id}
              className="experience-card group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#0c0f13] p-4 opacity-0 translate-y-12 shadow-[0_22px_70px_rgba(0,0,0,0.42)] transition-all duration-700"
              style={{ transitionDelay: `${(index + 2) * 160}ms` }}
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${themes[exp.color].glow} opacity-70 blur-2xl`}
              />

              <div className="relative mb-4 aspect-[1.5] overflow-hidden rounded-[18px] border border-white/10">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${themes[exp.color].panel}`}
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_45%)]" />

                <div className="absolute inset-0 flex items-center justify-center">
                  {exp.logo.startsWith("/") ? (
                    <Image
                      src={exp.logo}
                      alt={exp.title}
                      width={110}
                      height={110}
                      className="rounded-[14px] object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
                    />
                  ) : (
                    <span className="text-[62px] font-extrabold text-white/90">
                      {exp.logo}
                    </span>
                  )}
                </div>

                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.2)_50%,transparent_80%)]" />
              </div>

              <h3 className="text-[22px] font-extrabold leading-[1.05] text-white/92 sm:text-[24px]">
                {exp.title}
              </h3>

              <div className="mt-5 flex items-end justify-between gap-4">
                <p className="text-[9px] font-semibold uppercase tracking-[1.6px] text-white/28 sm:text-[10px]">
                  {exp.role}
                </p>
                <p className="shrink-0 text-[16px] font-semibold text-white/82 sm:text-[18px]">
                  {exp.year}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
