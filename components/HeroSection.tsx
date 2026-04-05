export default function HeroSection() {
  return (
    <section className="flex min-h-[38vh] items-end pb-10 pt-6 sm:min-h-[45vh] sm:pb-8">
      <div className="max-w-3xl px-2 text-left sm:px-6 md:ml-6 lg:ml-12">
        <div className="mb-4 sm:mb-6">
          <h1 className="flex items-center gap-2 text-[24px] font-extrabold leading-[1.1] tracking-[-0.8px] opacity-0 animate-fade-in sm:gap-3 sm:text-[28px] sm:tracking-[-1px] md:text-[36px] lg:text-[42px]">
            I'm carr
            <span className="inline-block animate-wave text-[20px] md:text-[26px]">
              ✌️
            </span>
          </h1>
        </div>

        <p className="max-w-[15ch] text-[24px] font-extrabold leading-[1.2] tracking-[-0.8px] text-white/80 opacity-0 animate-fade-in-delay sm:max-w-none sm:text-[28px] sm:leading-[1.3] sm:tracking-[-1px] md:text-[36px] lg:text-[42px]">
          Designing digital products through thoughtful prototyping and
          user-centered experiences.
        </p>
      </div>
    </section>
  );
}
