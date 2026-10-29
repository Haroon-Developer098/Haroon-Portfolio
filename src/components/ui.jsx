import { useEffect, useRef, useState } from "react";

export function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => e.isIntersecting && setShow(true), { threshold: 0.15 });
    ref.current && o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

export const GradText = "bg-gradient-to-r from-white to-[#c5e88a] bg-clip-text text-transparent";
export const Btn = "inline-block rounded-full bg-gradient-to-b from-[#9ccc3c] to-[#6fa32c] px-9 py-4 font-semibold text-[#0a1a0f] transition hover:brightness-110 hover:shadow-[0_0_24px_rgba(139,195,74,.45)]";
export const Card = "rounded-2xl border border-green-800/40 bg-green-950/40 p-7";

export function Section({ id, ghost, title, sub, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-6 py-24">
      <span className="pointer-events-none absolute left-4 top-8 select-none text-[clamp(70px,14vw,150px)] font-extrabold tracking-tighter text-white/[0.04]">
        {ghost}
      </span>
      <Reveal className="relative">
        {title && <h2 className={`mb-3 text-4xl font-extrabold md:text-5xl ${GradText}`}>{title}</h2>}
        {sub && <p className="mb-12 max-w-xl font-light leading-relaxed text-[#a9bfa4]">{sub}</p>}
        {children}
      </Reveal>
    </section>
  );
}
