import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SOCIALS } from "../data";
import { Button3D, GradText } from "./ui";
import haroon from "../assets/haroon3.png";

export default function Hero() {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Tablet / desktop: image left se, text right se
    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline();
      tl.from(imageRef.current, {
        x: -300,
        opacity: 0,
        duration: 1.6,
        ease: "power3.out",
        clearProps: "transform,opacity",
      }).from(
        textRef.current,
        {
          x: 300,
          opacity: 0,
          duration: 1.4,
          ease: "power3.out",
          clearProps: "transform,opacity",
        },
        "-=1"
      );
      return () => tl.kill();
    });

    // Mobile: image upar se, text neeche se (no horizontal overflow)
    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline();
      tl.from(imageRef.current, {
        y: -60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        clearProps: "transform,opacity",
      }).from(
        textRef.current,
        {
          y: 60,
          opacity: 0,
          duration: 1.1,
          ease: "power3.out",
          clearProps: "transform,opacity",
        },
        "-=0.7"
      );
      return () => tl.kill();
    });

    return () => mm.revert();
  }, []);

  const fadeMask =
    "[mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)]";

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center justify-center gap-6 overflow-hidden bg-gradient-to-br from-[#0d2a14] via-[#0a1a0f] to-[#050d08] px-0 pb-12 pt-24 md:flex-row md:justify-start md:gap-0 md:pb-0 md:pt-20"
    >
      {/* Background text */}
      <span className="pointer-events-none absolute bottom-0 right-0 hidden select-none text-right text-[13vw] font-extrabold leading-[0.9] text-white/[0.04] lg:block">
        WEB<br />DEVELOP<br />MENT
      </span>

      {/* Background reflection */}
      <img
        src={haroon}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[10%] top-[8%] hidden h-[75vh] w-auto max-w-[46%] select-none object-contain opacity-[0.09] grayscale md:block [mask-image:linear-gradient(to_bottom,black_40%,transparent_95%)]"
      />

      {/* Main image */}
      <img
        ref={imageRef}
        src={haroon}
        alt="Haroon"
        className={`relative z-10 mx-auto h-[42vh] max-h-[420px] w-auto max-w-[85%] shrink-0 object-contain object-bottom grayscale sm:h-[48vh] sm:max-h-[480px] md:absolute md:bottom-0 md:left-0 md:mx-0 md:h-auto md:max-h-[80vh] md:w-[46%] md:max-w-none md:object-left-bottom ${fadeMask}`}
      />

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-20 w-full px-6 text-center sm:px-10 md:ml-[46%] md:w-auto md:flex-1 md:px-0 md:pl-6 md:pr-8 md:text-left lg:pr-16"
      >
        <p className="text-lg font-extrabold uppercase tracking-wide text-[#9ccc3c] sm:text-xl md:text-2xl">
          Hi, I'm Haroon
        </p>

        <h1
          className={`text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl lg:text-7xl ${GradText} to-[#a5d65a]`}
        >
          Web Developer
        </h1>

        <p className="mx-auto mt-4 max-w-lg text-base font-light leading-relaxed text-white/85 sm:mt-6 sm:text-lg md:mx-0">
          I build fast, responsive, and modern web applications using React,
          Tailwind CSS, and JavaScript. I transform ideas into clean and
          engaging digital experiences.
        </p>

        <Button3D className="mt-7 cursor-pointer md:mt-9" href="#contact">
          Contact Us
        </Button3D>

        <div className="mt-8 flex justify-center gap-4 md:mt-12 md:justify-start">
          {SOCIALS.map(({ Icon, href, label }) => (
            <a
              target="_blank"
              rel="noopener noreferrer"
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