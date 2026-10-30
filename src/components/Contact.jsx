import { useState } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "../data";
import { Section, Btn, GradText } from "./ui";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const input = "mb-4 w-full rounded-xl border border-green-800/60 bg-[#07130b] p-4 text-white outline-none transition placeholder:text-white/40 focus:border-[#8bc34a] focus:ring-2 focus:ring-[#8bc34a]/40";
  const submit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=Project%20Inquiry&body=${body}`;
  };
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  return (
    <Section id="contact" ghost="CONTACT">
      <div className="grid gap-14 md:grid-cols-2">
        <div>
          <h2 className={`mb-3 text-5xl font-extrabold ${GradText}`}>Let's Work Together</h2>
          <p className="mb-8 max-w-md font-light leading-relaxed text-[#a9bfa4]">Have a project in mind? Send a message and I'll reply within a day.</p>
          <ul className="space-y-4 text-[#c9d8c4]">
            <li className="flex items-center gap-3"><Mail size={18} className="text-[#8bc34a]" />{CONTACT.email}</li>
            <li className="flex items-center gap-3"><Phone size={18} className="text-[#8bc34a]" />{CONTACT.phone}</li>
            <li className="flex items-center gap-3"><MessageCircle size={18} className="text-[#8bc34a]" />
              <a href={`https://wa.me/${CONTACT.whatsapp}?text=Hi%20Haroon%2C%20I%20want%20to%20discuss%20a%20project`} target="_blank" rel="noreferrer" className="hover:text-[#8bc34a]">WhatsApp</a>
            </li>
          </ul>
        </div>
        <form onSubmit={submit}>
          <input required className={input} placeholder="Name" aria-label="Name" value={form.name} onChange={set("name")} />
          <input required type="email" className={input} placeholder="Email" aria-label="Email" value={form.email} onChange={set("email")} />
          <textarea required rows={5} className={input} placeholder="Message" aria-label="Message" value={form.message} onChange={set("message")} />
          <button type="submit" className={Btn}>Send Message</button>
        </form>
      </div>
    </Section>
  );
}
