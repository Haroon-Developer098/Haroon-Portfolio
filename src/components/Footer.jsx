import { NAV, SOCIALS } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-[#8bc34a]/25">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-6 py-8">
        <span className="font-serif text-3xl font-bold text-[#c9b037]">HS</span>
        <nav className="flex gap-6 text-[#a9bfa4]">
          {NAV.slice(1).map((n) => <a key={n} href={`#${n.toLowerCase()}`} className="hover:text-[#8bc34a]">{n}</a>)}
        </nav>
        <div className="flex gap-3">
          {SOCIALS.map(({ Icon, href, label }) => (
            <a key={label} href={href} aria-label={label} className="flex h-9 w-9 items-center justify-center rounded-full border border-green-700/60 hover:border-[#8bc34a]"><Icon size={16} /></a>
          ))}
        </div>
        <p className="w-full text-center text-sm text-[#6f866a] md:w-auto">© {new Date().getFullYear()} Haroon. All rights reserved.</p>
      </div>
    </footer>
  );
}
