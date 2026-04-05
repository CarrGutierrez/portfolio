"use client";

import { useEffect, useRef, useState } from "react";

const certificates = [
  {
    id: 1,
    title: "google ux foundations",
    issuer: "Google",
    date: "2025",
    tag: "ux design",
    summary: "Research, wireframing, usability, and design thinking.",
    accent: "from-sky-400/70 via-cyan-400/30 to-transparent",
    border: "border-sky-300/20",
  },
  {
    id: 2,
    title: "frontend development workshop",
    issuer: "Developer Community",
    date: "2025",
    tag: "frontend",
    summary: "Responsive UI building, HTML, CSS, JavaScript, and layout systems.",
    accent: "from-emerald-400/70 via-green-400/30 to-transparent",
    border: "border-emerald-300/20",
  },
  {
    id: 3,
    title: "ui design essentials",
    issuer: "Design Academy",
    date: "2024",
    tag: "ui design",
    summary: "Typography, spacing, visual hierarchy, and interface polish.",
    accent: "from-orange-300/70 via-amber-300/30 to-transparent",
    border: "border-orange-200/20",
  },
  {
    id: 4,
    title: "product prototyping bootcamp",
    issuer: "Creative Lab",
    date: "2024",
    tag: "prototyping",
    summary: "Flows, interaction design, clickable prototypes, and presentation.",
    accent: "from-fuchsia-300/70 via-pink-300/30 to-transparent",
    border: "border-fuchsia-200/20",
  },
];

export default function CertificatesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCertificate, setActiveCertificate] = useState<
    (typeof certificates)[number] | null
  >(null);

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
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" }
    );

    const cards = sectionRef.current?.querySelectorAll(".certificate-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

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
      <section ref={sectionRef} className="py-12 sm:py-16">
        <div className="mx-auto max-w-[980px]">
          <div className="mb-8 flex flex-col items-center text-center sm:mb-12">
            <span className="mb-4 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[10px] font-semibold uppercase tracking-[2px] text-white/45">
              Certificates
            </span>
            <h2 className="text-[24px] sm:text-[28px] font-extrabold tracking-[-0.6px] text-white/90 lowercase">
              proofs of learning
            </h2>
            <p className="mt-4 max-w-[620px] text-sm sm:text-[15px] leading-relaxed text-white/55">
              A curated space for the certificates that support my work in UI,
              UX, frontend, and product thinking. These are placeholders for
              now so we can lock the look first.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {certificates.map((certificate, index) => (
              <button
                key={certificate.id}
                type="button"
                onClick={() => setActiveCertificate(certificate)}
                className={`certificate-card group relative overflow-hidden rounded-[24px] border bg-[rgb(18,19,19)] p-5 text-left opacity-0 translate-y-12 shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition-all duration-700 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)] ${certificate.border}`}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${certificate.accent} opacity-70`}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.14),transparent_30%)]" />

                <div className="relative">
                  <div className="mb-6 flex items-start justify-between gap-3">
                    <div>
                      <span className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[10px] font-semibold uppercase tracking-[1.8px] text-white/55">
                        {certificate.tag}
                      </span>
                      <h3 className="text-[20px] font-extrabold lowercase leading-tight text-white/92">
                        {certificate.title}
                      </h3>
                    </div>

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[16px] border border-white/10 bg-black/20 text-sm font-semibold uppercase tracking-[2px] text-white/65">
                      cert
                    </div>
                  </div>

                  <p className="mb-8 max-w-[40ch] text-sm leading-relaxed text-white/62">
                    {certificate.summary}
                  </p>

                  <div className="flex items-end justify-between gap-4 border-t border-white/10 pt-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[1.8px] text-white/35">
                        issuer
                      </p>
                      <p className="mt-1 text-[14px] text-white/82">
                        {certificate.issuer}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[10px] font-semibold uppercase tracking-[1.8px] text-white/35">
                        earned
                      </p>
                      <p className="mt-1 text-[14px] text-white/82">
                        {certificate.date}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 inline-flex items-center gap-2 text-[12px] font-medium text-white/70">
                    <span>Preview certificate</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
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

          <div className="relative z-10 w-full max-w-[920px] overflow-hidden rounded-[28px] border border-white/10 bg-[#111313] shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
            <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr]">
              <div className="relative min-h-[340px] border-b border-white/10 bg-[linear-gradient(145deg,rgba(255,255,255,0.06),rgba(255,255,255,0.01))] p-5 sm:p-8 md:min-h-[560px] md:border-b-0 md:border-r">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_35%)]" />
                <div className="relative flex h-full flex-col rounded-[22px] border border-white/10 bg-[#f3efe6] p-5 text-[#1f1c18] shadow-[inset_0_1px_0_rgba(255,255,255,0.5)] sm:p-8">
                  <div className="flex items-center justify-between border-b border-black/10 pb-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[2px] text-black/45">
                        sample certificate
                      </p>
                      <h3 className="mt-2 text-[28px] font-black lowercase leading-none">
                        {activeCertificate.title}
                      </h3>
                    </div>
                    <div className="rounded-full border border-black/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[1.8px] text-black/55">
                      {activeCertificate.tag}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col items-center justify-center text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-[3px] text-black/35">
                      awarded to
                    </p>
                    <p className="mt-4 text-[34px] sm:text-[42px] font-black tracking-[-1.4px]">
                      Carr Gutierrez
                    </p>
                    <p className="mt-5 max-w-[28ch] text-[14px] sm:text-[15px] leading-relaxed text-black/60">
                      This area is ready for your actual certificate image or PDF
                      preview once you send the final files.
                    </p>
                  </div>

                  <div className="mt-6 flex items-end justify-between gap-4 border-t border-black/10 pt-4 text-[12px] text-black/55">
                    <div>
                      <p className="font-semibold uppercase tracking-[1.8px]">
                        Issuer
                      </p>
                      <p className="mt-1 text-[14px] text-black/75">
                        {activeCertificate.issuer}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold uppercase tracking-[1.8px]">
                        Year
                      </p>
                      <p className="mt-1 text-[14px] text-black/75">
                        {activeCertificate.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between p-5 sm:p-8">
                <div>
                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] font-semibold uppercase tracking-[1.8px] text-white/50">
                    Suggested Layout
                  </span>

                  <h3 className="mt-4 text-[24px] font-extrabold lowercase text-white/92">
                    {activeCertificate.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-white/60">
                    This preview lets you judge the visual direction before we
                    attach your real certificate files. Once you send them, I
                    can turn these into actual image or PDF previews.
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
                        why this works
                      </p>
                      <p className="mt-2 text-[15px] leading-relaxed text-white/65">
                        Clean proof section, readable metadata, and a preview
                        flow that feels consistent with your graphics work.
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
                    Looks good
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveCertificate(null)}
                    className="rounded-[16px] border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/78 transition-colors duration-300 hover:bg-white/[0.08]"
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
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
