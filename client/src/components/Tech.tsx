import { Section } from "@/components/Section";
import { useEffect, useRef, useState } from "react";

// User's complete tech stack with custom symbols and brand colors
const technologies = [
    // AI & Infrastructure
    { name: "PyTorch", hex: "#EE4C2C", symbol: "🔥" },
    { name: "FastAPI", hex: "#009688", symbol: "⚡" },
    { name: "Kubernetes", hex: "#326CE5", symbol: "☸" },
    { name: "Docker", hex: "#2496ED", symbol: "🐋" },
    { name: "OpenAI", hex: "#10A37F", symbol: "🤖" },
    { name: "Apache Spark", hex: "#E25A1C", symbol: "⚡" },
    { name: "Bootstrap", hex: "#7952B3", symbol: "B" },
    { name: "NGINX", hex: "#009639", symbol: "N" },

    // Backend & Databases
    { name: "Redis", hex: "#DC382D", symbol: "◆" },
    { name: "jQuery", hex: "#0769AD", symbol: "jQ" },
    { name: "PostgreSQL", hex: "#336791", symbol: "🐘" },
    { name: "PHP", hex: "#777BB4", symbol: "Φ" },
    { name: "Laravel", hex: "#FF2D20", symbol: "L" },
    { name: "Android", hex: "#3DDC84", symbol: "🤖" },
    { name: "iOS", hex: "#000000", symbol: "" },

    // Web & Cloud Tools
    { name: "MySQL", hex: "#4479A1", symbol: "🐬" },
    { name: "GitHub", hex: "#181717", symbol: "🐙" },
    { name: "Apache", hex: "#D22128", symbol: "A" },
    { name: "Firebase", hex: "#FFCA28", symbol: "🔥" },
    { name: "HTML5", hex: "#E34F26", symbol: "5" },
    { name: "Jira", hex: "#0052CC", symbol: "J" },
    { name: "JavaScript", hex: "#F7DF1E", symbol: "JS" },
    { name: "Trello", hex: "#0052CC", symbol: "T" },

    // Frontend & Programming
    { name: "Vue.js", hex: "#4FC08D", symbol: "V" },
    { name: "CSS3", hex: "#1572B6", symbol: "3" },
    { name: "Python", hex: "#3776AB", symbol: "🐍" },
    { name: "MongoDB", hex: "#47A248", symbol: "M" },
    { name: "Express.js", hex: "#000000", symbol: "E" },
    { name: "AWS", hex: "#FF9900", symbol: "☁" },
    { name: "Angular", hex: "#DD0031", symbol: "A" },
    { name: "React", hex: "#61DAFB", symbol: "⚛" },

    // Analytics & Advanced Tech
    { name: "Node.js", hex: "#339933", symbol: "N" },
    { name: "Power BI", hex: "#F2C811", symbol: "📊" },
    { name: "Blockchain", hex: "#121D33", symbol: "⛓" },
    { name: "Solidity", hex: "#363636", symbol: "S" },
    { name: "TensorFlow", hex: "#FF6F00", symbol: "🐺" },
];

// Check if device is mobile
const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth < 768;
};

function TechOrb({
    tech,
    index,
    total,
}: {
    tech: (typeof technologies)[0];
    index: number;
    total: number;
}) {
    const [active, setActive] = useState(false);
    const mobile = isMobile();

    useEffect(() => {
        const timer = setTimeout(() => setActive(true), index * 60);
        return () => clearTimeout(timer);
    }, [index]);

    // Calculate orbital position - spiral distribution for better spacing
    const spiralTurns = mobile ? 2 : 3;
    const maxRadius = mobile ? 250 : 450;
    const minRadius = mobile ? 100 : 150;
    const progress = index / total;
    const angle = progress * spiralTurns * 360;
    const radius = minRadius + (maxRadius - minRadius) * progress;
    const orbitDuration = mobile ? 40 + (index % 5) * 5 : 25 + (index % 8) * 5;

    return (
        <div
            className="absolute left-1/2 top-1/2 tech-orb will-change-transform"
            style={{
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
                opacity: active ? 1 : 0,
                transition: "opacity 0.8s ease-out",
                transitionDelay: `${index * 60}ms`,
                animation: mobile
                    ? "none"
                    : `orbit-${index} ${orbitDuration}s linear infinite`,
                animationDelay: `${-index * 1}s`,
            }}>
            {!mobile && (
                <style>{`
          @keyframes orbit-${index} {
            from {
              transform: translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(${angle + 360}deg) translateX(${radius}px) rotate(-${angle + 360}deg);
            }
          }
        `}</style>
            )}

            <div className="group relative cursor-pointer">
                {/* Simplified pulsing ring - only on desktop */}
                {!mobile && (
                    <div
                        className="absolute inset-[-3px] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                        style={{
                            backgroundColor: tech.hex,
                            filter: "blur(8px)",
                        }}
                    />
                )}

                {/* Main orb container - optimized size for mobile */}
                <div
                    className={`relative ${mobile ? "w-14 h-14" : "w-20 h-20"} rounded-full border-2 bg-gradient-to-br from-zinc-950 to-black
                     shadow-[0_0_20px_rgba(0,0,0,0.6)] group-hover:scale-110 transition-transform duration-300 overflow-hidden`}
                    style={{
                        borderColor: tech.hex,
                        boxShadow: `0 0 20px ${tech.hex}30`,
                    }}>
                    {/* Simplified inner glow */}
                    <div
                        className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                        style={{
                            background: `radial-gradient(circle at 30% 30%, ${tech.hex}30, transparent 70%)`,
                        }}
                    />

                    {/* Tech symbol/emoji */}
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                        <span
                            className={`${mobile ? "text-2xl" : "text-3xl"} group-hover:scale-110 transition-transform duration-300`}
                            style={{
                                filter: `drop-shadow(0 0 6px ${tech.hex})`,
                            }}>
                            {tech.symbol}
                        </span>
                    </div>

                    {/* Shimmer overlay - only on desktop hover */}
                    {!mobile && (
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                         -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                        />
                    )}

                    {/* Corner accent */}
                    <div
                        className={`absolute ${mobile ? "top-0.5 right-0.5 w-1.5 h-1.5" : "top-1 right-1 w-2 h-2"} rounded-full opacity-50`}
                        style={{ backgroundColor: tech.hex }}
                    />
                </div>

                {/* Tooltip label - larger touch target on mobile */}
                <div
                    className={`absolute ${mobile ? "top-full mt-2" : "top-full mt-3"} left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 
                        transition-all duration-200 pointer-events-none z-50 whitespace-nowrap`}>
                    <div
                        className={`${mobile ? "px-2 py-1 text-[10px]" : "px-3 py-1.5 text-xs"} bg-black border font-mono font-bold tracking-wider`}
                        style={{
                            borderColor: tech.hex,
                            color: tech.hex,
                            boxShadow: `0 0 10px ${tech.hex}40`,
                        }}>
                        {tech.name.toUpperCase()}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function Tech() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [cursorPos, setCursorPos] = useState({ x: 50, y: 50 });
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        setMobile(isMobile());

        const handleResize = () => {
            setMobile(isMobile());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (mobile) return; // Disable cursor tracking on mobile for performance

        const handleMove = (e: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setCursorPos({
                    x: ((e.clientX - rect.left) / rect.width) * 100,
                    y: ((e.clientY - rect.top) / rect.height) * 100,
                });
            }
        };

        window.addEventListener("mousemove", handleMove, { passive: true });
        return () => window.removeEventListener("mousemove", handleMove);
    }, [mobile]);

    return (
        <Section
            id="tech"
            className="relative min-h-screen bg-black overflow-hidden">
            {/* Simplified grid background - lighter on mobile */}
            <div
                className={`absolute inset-0 ${mobile ? "opacity-[0.01]" : "opacity-[0.02]"}`}>
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
                        backgroundSize: mobile ? "80px 80px" : "60px 60px",
                    }}
                />
            </div>

            {/* Simplified gradient overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.015),transparent_60%)]" />

            {/* Cursor spotlight - desktop only */}
            {!mobile && (
                <div
                    className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-all duration-300 ease-out"
                    style={{
                        left: `${cursorPos.x}%`,
                        top: `${cursorPos.y}%`,
                        transform: "translate(-50%, -50%)",
                        background:
                            "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
                    }}
                />
            )}

            <div
                ref={containerRef}
                className="relative z-10 container mx-auto px-4 py-8 md:py-12">
                {/* Header Section - Responsive */}
                <div className="mb-12 md:mb-16">
                    <h1 className="text-[8vw] sm:text-[4vw] md:text-[4vw] font-black leading-[0.8] tracking-tighter mb-6 md:mb-8">
                        <span
                            className="block text-transparent mt-1 md:mt-2"
                            style={{
                                WebkitTextStroke: mobile
                                    ? "1px rgba(255,255,255,0.9)"
                                    : "2px rgba(255,255,255,0.9)",
                                textShadow: mobile
                                    ? "4px 4px 0 rgba(0,0,0,1)"
                                    : "8px 8px 0 rgba(0,0,0,1)",
                            }}>
                            TECH STACK
                        </span>
                    </h1>
                </div>

                {/* Central Orbital System - Responsive height */}
                <div
                    className={`relative ${mobile ? "h-[600px]" : "h-[900px]"} flex items-center justify-center my-12 md:my-20`}>
                    {/* Central Core - Smaller on mobile */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div
                            className={`relative ${mobile ? "w-24 h-24" : "w-40 h-40"}`}>
                            {/* Simplified rotating rings - fewer on mobile */}
                            <div
                                className={`absolute inset-0 border-2 border-white/10 rounded-full ${mobile ? "" : "animate-spin-very-slow"}`}
                            />
                            {!mobile && (
                                <>
                                    <div
                                        className="absolute inset-6 border border-white/5 rounded-full"
                                        style={{
                                            animation:
                                                "spin 50s linear infinite reverse",
                                        }}
                                    />
                                    <div className="absolute inset-12 border border-white/5 rounded-full animate-spin-slow" />
                                </>
                            )}

                            {/* Core nucleus */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div
                                    className={`relative ${mobile ? "w-12 h-12" : "w-20 h-20"} rounded-full bg-gradient-to-br from-white/10 to-white/5 
                               border border-white/20 backdrop-blur-xl
                               shadow-[0_0_40px_rgba(255,255,255,0.2)]`}>
                                    {/* Simplified pulsing core */}
                                    <div className="absolute inset-2 rounded-full bg-white/20 animate-pulse" />
                                    {!mobile && (
                                        <div
                                            className="absolute inset-4 rounded-full bg-white/30 animate-pulse"
                                            style={{ animationDelay: "0.5s" }}
                                        />
                                    )}

                                    {/* Center symbol */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span
                                            className={
                                                mobile ? "text-lg" : "text-2xl"
                                            }>
                                            ⚡
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Energy particles - fewer on mobile */}
                            {!mobile &&
                                [...Array(8)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute left-1/2 top-1/2 w-1 h-1 bg-white rounded-full"
                                        style={{
                                            animation: `particle-burst 3s ease-out infinite`,
                                            animationDelay: `${i * 0.375}s`,
                                            transform: `rotate(${i * 45}deg)`,
                                        }}
                                    />
                                ))}
                        </div>
                    </div>

                    {/* Simplified connection web - only on desktop */}
                    {!mobile && (
                        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-5">
                            <defs>
                                <radialGradient id="lineGradient">
                                    <stop
                                        offset="0%"
                                        stopColor="white"
                                        stopOpacity="0.4"
                                    />
                                    <stop
                                        offset="50%"
                                        stopColor="white"
                                        stopOpacity="0.1"
                                    />
                                    <stop
                                        offset="100%"
                                        stopColor="white"
                                        stopOpacity="0"
                                    />
                                </radialGradient>
                            </defs>
                            {technologies.map((tech, i) => {
                                if (i % 6 === 0) {
                                    // Reduced from every 4th to every 6th
                                    const progress = i / technologies.length;
                                    const angle = progress * 3 * 360;
                                    const radius = 150 + (450 - 150) * progress;
                                    const x =
                                        50 +
                                        Math.cos((angle * Math.PI) / 180) *
                                            (radius / 10);
                                    const y =
                                        50 +
                                        Math.sin((angle * Math.PI) / 180) *
                                            (radius / 10);

                                    return (
                                        <line
                                            key={i}
                                            x1="50%"
                                            y1="50%"
                                            x2={`${x}%`}
                                            y2={`${y}%`}
                                            stroke="url(#lineGradient)"
                                            strokeWidth="1"
                                        />
                                    );
                                }
                                return null;
                            })}
                        </svg>
                    )}

                    {/* All 36 orbiting technologies */}
                    {technologies.map((tech, index) => (
                        <TechOrb
                            key={tech.name}
                            tech={tech}
                            index={index}
                            total={technologies.length}
                        />
                    ))}
                </div>
            </div>

            {/* Optimized Animation Styles */}
            <style jsx>{`
                @keyframes particle-burst {
                    0% {
                        transform: translateX(0);
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(60px);
                        opacity: 0;
                    }
                }

                .animate-spin-slow {
                    animation: spin 30s linear infinite;
                }

                .animate-spin-very-slow {
                    animation: spin 60s linear infinite;
                }

                @keyframes spin {
                    to {
                        transform: rotate(360deg);
                    }
                }

                .will-change-transform {
                    will-change: transform;
                }
            `}</style>
        </Section>
    );
}
