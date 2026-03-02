"use client";

import { useState, useRef, useEffect } from "react";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
  };

  const socials = [
    { label: "GitHub", href: "https://github.com/isaacciliaattard", icon: "⌥" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/isaacciliaattard",
      icon: "⌂",
    },
    { label: "Email", href: "mailto:hello@isaacciliaattard.com", icon: "⊠" },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 blur-[80px] rounded-full"
        style={{ background: "var(--irix-teal)" }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs text-[var(--irix-magenta)] tracking-widest uppercase">
            04 // Contact
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-[var(--irix-border)] to-transparent" />
        </div>

        <div ref={ref} className="grid lg:grid-cols-5 gap-12">
          {/* Left */}
          <div
            className={`lg:col-span-2 space-y-8 transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-[var(--irix-white)] leading-tight mb-4">
                Let's Build
                <br />
                <span className="text-[var(--irix-teal)] glow-teal">
                  Together
                </span>
              </h2>
              <p className="text-[var(--irix-muted)] leading-relaxed">
                Whether you have a project in mind, a question, or just want to
                say hello — my inbox is always open.
              </p>
            </div>

            <div className="space-y-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <span className="w-10 h-10 flex items-center justify-center border border-[var(--irix-border)] text-[var(--irix-teal)] group-hover:border-[var(--irix-teal)] group-hover:bg-[var(--irix-teal)] group-hover:text-[var(--irix-bg)] transition-all duration-200 font-mono">
                    {s.icon}
                  </span>
                  <span className="font-mono text-xs tracking-widest text-[var(--irix-muted)] group-hover:text-[var(--irix-teal)] transition-colors uppercase animated-underline">
                    {s.label}
                  </span>
                </a>
              ))}
            </div>

            <div className="irix-panel p-4 rounded-sm">
              <div className="font-mono text-xs text-[var(--irix-muted)] space-y-1">
                <div>
                  <span className="text-[var(--irix-teal)]">location</span> →
                  Malta, EU
                </div>
                <div>
                  <span className="text-[var(--irix-teal)]">timezone</span> →
                  CET (UTC+1)
                </div>
                <div>
                  <span className="text-[var(--irix-teal)]">response</span> →
                  within 24h
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            {sent ? (
              <div className="irix-panel rounded-sm p-10 text-center space-y-4 h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 border border-[var(--irix-teal)] rounded-sm flex items-center justify-center mx-auto">
                  <span className="text-3xl text-[var(--irix-teal)] glow-teal">
                    ✓
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl text-[var(--irix-white)]">
                  Message Sent
                </h3>
                <p className="text-[var(--irix-muted)] font-mono text-sm">
                  I'll get back to you shortly.
                </p>
              </div>
            ) : (
              <div className="irix-panel rounded-sm overflow-hidden">
                {/* Panel header */}
                <div className="px-6 py-4 border-b border-[var(--irix-border)] flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--irix-red)] opacity-80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--irix-yellow)] opacity-80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[var(--irix-green)] opacity-80" />
                  </div>
                  <span className="font-mono text-xs text-[var(--irix-muted)] ml-2">
                    new_message.sh
                  </span>
                </div>

                <div className="p-6 space-y-5">
                  {[
                    {
                      key: "name",
                      label: "Your Name",
                      type: "text",
                      placeholder: "Jane Doe",
                    },
                    {
                      key: "email",
                      label: "Email Address",
                      type: "email",
                      placeholder: "jane@example.com",
                    },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="block font-mono text-xs tracking-widest text-[var(--irix-teal)] mb-2 uppercase">
                        <span className="text-[var(--irix-muted)] mr-1">$</span>
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.key as keyof typeof form]}
                        onChange={(e) =>
                          setForm((f) => ({
                            ...f,
                            [field.key]: e.target.value,
                          }))
                        }
                        className="w-full bg-[var(--irix-bg)] border border-[var(--irix-border)] text-[var(--irix-text)] font-mono text-sm px-4 py-3 focus:outline-none focus:border-[var(--irix-teal)] transition-colors placeholder:text-[var(--irix-border)]"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block font-mono text-xs tracking-widest text-[var(--irix-teal)] mb-2 uppercase">
                      <span className="text-[var(--irix-muted)] mr-1">$</span>
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      className="w-full bg-[var(--irix-bg)] border border-[var(--irix-border)] text-[var(--irix-text)] font-mono text-sm px-4 py-3 focus:outline-none focus:border-[var(--irix-teal)] transition-colors resize-none placeholder:text-[var(--irix-border)]"
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={sending}
                    className="w-full py-3 font-mono text-sm tracking-widest uppercase bg-[var(--irix-teal)] text-[var(--irix-bg)] hover:bg-[var(--irix-cyan)] transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-3 h-3 border border-[var(--irix-bg)] border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Send Message →"
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
