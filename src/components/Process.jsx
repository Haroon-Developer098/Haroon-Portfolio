import { STEPS } from "../data";
import { Section } from "./ui";

export default function Process() {
  return (
    <Section id="process" ghost="PROCESS" title="How I Work" sub="A simple four-step flow, so you always know what's next.">
      <div className="relative grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
        <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-gradient-to-r from-transparent via-[#7cb342] to-transparent lg:block" />
        {STEPS.map(([t, d], i) => (
          <div key={t} className="relative">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#b79f2e] bg-[#0a1a0f] font-extrabold text-[#d9c45a]">{i + 1}</div>
            <h3 className="mb-1 text-lg font-semibold">{t}</h3>
            <p className="text-sm font-light text-[#a9bfa4]">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
