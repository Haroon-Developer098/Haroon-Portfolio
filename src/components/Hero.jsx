import { SOCIALS } from "../data";
import { GradText, Btn } from "./ui";
import haroon from "../assets/haroon3.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-[#0d2a14] via-[#0a1a0f] to-[#050d08] pt-20"
    >
      {/* faded oversized text */}
      <span className="pointer-events-none absolute bottom-0 right-0 hidden select-none text-right text-[13vw] font-extrabold leading-[0.9] text-white/[0.04] lg:block">
        WEB<br />DEVELOP<br />MENT
      </span>

      {/* background reflection: bara, halka, photo ke peeche */}
      <img
        src={haroon}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[14%] top-[8%] hidden h-[80vh] w-auto select-none object-contain opacity-[0.09] grayscale md:block [mask-image:linear-gradient(to_bottom,black_40%,transparent_95%)]"
      />

      {/* main photo: left edge se chipki, bottom se cut, design ke size mein */}
      <img
        src={haroon}
        alt="Haroon"
        className="relative z-10 mx-auto h-[60vh] w-auto object-contain object-bottom grayscale md:absolute md:bottom-0 md:left-0 md:mx-0 md:h-[78vh] md:object-left-bottom"
      />

      {/* text: design ki tarah right side par */}
      <div className="relative z-20 w-full px-6 md:ml-[45.8%] md:pr-16">
        <p className="text-2xl font-extrabold uppercase tracking-wide text-[#9ccc3c]">Hi, I'm Haroon</p>
        <h1 className={`text-5xl font-extrabold leading-tight md:text-7xl ${GradText} to-[#a5d65a]`}>
          Web Developer
        </h1>
        <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-white/85">
          I build fast, responsive, and modern web applications using React, Tailwind CSS, and JavaScript. I transform ideas into clean and engaging digital experiences.
        </p>
        <a href="#contact" className={`${Btn} mt-9 uppercase`}>Contact Us</a>
        <div className="mt-12 flex gap-4">
          {SOCIALS.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-green-700/60 bg-green-950/60 transition hover:border-[#8bc34a] hover:shadow-[0_0_18px_rgba(139,195,74,.5)]"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}