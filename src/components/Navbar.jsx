import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a1a0f]/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-serif text-3xl font-bold text-[#c9b037]">HS</a>
        <nav className="hidden gap-8 md:flex">
          {NAV.map((n, i) => (
            <a key={n} href={`#${n.toLowerCase()}`} className={`text-lg font-light transition hover:text-[#8bc34a] ${i === 0 ? "font-semibold text-[#8bc34a]" : "text-white"}`}>
              {n}
            </a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-white/10 bg-[#0a1a0f] px-6 py-5 md:hidden">
          {NAV.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} onClick={() => setOpen(false)}>{n}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
