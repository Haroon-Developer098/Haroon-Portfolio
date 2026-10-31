import { Instagram, Linkedin, Github } from "lucide-react";
import hms from "./assets/hms.jpg"

// Yahan apna content badlo
export const NAV = ["Home", "About", "Skills", "Projects", "Contact"];

export const STATS = [
  { n: "10+", l: "Projects" },
  { n: "2+", l: "Years" },
  { n: "8+", l: "Clients" },
];

export const SKILLS = [
  { name: "React", note: "Vite and Next.js apps", pct: 92 },
  { name: "Tailwind CSS", note: "Responsive, pixel-accurate UI", pct: 95 },
  { name: "JavaScript", note: "Modern ES6+ and APIs", pct: 88 },
  { name: "Material UI", note: "Component-driven design", pct: 80 },
  { name: "Figma to Code", note: "Design handoff to build", pct: 90 },
  { name: "Git and REST", note: "Version control, integrations", pct: 82 },
];

export const SERVICES = [
  { t: "Responsive Websites", d: "Multi-page business and portfolio sites that look right on every screen." },
  { t: "Landing Pages", d: "Focused, fast pages built to convert visitors into customers." },
  { t: "React Web Apps", d: "Dashboards, portals and e-commerce with clean, maintainable code." },
];

export const PROJECTS = [
  { t: "Hospital Management System", d: "Portal, pharmacy and billing.", tags: ["React", "Tailwind"], cat: "React", img: hms, link: "https://hms-pk.com/" },
  { t: "Watch and Wallet Store", d: "Cart, wishlist, WhatsApp ordering.", tags: ["React", "E-commerce"], cat: "E-commerce", img: "", link: "#" },
  { t: "Onboarding Flow", d: "Facility picker built from Figma.", tags: ["Next.js", "Tailwind"], cat: "Next.js", img: "", link: "#" },
];
export const FILTERS = ["All", "React", "Next.js", "E-commerce"];

export const STEPS = [
  ["Discuss", "Goals, scope, timeline."],
  ["Design", "Layout and look approved."],
  ["Develop", "Clean, responsive code."],
  ["Deliver", "Launch and support."],
];

export const CONTACT = { email: "shahidharoon227@gmail.com", phone: "+92 320 4116693", whatsapp: "923204116693" };
export const SOCIALS = [
  { Icon: Github, href: "https://github.com/Haroon-Developer098", label: "GitHub" },
  { Icon: Instagram, href: "https://www.instagram.com/irx_aesthetic/", label: "Instagram" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" },
];
