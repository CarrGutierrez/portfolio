export default function Footer() {
  return (
    <footer className="py-16 sm:py-20 bg-[#0e1011] mt-12 sm:mt-16">
      <div className="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
        <div className="inline-block px-4 py-2 bg-white text-black text-sm font-medium rounded-lg mb-6">
          Contact
        </div>

        <h2 className="text-[28px] sm:text-[32px] md:text-[40px] font-extrabold tracking-[-0.6px] mb-5 sm:mb-6">
          Get in Touch
        </h2>

        <p className="text-white/60 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed max-w-[600px] mx-auto">
          Want to chat? Just shoot me a{" "}
          <a
            href="#"
            className="text-blue-400 hover:text-blue-300 transition-colors underline"
          >
            DM with a direct question on Instagram
          </a>{" "}
          or{" "}
          <a
            href="mailto:carrgutierrez24@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition-colors underline"
          >
            drop me an email
          </a>
          , and I'll reply as soon as I can.
        </p>
      </div>
    </footer>
  );
}
