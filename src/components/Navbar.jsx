
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import gsap from "gsap";

import { NAV } from "../data";
import logo from "../assets/logo.png";
import GooeyNav from "./GooeyNav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const logoRef = useRef(null);

  const items = NAV.map((item) => ({
    label: item,
    href: `#${item.toLowerCase()}`,
  }));

  useEffect(() => {
    const animation = gsap.from(logoRef.current, {
      y: -60,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    return () => animation.kill();
  }, []);
    const handleMobileNav = (e, href) => {
    e.preventDefault();
    setOpen(false);

    const id = href.replace("#", "");

    // menu band hone ke baad scroll karo
    setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;

      const headerOffset = 80; // header h-20 = 80px
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({ top, behavior: "smooth" });
      window.history.replaceState(null, "", href);
    }, 50);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0a1a0f]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">

        {/* Logo */}
        <a href="#home" className="shrink-0">
          <img
            ref={logoRef}
            src={logo}
            alt="Haroon Logo"
          />
        </a>

        {/* Desktop Gooey Navigation */}
        <div className="hidden md:block">
          <GooeyNav
            items={items}
            initialActiveIndex={0}
            animationTime={600}
            particleCount={15}
            timeVariance={300}
            spread={56}
            gooeyness={0.5}
            wobble={0.5}
            theme="dark"
            color="#8bc34a"
            activeTextColor="#0a1a0f"
            size="md"
            frame={false}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
            {open && (
        <nav className="flex flex-col gap-5 border-t border-white/10 bg-[#0a1a0f] px-6  md:hidden">
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleMobileNav(e, item.href)}
              className="text-white transition hover:text-[#8bc34a]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
