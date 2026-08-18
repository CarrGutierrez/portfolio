"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";

const graphics = [
  {
    src: "/assets/flyer.png",
    alt: "Flyer Design",
    category: "flyer design",
    title: "event flyer",
    tags: ["flyer", "event", "promotion"],
  },
  {
    src: "/assets/tesda program.jpg",
    alt: "TESDA Program Design",
    category: "program design",
    title: "tesda program",
    tags: ["program", "layout", "education"],
  },
  {
    src: "/assets/lakers vs suns.png",
    alt: "Lakers vs Suns Match Graphics",
    category: "sports graphics",
    title: "lakers vs suns matchup",
    tags: ["nba", "sports", "matchup"],
  },
  {
    src: "/assets/lukaposter.png",
    alt: "Luka Basketball Poster",
    category: "sports design",
    title: "luka basketball poster",
    tags: ["sports", "basketball", "poster"],
  },
  {
    src: "/assets/cade poster.png",
    alt: "Cade Poster Design",
    category: "poster design",
    title: "cade event poster",
    tags: ["poster", "typography", "sports"],
  },
  {
    src: "/assets/MCPI JERSEY.png",
    alt: "MCPI Jersey Design",
    category: "apparel design",
    title: "mcpi team jersey",
    tags: ["jersey", "basketball", "uniform"],
    views: [
      {
        src: "/assets/MCPI JERSEY.png",
        alt: "MCPI Jersey Front View",
        label: "Front",
      },
      {
        src: "/assets/mcpi back.png",
        alt: "MCPI Jersey Back View",
        label: "Back",
      },
    ],
  },
];

export default function GraphicsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [currentViewIndex, setCurrentViewIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setCurrentViewIndex(0); // Reset to first view
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "unset";
  }, []);

  const navigateLightbox = useCallback(
    (direction: "prev" | "next") => {
      if (lightboxIndex === null) return;

      if (direction === "prev" && lightboxIndex > 0) {
        setLightboxIndex(lightboxIndex - 1);
      } else if (direction === "next" && lightboxIndex < graphics.length - 1) {
        setLightboxIndex(lightboxIndex + 1);
      }
      setCurrentViewIndex(0); // Reset to first view when changing projects
    },
    [lightboxIndex],
  );

  const switchView = useCallback((viewIndex: number) => {
    setCurrentViewIndex(viewIndex);
  }, []);

  const getCurrentImageSrc = useCallback(() => {
    if (lightboxIndex === null) return "";

    const graphic = graphics[lightboxIndex];
    if (graphic.views && graphic.views[currentViewIndex]) {
      return graphic.views[currentViewIndex].src;
    }
    return graphic.src;
  }, [lightboxIndex, currentViewIndex]);

  const getCurrentImageAlt = useCallback(() => {
    if (lightboxIndex === null) return "";

    const graphic = graphics[lightboxIndex];
    if (graphic.views && graphic.views[currentViewIndex]) {
      return graphic.views[currentViewIndex].alt;
    }
    return graphic.alt;
  }, [lightboxIndex, currentViewIndex]);

  const getImageSizing = useCallback(() => {
    if (lightboxIndex === null) return { maxWidth: "92%", maxHeight: "70vh" };

    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return { maxWidth: "100%", maxHeight: "58vh" };
    }

    // Different sizing based on the image
    switch (lightboxIndex) {
      case 0: // Flyer (horizontal/wide)
        return { maxWidth: "46%", maxHeight: "50%" };
      case 1: // TESDA Program (vertical)
        return { maxWidth: "65%", maxHeight: "75%" };
      case 2: // Lakers vs Suns (horizontal/wide)
        return { maxWidth: "80%", maxHeight: "60%" };
      case 3: // Luka poster (horizontal)
        return { maxWidth: "57%", maxHeight: "60%" };
      case 4: // Cade poster (tall/vertical)
        return { maxWidth: "44%", maxHeight: "55%" };
      case 5: // MCPI Jersey (square-ish)
        return { maxWidth: "70%", maxHeight: "80%" };
      default:
        return { maxWidth: "60%", maxHeight: "75%" };
    }
  }, [lightboxIndex]);

  const getImagePositioning = useCallback(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return { paddingTop: "1rem", paddingBottom: "1rem" };
    }

    if (lightboxIndex === null)
      return { paddingTop: "2rem", paddingBottom: "5rem" };

    // Different positioning based on the image
    switch (lightboxIndex) {
      case 0: // Flyer (horizontal)
        return { paddingTop: "2rem", paddingBottom: "7rem" };
      case 1: // TESDA Program (vertical)
        return { paddingTop: "1rem", paddingBottom: "8rem" };
      case 2: // Lakers vs Suns (horizontal/wide)
        return { paddingTop: "2rem", paddingBottom: "6rem" };
      case 3: // Luka poster (horizontal)
        return { paddingTop: "2rem", paddingBottom: "8rem" };
      case 4: // Cade poster (tall/vertical)
        return { paddingTop: "1rem", paddingBottom: "8rem" };
      case 5: // MCPI Jersey (square-ish)
        return { paddingTop: "3rem", paddingBottom: "7rem" };
      default:
        return { paddingTop: "2rem", paddingBottom: "6rem" };
    }
  }, [lightboxIndex]);

  const getProjectTools = useCallback((index: number) => {
    switch (index) {
      case 0: // Flyer
        return "Photoshop";
      case 1: // TESDA Program
        return "Canva";
      case 2: // Lakers vs Suns
        return "Affinity, Photoshop";
      case 3: // Luka poster
        return "Photoshop";
      case 4: // Cade poster
        return "Photoshop";
      case 5: // MCPI Jersey
        return "Photoshop, Illustrator";
      default:
        return "Photoshop";
    }
  }, []);

  const checkScrollability = useCallback(() => {
    if (!carouselRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    const maxScroll = scrollWidth - clientWidth;

    const isAtStart = scrollLeft < 40;
    const isAtEnd = scrollLeft > maxScroll - 40;

    setCanScrollLeft(!isAtStart);
    setCanScrollRight(!isAtEnd);

    const itemWidth = window.innerWidth < 640 ? clientWidth * 0.82 : 424;
    const newIndex = Math.round(scrollLeft / itemWidth);
    setCurrentIndex(Math.min(newIndex, graphics.length - 1));
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    setTimeout(checkScrollability, 100);

    const handleScroll = () => {
      checkScrollability();
    };

    carousel.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", checkScrollability);

    // Keyboard navigation for lightbox
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        switch (e.key) {
          case "Escape":
            closeLightbox();
            break;
          case "ArrowLeft":
            navigateLightbox("prev");
            break;
          case "ArrowRight":
            navigateLightbox("next");
            break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      carousel.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScrollability);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [checkScrollability, lightboxIndex, closeLightbox, navigateLightbox]);

  const scroll = useCallback(
    (direction: "left" | "right") => {
      if (!carouselRef.current) return;

      const carousel = carouselRef.current;
      const scrollAmount =
        window.innerWidth < 640 ? carousel.clientWidth * 0.82 : 424;

      if (direction === "left") {
        carousel.scrollBy({
          left: -scrollAmount,
          behavior: "smooth",
        });
      } else {
        carousel.scrollBy({
          left: scrollAmount,
          behavior: "smooth",
        });
      }

      setTimeout(checkScrollability, 50);
      setTimeout(checkScrollability, 300);
      setTimeout(checkScrollability, 600);
    },
    [checkScrollability],
  );

  return (
    <section className="relative flex justify-center px-0 py-12 sm:px-4 sm:py-16">
      <div className="relative w-full overflow-hidden rounded-[24px] border border-[#181818] bg-transparent p-4 shadow-[0_25px_80px_25px_rgba(0,0,0,0.5)] backdrop-blur-sm opacity-0 transform-gpu translate-y-[40px] animate-carousel-fade-in sm:rounded-[28px] sm:p-8 lg:w-[min(100%,calc(65vw-4rem))] lg:p-12">
        {/* Enhanced background effects */}
        <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/[0.02] via-transparent to-white/[0.01] pointer-events-none" />
        <div className="absolute inset-0 rounded-[28px] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] pointer-events-none" />

        {/* Section title */}
        <div className="relative mb-8 text-center sm:mb-12">
          <h2 className="text-[24px] sm:text-[28px] font-extrabold tracking-[-0.6px] text-white/90 lowercase relative inline-block">
            Graphic Design
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full" />
          </h2>
        </div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 hidden md:block w-[140px] h-full bg-gradient-to-r from-[rgb(14,16,17)] via-[rgba(14,16,17,0.8)] to-transparent z-10 pointer-events-none rounded-l-[28px]" />
        <div className="absolute top-0 right-0 hidden md:block w-[140px] h-full bg-gradient-to-l from-[rgb(14,16,17)] via-[rgba(14,16,17,0.8)] to-transparent z-10 pointer-events-none rounded-r-[28px]" />

        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth justify-start hide-scrollbar py-2 sm:py-4"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            maskImage:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 28px, rgba(0,0,0,1) calc(100% - 28px), rgba(0,0,0,0) 100%)",
          }}
        >
          {/* Spacer */}
          <div className="min-w-4 sm:min-w-[60px] flex-shrink-0" />

          {graphics.map((graphic, index) => (
            <div
              key={index}
              className="group relative w-[78vw] min-w-[78vw] max-w-[400px] h-[440px] sm:h-[580px] sm:min-w-[400px] rounded-[18px] sm:rounded-[20px] flex-shrink-0 border border-white/[0.08] bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-transparent cursor-pointer transition-all duration-500 ease-out opacity-0 animate-graphic-fade-in sm:hover:-translate-y-4 sm:hover:scale-[1.02] sm:hover:shadow-[0_35px_90px_rgba(0,0,0,0.7)] hover:border-white/[0.15]"
              style={{
                scrollSnapAlign: "center",
                animationDelay: `${0.2 + index * 0.15}s`,
              }}
              onClick={() => openLightbox(index)}
            >
              {/* Card background effects */}
              <div className="absolute inset-0 rounded-[inherit] bg-gradient-to-br from-white/[0.02] to-transparent opacity-50" />
              <div className="absolute inset-0 rounded-[inherit] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />

              <div className="relative w-full h-full overflow-hidden rounded-[inherit]">
                <Image
                  src={graphic.src}
                  alt={graphic.alt}
                  fill
                  className="object-cover transition-all duration-500 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 78vw, 400px"
                  priority={index < 2}
                  quality={85}
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/20 flex flex-col justify-end p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-all duration-400">
                  <div className="sm:transform sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-400">
                    <span className="text-[11px] font-semibold tracking-[1.8px] uppercase text-white/80 mb-3 block">
                      {graphic.category}
                    </span>
                    <h3 className="text-[18px] sm:text-[22px] font-extrabold text-white mb-3 sm:mb-4 lowercase leading-tight">
                      {graphic.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {graphic.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-[10px] font-medium uppercase tracking-wider bg-white/10 text-white/70 rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-[12px] text-white/60">
                      <div className="w-1 h-1 bg-white/40 rounded-full" />
                      <span>Tap to view full size</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Spacer */}
          <div className="min-w-4 sm:min-w-[60px] flex-shrink-0" />
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center gap-3 mt-6 sm:mt-8">
          {graphics.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const carousel = carouselRef.current;
                if (carousel) {
                  const scrollAmount =
                    window.innerWidth < 640 ? carousel.clientWidth * 0.82 : 424;
                  carousel.scrollTo({
                    left: index * scrollAmount,
                    behavior: "smooth",
                  });
                }
              }}
              className={`transition-all duration-300 rounded-full cursor-pointer hover:scale-125 ${
                index === currentIndex
                  ? "bg-white/90 w-8 h-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "bg-white/25 w-2 h-2 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Navigation buttons */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full w-16 h-16 cursor-pointer transition-all duration-300 z-20 hidden md:flex items-center justify-center pointer-events-auto scale-100 hover:scale-110 active:scale-95"
            style={{
              background: "transparent",
            }}
          >
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <defs>
                <mask id="leftArrowMask">
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
                mask="url(#leftArrowMask)"
              />
            </svg>
          </button>
        )}

        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full w-16 h-16 cursor-pointer transition-all duration-300 z-20 hidden md:flex items-center justify-center pointer-events-auto scale-100 hover:scale-110 active:scale-95"
            style={{
              background: "transparent",
            }}
          >
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <defs>
                <mask id="rightArrowMask">
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
                mask="url(#rightArrowMask)"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Lightbox / Bottom Sheet Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeLightbox}
          />

          {/* ── MOBILE: Bottom Sheet ── */}
          <div
            className="relative w-full md:hidden bg-[#111] rounded-t-[28px] flex flex-col animate-slide-up"
            style={{ maxHeight: "92dvh" }}
          >
            {/* Header - fixed height */}
            <div className="flex-shrink-0 relative flex items-center justify-between px-5 pt-4 pb-3">
              <div className="w-10 h-1 rounded-full bg-white/20 absolute left-1/2 -translate-x-1/2 top-3" />
              <div className="flex-1" />
              <button
                onClick={closeLightbox}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M12 4L4 12M4 4L12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Everything else scrolls */}
            <div className="flex-1 overflow-y-auto">
              {/* Image */}
              <div className="px-4 pb-4 flex justify-center">
                <div className="relative w-full flex items-center justify-center">
                  <Image
                    src={getCurrentImageSrc()}
                    alt={getCurrentImageAlt()}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto h-auto max-w-full object-contain rounded-[16px]"
                    style={{ maxHeight: "42vh" }}
                    quality={95}
                    priority
                  />
                  {graphics[lightboxIndex].views &&
                    graphics[lightboxIndex].views!.length > 1 && (
                      <div className="absolute top-3 left-3 flex gap-2">
                        {graphics[lightboxIndex].views!.map(
                          (view, viewIndex) => (
                            <button
                              key={viewIndex}
                              onClick={(e) => {
                                e.stopPropagation();
                                switchView(viewIndex);
                              }}
                              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${currentViewIndex === viewIndex ? "bg-white text-black" : "bg-black/50 text-white border border-white/20"}`}
                            >
                              {view.label}
                            </button>
                          ),
                        )}
                      </div>
                    )}
                </div>
              </div>

              {/* Info */}
              <div className="px-6 pt-4 border-t border-white/[0.08]">
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-white/50 mb-1 block">
                  {graphics[lightboxIndex].category}
                </span>
                <h2 className="text-[22px] font-extrabold text-white mb-4 lowercase leading-tight">
                  {graphics[lightboxIndex].title}
                </h2>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm text-white/50">Year</span>
                    <span className="text-sm text-white/90">2025</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm text-white/50">Tools</span>
                    <span className="text-sm text-white/90">
                      {getProjectTools(lightboxIndex)}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {graphics[lightboxIndex].tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-white/10 text-white/60 rounded-full border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pb-10">
                  <button
                    onClick={() => navigateLightbox("prev")}
                    disabled={lightboxIndex === 0}
                    className="flex-1 py-3 rounded-full border border-white/15 text-white/60 text-sm disabled:opacity-30 flex items-center justify-center gap-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M12.5 15L7.5 10L12.5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Prev
                  </button>
                  <button
                    onClick={() => navigateLightbox("next")}
                    disabled={lightboxIndex === graphics.length - 1}
                    className="flex-1 py-3 rounded-full border border-white/15 text-white/60 text-sm disabled:opacity-30 flex items-center justify-center gap-2"
                  >
                    Next
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M7.5 15L12.5 10L7.5 5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* ── DESKTOP: Full lightbox ── */}
          <div className="relative w-full h-full hidden md:flex">
            {/* Main Image Area */}
            <div className="flex-1 relative overflow-hidden">
              <div
                className="absolute inset-0 flex items-start justify-center"
                style={{
                  paddingTop: getImagePositioning().paddingTop,
                  paddingBottom: getImagePositioning().paddingBottom,
                }}
              >
                <div
                  className="relative transition-all duration-500"
                  style={{
                    maxWidth: getImageSizing().maxWidth,
                    maxHeight: getImageSizing().maxHeight,
                  }}
                >
                  <Image
                    src={getCurrentImageSrc()}
                    alt={getCurrentImageAlt()}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-auto h-auto max-w-full max-h-full object-contain transition-all duration-500"
                    style={{
                      width: "auto",
                      height: "auto",
                      maxWidth: "100%",
                      maxHeight: "100%",
                    }}
                    quality={95}
                    priority
                  />
                  {graphics[lightboxIndex].views &&
                    graphics[lightboxIndex].views!.length > 1 && (
                      <div className="absolute top-4 left-4 flex gap-2">
                        {graphics[lightboxIndex].views!.map(
                          (view, viewIndex) => (
                            <button
                              key={viewIndex}
                              onClick={(e) => {
                                e.stopPropagation();
                                switchView(viewIndex);
                              }}
                              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${currentViewIndex === viewIndex ? "bg-white text-black" : "bg-black/50 text-white border border-white/20 hover:bg-white/20"}`}
                            >
                              {view.label}
                            </button>
                          ),
                        )}
                      </div>
                    )}
                </div>
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="w-80 bg-gradient-to-b from-black/80 to-black/90 backdrop-blur-md p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold tracking-[2px] uppercase text-white/60 mb-4 block">
                  {graphics[lightboxIndex].category}
                </span>
                <h2 className="text-3xl font-extrabold text-white mb-6 lowercase leading-tight">
                  {graphics[lightboxIndex].title}
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Year</span>
                    <span className="text-sm text-white/90">2026</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Client</span>
                    <span className="text-sm text-white/90">HCCDDN</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Tools</span>
                    <span className="text-sm text-white/90">
                      {getProjectTools(lightboxIndex)}
                    </span>
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-white/80 mb-3">
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {graphics[lightboxIndex].tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium uppercase tracking-wider bg-white/10 text-white/70 rounded-full backdrop-blur-sm border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="text-sm text-white/60">
                  Project {lightboxIndex + 1} of {graphics.length}
                </div>
                <div className="space-y-2 text-xs text-white/50">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-white/40 rounded-full" />
                    <span>← → Navigate projects</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-white/40 rounded-full" />
                    <span>ESC to close</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Nav Arrows */}
            {lightboxIndex > 0 && (
              <button
                onClick={() => navigateLightbox("prev")}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M12.5 15L7.5 10L12.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
            {lightboxIndex < graphics.length - 1 && (
              <button
                onClick={() => navigateLightbox("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}

            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M12 4L4 12M4 4L12 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
