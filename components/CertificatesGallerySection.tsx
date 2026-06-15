"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const certificates = [
  {
    id: 1,
    title: "Certificate of Completion",
    issuer: "Certificate Archive",
    date: "2025",
    tag: "certificate of completion",
    summary: "Completion credential.",
    accent: "from-lime-300/70 via-emerald-300/30 to-transparent",
    border: "border-lime-200/20",
    image: "/assets/completion.jpg",
  },
  {
    id: 2,
    title: "Certificate of Recognition",
    issuer: "Certificate Archive",
    date: "2025",
    tag: "certificate of recognition",
    summary: "Recognition credential.",
    accent: "from-red-300/70 via-rose-300/30 to-transparent",
    border: "border-red-200/20",
    image: "/assets/CERTIFICATE system.jpg",
  },
  {
    id: 3,
    title: "Advanced Seminar Certification",
    issuer: "Certificate Archive",
    date: "2025",
    tag: "seminar",
    summary: "Seminar credential.",
    accent: "from-sky-400/70 via-cyan-400/30 to-transparent",
    border: "border-sky-300/20",
    image: "/assets/advanceSeminar.png",
  },
  {
    id: 4,
    title: "Advanced Seminar II Certification",
    issuer: "Certificate Archive",
    date: "2025",
    tag: "seminar",
    summary: "Advanced seminar credential.",
    accent: "from-emerald-400/70 via-green-400/30 to-transparent",
    border: "border-emerald-300/20",
    image: "/assets/advanceSeminar2.png",
  },
  {
    id: 5,
    title: "Blockchain Technology Certification",
    issuer: "Certificate Archive",
    date: "2025",
    tag: "technology",
    summary: "Blockchain credential.",
    accent: "from-violet-400/70 via-indigo-400/30 to-transparent",
    border: "border-violet-300/20",
    image: "/assets/blockchain.jpg",
  },
  {
    id: 6,
    title: "Startup Innovation Certification",
    issuer: "Certificate Archive",
    date: "2025",
    tag: "startup",
    summary: "Startup and innovation credential.",
    accent: "from-orange-300/70 via-amber-300/30 to-transparent",
    border: "border-orange-200/20",
    image: "/assets/startup.jpg",
  },
  {
    id: 7,
    title: "Vesta Poster Design Recognition",
    issuer: "Certificate Archive",
    date: "2025",
    tag: "design",
    summary: "Design recognition.",
    accent: "from-fuchsia-300/70 via-pink-300/30 to-transparent",
    border: "border-fuchsia-200/20",
    image: "/assets/vestaPoster.jpg",
  },
  {
    id: 8,
    title: "Vesta Prototype Recognition Award",
    issuer: "Certificate Archive",
    date: "2025",
    tag: "prototype",
    summary: "Prototype recognition.",
    accent: "from-teal-300/70 via-cyan-300/30 to-transparent",
    border: "border-teal-200/20",
    image: "/assets/vestaPrototype.jpg",
  },
  {
    id: 9,
    title: "Introduction to Packet Tracer",
    issuer: "Certificate Archive",
    date: "2024",
    tag: "networking",
    summary: "Networking fundamentals credential.",
    accent: "from-blue-300/70 via-sky-300/30 to-transparent",
    border: "border-blue-200/20",
    image: "/assets/IntroductionToPacketTracer.jpg",
  },
];

export default function CertificatesGallerySection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "unset";
  }, []);

  const navigateLightbox = useCallback(
    (direction: "prev" | "next") => {
      if (lightboxIndex === null) return;
      if (direction === "prev" && lightboxIndex > 0)
        setLightboxIndex(lightboxIndex - 1);
      else if (direction === "next" && lightboxIndex < certificates.length - 1)
        setLightboxIndex(lightboxIndex + 1);
    },
    [lightboxIndex],
  );

  const scrollCarousel = (direction: "prev" | "next") => {
    const container = carouselRef.current;
    if (!container) return;
    const card = container.querySelector<HTMLElement>(".certificate-card");
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width + 16;
    container.scrollBy({
      left: direction === "next" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowLeft") navigateLightbox("prev");
      else if (e.key === "ArrowRight") navigateLightbox("next");
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, closeLightbox, navigateLightbox]);

  return (
    <>
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-[1100px]">
          <div className="mb-8 flex flex-col items-center text-center sm:mb-12">
            <span className="mb-4 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-semibold uppercase tracking-[2px] text-white/45">
              Certificates
            </span>
            <h2 className="text-[24px] sm:text-[28px] font-extrabold tracking-[-0.6px] text-white/90">
              Certificates and Recognitions
            </h2>
            <p className="mt-4 max-w-[620px] text-sm sm:text-[15px] leading-relaxed text-white/55">
              A focused collection of credentials.
            </p>
          </div>

          <div className="mb-5 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => scrollCarousel("prev")}
              aria-label="Previous certificates"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition-colors duration-300 hover:bg-white/[0.08]"
            >
              &lt;
            </button>
            <button
              type="button"
              onClick={() => scrollCarousel("next")}
              aria-label="Next certificates"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/80 transition-colors duration-300 hover:bg-white/[0.08]"
            >
              &gt;
            </button>
          </div>

          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {certificates.map((certificate, index) => (
              <button
                key={certificate.id}
                type="button"
                onClick={() => openLightbox(index)}
                className="certificate-card group relative w-[88%] shrink-0 snap-start overflow-hidden rounded-[20px] border border-white/10 bg-[#111315] p-4 text-left shadow-[0_10px_32px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-white/20 sm:w-[62%] lg:w-[44%]"
              >
                <div className="relative">
                  <div className="relative mb-4 aspect-[1.3] overflow-hidden rounded-[14px] border border-white/10 bg-black/20">
                    <Image
                      src={certificate.image}
                      alt={certificate.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                    />
                  </div>

                  <div className="mb-2 flex items-start justify-between gap-3">
                    <div>
                      <span className="mb-2 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-semibold uppercase tracking-[1.8px] text-white/50">
                        {certificate.tag}
                      </span>
                      <h3 className="text-[20px] font-bold leading-tight text-white/92">
                        {certificate.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-4 flex items-end justify-between border-t border-white/10 pt-4">
                    <p className="text-[12px] font-medium text-white/65">
                      {certificate.issuer}
                    </p>
                    <p className="text-[13px] font-semibold text-white/80">
                      {certificate.date}
                    </p>
                  </div>

                  <div className="mt-3 inline-flex items-center gap-2 text-[12px] font-medium text-white/62">
                    <span>View certificate</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      -&gt;
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeLightbox}
          />

          {/* ── MOBILE: Bottom Sheet ── */}
          <div
            className="relative w-full md:hidden bg-[#111] rounded-t-[28px] flex flex-col animate-slide-up"
            style={{ maxHeight: "92dvh" }}
          >
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

            <div className="flex-1 overflow-y-auto">
              <div className="px-4 pb-4 flex justify-center">
                <div
                  className="relative w-full overflow-hidden rounded-[16px] border border-white/10 bg-black/20"
                  style={{ aspectRatio: "1.3" }}
                >
                  <Image
                    src={certificates[lightboxIndex].image}
                    alt={certificates[lightboxIndex].title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    quality={95}
                    priority
                  />
                </div>
              </div>

              <div className="px-6 pt-4 border-t border-white/[0.08]">
                <span className="text-[10px] font-semibold tracking-[2px] uppercase text-white/50 mb-1 block">
                  {certificates[lightboxIndex].tag}
                </span>
                <h2 className="text-[22px] font-extrabold text-white mb-4 leading-tight">
                  {certificates[lightboxIndex].title}
                </h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm text-white/50">Issuer</span>
                    <span className="text-sm text-white/90">
                      {certificates[lightboxIndex].issuer}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm text-white/50">Year</span>
                    <span className="text-sm text-white/90">
                      {certificates[lightboxIndex].date}
                    </span>
                  </div>
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
                    disabled={lightboxIndex === certificates.length - 1}
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
            {/* Main image area */}
            <div className="flex-1 relative overflow-hidden flex items-center justify-center p-12">
              <div className="relative w-full h-full overflow-hidden rounded-[22px] border border-white/10 bg-black/20">
                <Image
                  src={certificates[lightboxIndex].image}
                  alt={certificates[lightboxIndex].title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  quality={95}
                  priority
                />
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="w-80 bg-gradient-to-b from-black/80 to-black/90 backdrop-blur-md p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold tracking-[2px] uppercase text-white/60 mb-4 block">
                  {certificates[lightboxIndex].tag}
                </span>
                <h2 className="text-3xl font-extrabold text-white mb-6 leading-tight">
                  {certificates[lightboxIndex].title}
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Issuer</span>
                    <span className="text-sm text-white/90">
                      {certificates[lightboxIndex].issuer}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-sm text-white/60">Year</span>
                    <span className="text-sm text-white/90">
                      {certificates[lightboxIndex].date}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-sm text-white/60">
                  {lightboxIndex + 1} of {certificates.length}
                </div>
                <div className="space-y-2 text-xs text-white/50">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-white/40 rounded-full" />
                    <span>← → Navigate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-white/40 rounded-full" />
                    <span>ESC to close</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop nav arrows */}
            {lightboxIndex > 0 && (
              <button
                onClick={() => navigateLightbox("prev")}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-white/15 text-white flex items-center justify-center hover:bg-black/70 transition-colors z-10"
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
            {lightboxIndex < certificates.length - 1 && (
              <button
                onClick={() => navigateLightbox("next")}
                className="absolute right-[336px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 border border-white/15 text-white flex items-center justify-center hover:bg-black/70 transition-colors z-10"
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

            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute right-[336px] top-6 w-10 h-10 rounded-full bg-black/50 border border-white/15 text-white/75 flex items-center justify-center hover:bg-black/70 transition-colors z-10"
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
        </div>
      )}
    </>
  );
}
