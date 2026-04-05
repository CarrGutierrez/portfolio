"use client";

import { useRef, useEffect, useState } from "react";

const videos = [
  { src: "/assets/rentopia.mp4", alt: "Rentopia App" },
  { src: "/assets/brgy.mp4", alt: "Brgy App" },
  { src: "/assets/docquick.mp4", alt: "DocQuick App" },
];

export default function WorkSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollability = () => {
    if (!carouselRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const isAtStart = scrollLeft < 40;
    const isAtEnd = scrollLeft > maxScroll - 40;
    const step = window.innerWidth < 640 ? clientWidth * 0.82 : 287;

    setCanScrollLeft(!isAtStart);
    setCanScrollRight(!isAtEnd);
    setCurrentIndex(Math.min(Math.round(scrollLeft / step), videos.length - 1));
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      checkScrollability();
    };

    setTimeout(checkScrollability, 100);
    carousel.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkScrollability);

    return () => {
      carousel.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScrollability);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const scrollAmount =
      window.innerWidth < 640 ? carousel.clientWidth * 0.82 : 287;

    carousel.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setTimeout(checkScrollability, 50);
    setTimeout(checkScrollability, 300);
    setTimeout(checkScrollability, 600);
  };

  return (
    <section
      className="relative flex justify-center px-0 py-12 sm:px-4 sm:py-16"
      id="work"
    >
      <div className="relative w-full overflow-hidden rounded-[24px] border border-[#181818] bg-transparent p-4 shadow-[0_25px_80px_25px_rgba(0,0,0,0.5)] backdrop-blur-sm opacity-0 animate-carousel-fade-in sm:rounded-[28px] sm:p-8 lg:w-[min(100%,calc(65vw-4rem))] lg:p-12">
        <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01]" />
        <div className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]" />

        <div className="relative mb-8 text-center sm:mb-12">
          <h2 className="relative inline-block text-[24px] font-extrabold tracking-[-0.6px] text-white/90 lowercase sm:text-[28px]">
            Recent Work
            <div className="absolute -bottom-2 left-1/2 h-[2px] w-16 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </h2>
        </div>

        <div className="pointer-events-none absolute top-0 left-0 z-10 hidden h-full w-[140px] rounded-l-[28px] bg-gradient-to-r from-[rgb(14,16,17)] via-[rgba(14,16,17,0.8)] to-transparent md:block" />
        <div className="pointer-events-none absolute top-0 right-0 z-10 hidden h-full w-[140px] rounded-r-[28px] bg-gradient-to-l from-[rgb(14,16,17)] via-[rgba(14,16,17,0.8)] to-transparent md:block" />

        <div
          ref={carouselRef}
          className="relative flex justify-start gap-4 overflow-x-auto py-2 scroll-smooth hide-scrollbar sm:gap-6 sm:py-4"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 28px, rgba(0,0,0,1) calc(100% - 28px), rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 28px, rgba(0,0,0,1) calc(100% - 28px), rgba(0,0,0,0) 100%)",
          }}
        >
          <div className="min-w-4 flex-shrink-0 sm:min-w-[80px]" />

          {videos.map((video, index) => (
            <div
              key={index}
              className="relative h-[420px] w-[78vw] min-w-[78vw] max-w-[261px] flex-shrink-0 cursor-pointer overflow-hidden rounded-[18px] border border-white/[0.08] bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 animate-card-fade-in sm:h-[564px] sm:min-w-[261px] sm:rounded-[20px]"
              style={{
                scrollSnapAlign: "center",
                animationDelay: `${0.7 + index * 0.1}s`,
                boxShadow: "0px 20px 60px 20px rgba(0,0,0,0.4)",
                transform: "translate3d(0, 0px, 0)",
                transition:
                  "transform 1.2s cubic-bezier(0.05, 0.7, 0.1, 1), box-shadow 1.2s cubic-bezier(0.05, 0.7, 0.1, 1), opacity 0.3s ease",
                zIndex: 10,
                willChange: "transform",
              }}
              onMouseEnter={(e) => {
                if (window.innerWidth < 640) return;
                e.currentTarget.style.setProperty(
                  "transform",
                  "translate3d(0, -16px, 0) scale(1.02)",
                  "important"
                );
                e.currentTarget.style.boxShadow =
                  "0 50px 120px rgba(0,0,0,0.5)";
                e.currentTarget.style.zIndex = "50";
                e.currentTarget.style.filter = "brightness(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty(
                  "transform",
                  "translate3d(0, 0px, 0) scale(1)",
                  "important"
                );
                e.currentTarget.style.boxShadow =
                  "0px 20px 60px 20px rgba(0,0,0,0.4)";
                e.currentTarget.style.zIndex = "10";
                e.currentTarget.style.filter = "brightness(1)";
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
                style={{ pointerEvents: "none" }}
              >
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
          ))}

          <div className="min-w-4 flex-shrink-0 sm:min-w-[80px]" />
        </div>

        <div className="mt-5 flex justify-center gap-2 sm:mt-6">
          {videos.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-6 bg-white/80" : "w-2 bg-white/20"
              }`}
            />
          ))}
        </div>

        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute top-1/2 left-4 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 opacity-90 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 hover:opacity-100 md:flex"
          >
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <defs>
                <mask id="leftArrowMaskWork">
                  <circle cx="28" cy="28" r="28" fill="white" />
                  <g
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  >
                    <line x1="18" y1="28" x2="38" y2="28" />
                    <polyline points="26,20 18,28 26,36" />
                  </g>
                </mask>
              </defs>
              <circle
                cx="28"
                cy="28"
                r="28"
                fill="black"
                mask="url(#leftArrowMaskWork)"
              />
            </svg>
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/2 right-4 z-20 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 opacity-90 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 hover:opacity-100 md:flex"
          >
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <defs>
                <mask id="rightArrowMaskWork">
                  <circle cx="28" cy="28" r="28" fill="white" />
                  <g
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  >
                    <line x1="18" y1="28" x2="38" y2="28" />
                    <polyline points="30,20 38,28 30,36" />
                  </g>
                </mask>
              </defs>
              <circle
                cx="28"
                cy="28"
                r="28"
                fill="black"
                mask="url(#rightArrowMaskWork)"
              />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
