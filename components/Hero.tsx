"use client";
import { useEffect, useRef } from "react";
import { BlurText, RotatingText, GlitchText } from "./Animated";

const ROLES = [
  "Backend Engineering",
  "Low-Level Computing",
  "Quantum Computing",
  "Artificial Intelligence",
  "Autodidact",
];

let HEADLINE =
  "I enjoy delving into the depths of problems, particularly those related to low-level computing, artificial intelligence, and quantum computing. I write software as a day job, and contribute to open source in my free time.";

let LINKS = [
  { label: "GitHub", href: "https://github.com/ica574" },
  { label: "X", href: "https://x.com/IsaaCiliaAttard" },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/isaacciliaattard",
  },
  { label: "Email", href: "mailto:contact@isaacciliaattard.com" },
  { label: "FreeBSD Wiki", href: "https://wiki.freebsd.org/IsaacCiliaAttard" },
];

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#00b4d8", "#00f5d4", "#48cae4", "#57cc99", "#f4a261"];
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    let animId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });

      particles.forEach((a, i) =>
        particles.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = "#00b4d8";
            ctx.globalAlpha = (1 - d / 120) * 0.08;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }),
      );

      animId = requestAnimationFrame(animate);
    };

    animate();

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "0 2rem",
      }}
      className="grid-bg"
    >
      <ParticleField />

      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(244,162,97,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ marginBottom: "1.5rem" }}>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.95rem",
              color: "var(--seafoam)",
              letterSpacing: "0.15em",
            }}
          >
            Hi there, I'm
          </span>
        </div>

        <h1
          style={{
            fontFamily: "'Space Mono', monospace",
            fontWeight: 700,
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            lineHeight: 1.05,
            marginBottom: "0.5rem",
            color: "var(--bright)",
          }}
        >
          <GlitchText text="Isaac" />
          <br />
          <GlitchText text="Cilia Attard" />
        </h1>

        <h2
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
            color: "var(--dim)",
            marginBottom: "2rem",
            fontWeight: 400,
          }}
        >
          <span style={{ color: "var(--gold)" }}>~/</span>{" "}
          <RotatingText texts={ROLES} className="gradient-text-teal" />
          <span className="cursor-blink" />
        </h2>

        <p
          style={{
            fontFamily: "'IBM Plex Sans', sans-serif",
            fontSize: "1.15rem",
            color: "var(--lavender)",
            maxWidth: "580px",
            lineHeight: 1.8,
            marginBottom: "3rem",
          }}
        >
          <BlurText text={HEADLINE} delay={200} stepDuration={50} />
        </p>

        <div style={{ display: "flex", gap: "1.75rem", alignItems: "center" }}>
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.75rem",
              color: "var(--dim)",
            }}
          >
            find me on
          </span>

          {LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.82rem",
                color: "var(--dim)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--seafoam)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--dim)")}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/*
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          opacity: 0.45,
        }}
      >
        <span
          style={{
            fontFamily: "'IBM Plex Mono', monospace",
            fontSize: "0.7rem",
            color: "var(--dim)",
            letterSpacing: "0.12em",
          }}
        >
          scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "60px",
            background: "linear-gradient(to bottom, var(--teal), transparent)",
            animation: "float 2.2s ease-in-out infinite",
          }}
        />
      </div>
      */}
    </section>
  );
}
