import { SKILLS } from "../data";
import { Section, Card } from "./ui";

export default function Skills() {
  return (
    <Section id="skills" ghost="SKILLS" title="Skills" sub="Tools I use every day to ship production-ready interfaces.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((s) => (
          <div key={s.name} className={`${Card} transition hover:-translate-y-1 hover:border-[#8bc34a]/60`}>
            <h3 className="mb-2 text-xl font-semibold">{s.name}</h3>
            <p className="text-[15px] font-light text-[#a9bfa4]">{s.note}</p>
            <div className="mt-4 h-1.5 rounded bg-[#12301c]">
              <div className="h-full rounded bg-gradient-to-r from-[#c5e88a] to-[#7cb342]" style={{ width: `${s.pct}%` }} />
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
