import { STATS } from "../data";
import { Section, Card } from "./ui";
import haroon from "../assets/haroon3.png"

export default function About() {
  return (
    <Section id="about" ghost="ABOUT" title="About Me" sub="Solo frontend developer who designs and builds clean, fast, responsive interfaces from idea to launch.">
      <div className="flex flex-wrap items-center gap-12">
        <div className="relative h-72 w-full max-w-[280px] shrink-0 overflow-hidden rounded-3xl border border-[#b79f2e]/50 bg-gradient-to-br from-green-900 to-[#050d08] md:h-80 md:max-w-[300px]">
  <img
    src={haroon}
    alt="Haroon"
    className="h-full w-full object-cover object-[50%_15%] grayscale"
  />
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050d08]/70 via-transparent to-transparent" />
</div>
        <div className="min-w-[300px] flex-1">
          <p className="mb-8 font-light leading-8 text-[#c9d8c4]">
            I'm Haroon Shahid, a passionate Frontend Developer dedicated to creating modern, responsive, and user-friendly web applications. I enjoy turning creative ideas into clean, high-performance digital experiences using React, Tailwind CSS, and JavaScript.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {STATS.map((s) => (
              <div key={s.l} className={`${Card} !p-5`}>
                <div className="bg-gradient-to-r from-[#c5e88a] to-[#7cb342] bg-clip-text text-4xl font-extrabold text-transparent">{s.n}</div>
                <p className="text-sm text-[#a9bfa4]">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
