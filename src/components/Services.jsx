import { ArrowRight } from "lucide-react";
import { SERVICES } from "../data";
import { Section, Card } from "./ui";

export default function Services() {
  return (
    <Section id="services" ghost="SERVICES" title="Services" sub="Pick a package, or tell me what you need.">
      <div className="grid gap-5 md:grid-cols-3">
        {SERVICES.map((s) => (
          <div key={s.t} className={`${Card} transition hover:-translate-y-1 hover:border-[#8bc34a]/60`}>
            <h3 className="mb-2 text-xl font-semibold">{s.t}</h3>
            <p className="font-light leading-relaxed text-[#a9bfa4]">{s.d}</p>
            <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-[#8bc34a] hover:gap-3 transition-all">
              Get a quote <ArrowRight size={16} />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}
