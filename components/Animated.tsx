"use client";
import { useEffect, useRef, useState } from "react";

interface BlurTextProps {
  text: string;
  className?: string;
  delay?: number;
  stepDuration?: number;
}

export function BlurText({
  text,
  className = "",
  delay = 0,
  stepDuration = 60,
}: BlurTextProps) {
  const [revealed, setRevealed] = useState<boolean[]>([]);
  const words = text.split(" ");

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    words.forEach((_, i) => {
      const t = setTimeout(
        () => {
          setRevealed((prev) => {
            const next = [...prev];
            next[i] = true;
            return next;
          });
        },
        delay + i * stepDuration,
      );
      timeouts.push(t);
    });
    return () => timeouts.forEach(clearTimeout);
  }, [text, delay, stepDuration]);

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            marginRight: "0.25em",
            transition: "filter 0.6s ease, opacity 0.6s ease",
            filter: revealed[i] ? "blur(0px)" : "blur(12px)",
            opacity: revealed[i] ? 1 : 0,
          }}
        >
          {word}
        </span>
      ))}
    </span>
  );
}

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function CountUp({
  end,
  suffix = "",
  duration = 1500,
  className = "",
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
      {suffix}
    </span>
  );
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const transforms: Record<string, string> = {
    up: "translateY(30px)",
    left: "translateX(-30px)",
    right: "translateX(30px)",
    none: "none",
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: visible ? "none" : transforms[direction],
        opacity: visible ? 1 : 0,
        transition: `transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s ease`,
      }}
    >
      {children}
    </div>
  );
}

interface RotatingTextProps {
  texts: string[];
  interval?: number;
  className?: string;
}

export function RotatingText({
  texts,
  interval = 2800,
  className = "",
}: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const t = setInterval(() => {
      setExiting(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % texts.length);
        setExiting(false);
      }, 300);
    }, interval);
    return () => clearInterval(t);
  }, [texts.length, interval]);

  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        transition: "transform 0.3s ease, opacity 0.3s ease",
        transform: exiting ? "translateY(-10px)" : "translateY(0)",
        opacity: exiting ? 0 : 1,
      }}
    >
      {texts[index]}
    </span>
  );
}

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    const trigger = () => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 200);
    };
    const t = setInterval(trigger, 4000 + Math.random() * 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <span
      className={className}
      style={{
        position: "relative",
        display: "inline-block",
        animation: glitching ? "none" : undefined,
      }}
    >
      {text}
      {glitching && (
        <>
          <span
            style={{
              position: "absolute",
              top: 0,
              left: "2px",
              color: "#00f5d4",
              clipPath: "polygon(0 30%, 100% 30%, 100% 50%, 0 50%)",
              opacity: 0.8,
            }}
          >
            {text}
          </span>
          <span
            style={{
              position: "absolute",
              top: 0,
              left: "-2px",
              color: "#e76f51",
              clipPath: "polygon(0 60%, 100% 60%, 100% 80%, 0 80%)",
              opacity: 0.8,
            }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
}

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export function TiltCard({
  children,
  className = "",
  intensity = 8,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(600px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform =
        "perspective(600px) rotateY(0deg) rotateX(0deg) scale(1)";
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.15s ease" }}
    >
      {children}
    </div>
  );
}

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}

export function MagneticButton({
  children,
  className = "",
  onClick,
  href,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0, 0)";
  };

  const Tag = href ? "a" : "button";

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 0.3s ease", display: "inline-block" }}
    >
      <Tag href={href} onClick={onClick} className={className}>
        {children}
      </Tag>
    </div>
  );
}
