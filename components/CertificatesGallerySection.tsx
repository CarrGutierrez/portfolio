"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
  const [activeCertificate, setActiveCertificate] = useState<
    (typeof certificates)[number] | null
  >(null);

  const scrollCarousel = (direction: "prev" | "next") => {
    const container = carouselRef.current;
    if (!container) return;

    const card = container.querySelector<HTMLElement>(".certificate-card");
    if (!card) return;

    const cardWidth = card.getBoundingClientRect().width + 16;
    const offset = direction === "next" ? cardWidth : -cardWidth;

    container.scrollBy({ left: offset, behavior: "smooth" });
  };

  useEffect(() => {
    if (!activeCertificate) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveCertificate(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeCertificate]);

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
            {certificates.map((certificate) => (
              <button
                key={certificate.id}
                type="button"
                onClick={() => setActiveCertificate(certificate)}
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
                    <p className="text-[12px] font-medium text-white/65">{certificate.issuer}</p>
                    <p className="text-[13px] font-semibold text-white/80">{certificate.date}</p>
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

      {activeCertificate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <button
            type="button"
            aria-label="Close certificate preview"
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={() => setActiveCertificate(null)}
          />

          <div className="relative z-10 w-full max-w-[1120px] overflow-hidden rounded-[28px] border border-white/10 bg-[#111313] shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr]">
              <div className="relative min-h-[360px] border-b border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] p-4 sm:p-6 md:min-h-[680px] md:border-b-0 md:border-r">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%)]" />
                <div className="relative h-full overflow-hidden rounded-[22px] border border-white/10 bg-black/20">
                  <Image
                    src={activeCertificate.image}
                    alt={activeCertificate.title}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-between p-5 sm:p-8">
                <div>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] font-semibold uppercase tracking-[1.8px] text-white/50">
                    Certificate Preview
                  </span>

                  <h3 className="mt-4 text-[24px] font-extrabold text-white/92">
                    {activeCertificate.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    Certificate details and image preview.
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="rounded-[18px] border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[1.8px] text-white/38">
                        issuer
                      </p>
                      <p className="mt-2 text-[15px] text-white/82">
                        {activeCertificate.issuer}
                      </p>
                    </div>

                    <div className="rounded-[18px] border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[1.8px] text-white/38">
                        category
                      </p>
                      <p className="mt-2 text-[15px] text-white/82">
                        {activeCertificate.tag}
                      </p>
                    </div>

                    <div className="rounded-[18px] border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-[1.8px] text-white/38">
                        earned
                      </p>
                      <p className="mt-2 text-[15px] text-white/82">
                        {activeCertificate.date}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setActiveCertificate(null)}
                    className="rounded-[16px] border border-white/10 bg-white px-4 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    Close preview
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              aria-label="Close"
              onClick={() => setActiveCertificate(null)}
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/20 text-white/75 transition-colors duration-300 hover:bg-black/35"
            >
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
}
