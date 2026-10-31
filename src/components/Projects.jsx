import { useState } from "react";
import { PROJECTS, FILTERS } from "../data";
import { Section, Card, Btn } from "./ui";

export default function Projects() {
  const [f, setF] = useState("All");
  const list = PROJECTS.filter((p) => f === "All" || p.cat === f);
  return (
    <Section id="projects" ghost="WORK" title="Projects" sub="Selected projects.">
      <div className="mb-8 flex flex-wrap gap-3">
        {FILTERS.map((x) => (
          <button key={x} onClick={() => setF(x)} className={`rounded-full border px-5 py-2 text-sm transition ${f === x ? "border-[#7cb342] bg-[#7cb342] text-[#0a1a0f]" : "border-green-800/60 text-[#a9bfa4] hover:border-[#8bc34a]"}`}>
            {x}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <div key={p.t} className={`group ${Card}`}>
            <div className="relative mb-5 flex h-44 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-green-900 to-[#0a1a0f] text-xs tracking-widest text-green-700">
              {p.img ? <img src={p.img} alt={p.t} className="h-full w-full object-cover" /> : ""}
              <div className="absolute inset-0 flex items-center justify-center bg-green-950/80 opacity-0 transition group-hover:opacity-100">
                <a href={p.link} target="_blank" rel="noreferrer" className={`${Btn} !px-6 !py-3 text-sm`}>View Project</a>
              </div>
            </div>
            <h3 className="text-xl font-semibold">{p.t}</h3>
            <p className="text-[15px] font-light text-[#a9bfa4]">{p.d}</p>
            <div className="mt-3">
              {p.tags.map((t) => (
                <span key={t} className="mr-2 mt-2 inline-block rounded-full border border-[#b79f2e] px-3 py-1 text-xs text-[#d9c45a]">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
