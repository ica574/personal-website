"use client";
import { ScrollReveal, CountUp } from "./Animated";

const stats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 30, suffix: "+", label: "Projects Shipped" },
  { value: 12, suffix: "k+", label: "GitHub Stars" },
  { value: 100, suffix: "%", label: "Remote-Ready" },
];

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "6rem 2rem", maxWidth: "1100px", margin: "0 auto" }}
    >
      <ScrollReveal>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <span
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              fontSize: "0.8rem",
              color: "var(--seafoam)",
              letterSpacing: "0.15em",
            }}
          >
            01.
          </span>
          <h2
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "clamp(1.5rem,4vw,2.5rem)",
              color: "var(--bright)",
            }}
          >
            About Me
          </h2>
          <div
            style={{
              flex: 1,
              height: "1px",
              background:
                "linear-gradient(to right, rgba(0,180,216,0.3), transparent)",
              marginLeft: "1rem",
            }}
          />
        </div>
      </ScrollReveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        <ScrollReveal direction="left">
          <div>
            <p
              style={{
                fontFamily: "'IBM Plex Sans', sans-serif",
                fontSize: "1rem",
                color: "var(--lavender)",
                lineHeight: 1.9,
                marginBottom: "1.5rem",
              }}
            >
              I'm a software engineer with wide-ranging interests including
              low-level computing, quantum computing, and artificial
              intelligence.
            </p>
            <div
              style={{
                fontFamily: "'IBM Plex Mono', monospace",
                fontSize: "0.8rem",
                color: "var(--dim)",
                background: "rgba(15,52,96,0.4)",
                border: "1px solid rgba(0,180,216,0.15)",
                borderRadius: "4px",
                padding: "1.2rem",
              }}
            >
              <div style={{ color: "var(--teal)", marginBottom: "0.5rem" }}>
                # Currently
              </div>
              <div style={{ color: "var(--lavender)" }}>
                🔭 Working on a SaaS platform for{" "}
                <span style={{ color: "var(--seafoam)" }}>
                  distributed teams
                </span>
              </div>
              <div style={{ color: "var(--lavender)", marginTop: "4px" }}>
                🌱 Learning <span style={{ color: "var(--gold)" }}>Rust</span>{" "}
                and <span style={{ color: "var(--gold)" }}>WebAssembly</span>
              </div>
              <div style={{ color: "var(--lavender)", marginTop: "4px" }}>
                📍 Available for{" "}
                <span style={{ color: "var(--green)" }}>freelance</span>{" "}
                projects
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={150}>
          <div>
            {/* Avatar placeholder with IRIX styling */}
            <div
              style={{
                width: "100%",
                maxWidth: "340px",
                aspectRatio: "1",
                margin: "0 auto 2rem",
                position: "relative",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "4px",
                  background:
                    "linear-gradient(135deg, var(--surface) 0%, var(--panel) 100%)",
                  border: "1px solid rgba(0,180,216,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* ASCII art portrait placeholder */}
                <pre
                  style={{
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.55rem",
                    color: "var(--teal)",
                    opacity: 0.5,
                    lineHeight: 1.2,
                    userSelect: "none",
                  }}
                >
                  {`  ██████████████████████
  █                    █
  █   ████████████     █
  █   █          █     █
  █   █   ◉  ◉   █     █
  █   █           █    █
  █   █    ___    █    █
  █   █           █    █
  █   █   ─────   █    █
  █   █████████████    █
  █                    █
  ██████████████████████`}
                </pre>
                <div
                  style={{
                    position: "absolute",
                    bottom: "1rem",
                    fontFamily: "'IBM Plex Mono', monospace",
                    fontSize: "0.7rem",
                    color: "var(--seafoam)",
                  }}
                >
                  isaac.jpg
                </div>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  width: "80px",
                  height: "80px",
                  border: "2px solid rgba(0,245,212,0.3)",
                  borderRadius: "4px",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-8px",
                  left: "-8px",
                  width: "80px",
                  height: "80px",
                  border: "2px solid rgba(244,162,97,0.2)",
                  borderRadius: "4px",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Stats grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="irix-panel"
                  style={{ padding: "1.2rem", textAlign: "center" }}
                >
                  <div
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "1.8rem",
                      fontWeight: 700,
                      color: "var(--teal)",
                    }}
                  >
                    <CountUp end={s.value} suffix={s.suffix} />
                  </div>
                  <div
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      fontSize: "0.7rem",
                      color: "var(--dim)",
                      marginTop: "4px",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
