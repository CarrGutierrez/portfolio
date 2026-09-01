"use client";

import { useRef, useEffect, useState } from "react";

const videos = [
  {
    src: "/assets/hrnexusfinal.mp4",
    alt: "HRNexus Final",
    figma: null,
  },
  {
    src: "/assets/rentopia.mp4",
    alt: "Rentopia App",
    figma:
      "https://www.figma.com/design/fkT5qCabGS9iQfiY6O5HGs/Rentopia?node-id=0-1&t=RGhUG7jw4XBBgmwV-1",
  },
  {
    src: "/assets/busybee.mp4",
    alt: "BusyBee App",
    figma:
      "https://www.figma.com/design/Yw8ztkWZlvXNYau1EbRcqS/BusyBee?node-id=4045-1231&t=R7GhBg8uIikkWrFv-1",
  },
  {
    src: "/assets/brgy.mp4",
    alt: "Brgy App",
    figma:
      "https://www.figma.com/design/huStkst66Qc6drkq5TE3yI/Health-Care-App?node-id=0-1&t=SlpExDIJRqKP5mpc-1",
  },
  {
    src: "/assets/hrnexus.mp4",
    alt: "HRNexus App",
    figma:
      "https://www.figma.com/design/tpMesWIyoHjIhaw86bhney/HRNexus?node-id=0-1&t=PN0DIL0syYQKfwz0-1",
  },
  {
    src: "/assets/docquick.mp4",
    alt: "DocQuick App",
    figma: null,
  },
];

function PhoneMockup({
  video,
  showBadge,
}: {
  video: (typeof videos)[number];
  showBadge: boolean;
}) {
  return (
    <div
      className="relative transition-transform duration-300 group-hover:scale-[1.03]"
      style={{
        width: "100%",
        aspectRatio: "9/19.5",
        background:
          "linear-gradient(145deg, #2a2a2a 0%, #1a1a1a 50%, #222 100%)",
        borderRadius: "44px",
        padding: "12px",
        boxShadow:
          "0 0 0 1.5px #3a3a3a, 0 0 0 3px #111, 0 30px 80px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}
    >
      {/* Side buttons */}
      <div className="absolute -right-[3px] top-[80px] w-[3px] h-[32px] bg-[#2a2a2a] rounded-r-sm" />
      <div className="absolute -left-[3px] top-[60px] w-[3px] h-[24px] bg-[#2a2a2a] rounded-l-sm" />
      <div className="absolute -left-[3px] top-[92px] w-[3px] h-[24px] bg-[#2a2a2a] rounded-l-sm" />

      {/* Screen area */}
      <div
        className="relative w-full h-full overflow-hidden"
        style={{ borderRadius: "32px", background: "#000" }}
      >
        {/* Notch */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[72px] h-[24px] bg-[#1a1a1a] z-20 flex items-center justify-center"
          style={{ borderRadius: "0 0 16px 16px" }}
        >
          <div className="w-[8px] h-[8px] rounded-full bg-[#111] border border-[#333]" />
        </div>

        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ pointerEvents: "none" }}
        >
          <source src={video.src} type="video/mp4" />
        </video>
      </div>

      {/* Figma hover badge — only shown when showBadge is true */}
      {showBadge && (
        <div className="absolute inset-0 rounded-[44px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40">
          <span className="flex items-center gap-2 bg-white text-black text-[12px] font-semibold px-4 py-2 rounded-full shadow-lg">
            <svg width="14" height="14" viewBox="0 0 38 57" fill="none">
              <path
                d="M19 28.5A9.5 9.5 0 1 1 28.5 19 9.5 9.5 0 0 1 19 28.5Z"
                fill="#1ABCFE"
              />
              <path
                d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19V47.5A9.5 9.5 0 0 1 0 47.5Z"
                fill="#0ACF83"
              />
              <path d="M19 0V19H28.5A9.5 9.5 0 0 0 19 0Z" fill="#FF7262" />
              <path
                d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5Z"
                fill="#F24E1E"
              />
              <path
                d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5Z"
                fill="#A259FF"
              />
            </svg>
            View in Figma
          </span>
        </div>
      )}
    </div>
  );
}

export default function WorkSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const checkScrollability = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;
    const step = window.innerWidth < 640 ? clientWidth * 0.82 : 287;
    setCanScrollLeft(scrollLeft >= 40);
    setCanScrollRight(scrollLeft <= maxScroll - 40);
    setCurrentIndex(Math.min(Math.round(scrollLeft / step), videos.length - 1));
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    setTimeout(checkScrollability, 100);
    carousel.addEventListener("scroll", checkScrollability);
    window.addEventListener("resize", checkScrollability);
    return () => {
      carousel.removeEventListener("scroll", checkScrollability);
      window.removeEventListener("resize", checkScrollability);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount =
      window.innerWidth < 640 ? carouselRef.current.clientWidth * 0.82 : 287;
    carouselRef.current.scrollBy({
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
            UI/UX Projects
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
              className="relative flex-shrink-0 opacity-0 animate-card-fade-in flex items-center justify-center"
              style={{
                scrollSnapAlign: "center",
                animationDelay: `${0.7 + index * 0.1}s`,
                width: "min(78vw, 261px)",
                minWidth: "min(78vw, 261px)",
                height: "auto",
                zIndex: 10,
              }}
            >
              {video.figma ? (
                <a
                  href={video.figma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block w-full"
                  aria-label={`View ${video.alt} in Figma`}
                >
                  <PhoneMockup video={video} showBadge />
                </a>
              ) : (
                <div className="relative block w-full">
                  <PhoneMockup video={video} showBadge={false} />
                </div>
              )}
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
            className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full w-16 h-16 cursor-pointer transition-all duration-300 z-20 hidden md:flex items-center justify-center pointer-events-auto scale-100 hover:scale-110 active:scale-95"
            style={{ background: "transparent" }}
          >
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <defs>
                <mask id="leftArrowMaskWork">
                  <circle cx="32" cy="32" r="32" fill="white" />
                  <g
                    stroke="black"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  >
                    <line x1="20" y1="32" x2="44" y2="32" />
                    <polyline points="28,24 20,32 28,40" />
                  </g>
                </mask>
              </defs>
              <circle
                cx="32"
                cy="32"
                r="32"
                fill="white"
                mask="url(#leftArrowMaskWork)"
              />
            </svg>
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full w-16 h-16 cursor-pointer transition-all duration-300 z-20 hidden md:flex items-center justify-center pointer-events-auto scale-100 hover:scale-110 active:scale-95"
            style={{ background: "transparent" }}
          >
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <defs>
                <mask id="rightArrowMaskWork">
                  <circle cx="32" cy="32" r="32" fill="white" />
                  <g
                    stroke="black"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  >
                    <line x1="20" y1="32" x2="44" y2="32" />
                    <polyline points="36,24 44,32 36,40" />
                  </g>
                </mask>
              </defs>
              <circle
                cx="32"
                cy="32"
                r="32"
                fill="white"
                mask="url(#rightArrowMaskWork)"
              />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
