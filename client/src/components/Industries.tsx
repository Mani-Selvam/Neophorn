import { useEffect, useRef, useState } from "react";

const industries = [
    { name: "Transportation & Logistics", icon: "🚚", color: "#3B82F6" },
    { name: "Manufacturing", icon: "⚙️", color: "#F59E0B" },
    { name: "Educational Institutions", icon: "🎓", color: "#8B5CF6" },
    { name: "Textiles", icon: "🧵", color: "#EC4899" },
    { name: "Marketing", icon: "📊", color: "#10B981" },
    { name: "E-Commerce", icon: "🛒", color: "#EF4444" },
    { name: "Food & Beverages", icon: "🍽️", color: "#F97316" },
    { name: "Membership Organizations", icon: "👥", color: "#06B6D4" },
];

function IndustryMarquee({
    direction = "left",
    speed = 40,
}: {
    direction?: "left" | "right";
    speed?: number;
}) {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        // Duplicate items for seamless loop
        const scrollerContent = Array.from(scroller.children);
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true) as HTMLElement;
            scroller.appendChild(duplicatedItem);
        });
    }, []);

    return (
        <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}>
            <div
                ref={scrollerRef}
                className="flex gap-16 w-fit"
                style={{
                    animation: `scroll-${direction} ${speed}s linear infinite`,
                    animationPlayState: isPaused ? "paused" : "running",
                }}>
                {industries.map((industry, index) => (
                    <div
                        key={index}
                        className="group relative flex items-center gap-4 cursor-pointer">
                        {/* Icon with glow */}
                        <div className="relative">
                            <div
                                className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                                style={{ backgroundColor: industry.color }}
                            />
                            <div
                                className="relative w-14 h-14 rounded-xl flex items-center justify-center text-2xl bg-white/5 border border-white/10 group-hover:border-white/30 transition-all duration-500 group-hover:scale-110"
                                style={{
                                    boxShadow: `0 0 0 0 ${industry.color}00`,
                                    transition: "all 0.5s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = `0 0 30px 5px ${industry.color}60`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = `0 0 0 0 ${industry.color}00`;
                                }}>
                                {industry.icon}
                            </div>
                        </div>

                        {/* Text */}
                        <div className="relative">
                            <span
                                className="text-2xl font-bold text-white/70 group-hover:text-white transition-all duration-500 whitespace-nowrap tracking-tight"
                                style={{
                                    textShadow: "0 0 0 rgba(255,255,255,0)",
                                    transition: "all 0.5s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color =
                                        industry.color;
                                    e.currentTarget.style.textShadow = `0 0 20px ${industry.color}80`;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color =
                                        "rgba(255,255,255,0.7)";
                                    e.currentTarget.style.textShadow =
                                        "0 0 0 rgba(255,255,255,0)";
                                }}>
                                {industry.name}
                            </span>

                            {/* Underline on hover */}
                            <div
                                className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                                style={{ backgroundColor: industry.color }}
                            />
                        </div>

                        {/* Separator dot */}
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-white/40 transition-colors duration-500" />
                    </div>
                ))}
            </div>

            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>
    );
}

export function Industries() {
    return (
        <div className="relative py-20 bg-black overflow-hidden">
            {/* Ambient background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] animate-pulse" />
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] animate-pulse"
                    style={{ animationDelay: "1s" }}
                />
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]" />

            <div className="relative z-10">
                {/* Header */}
                <div className="container mx-auto px-4 mb-16">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="flex gap-2">
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className="w-1.5 h-1.5 rounded-full bg-white/40"
                                    style={{
                                        animation:
                                            "pulse 2s ease-in-out infinite",
                                        animationDelay: `${i * 0.3}s`,
                                    }}
                                />
                            ))}
                        </div>
                        <span className="font-mono text-xs text-white/30 tracking-[0.4em] uppercase">
                            Industries We Serve
                        </span>
                    </div>
                </div>

                {/* Dual direction marquees */}
                <div className="space-y-12">
                    {/* First row - scrolling left */}
                    <IndustryMarquee direction="left" speed={100} />
                </div>

                {/* Bottom stats */}
                <div className="container mx-auto px-4 mt-20">
                    <div className="flex flex-wrap justify-center items-center gap-12">
                        {[
                            {
                                value: industries.length.toString(),
                                label: "Industries",
                            },
                            { value: "500+", label: "Global Clients" },
                            { value: "98%", label: "Success Rate" },
                        ].map((stat, i) => (
                            <div
                                key={i}
                                className="text-center group cursor-pointer">
                                <div className="text-4xl font-black text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-500 mb-2 tabular-nums">
                                    {stat.value}
                                </div>
                                <div className="text-xs font-mono text-white/30 tracking-wider uppercase">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Animation keyframes */}
            <style jsx>{`
                @keyframes scroll-left {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @keyframes scroll-right {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }
            `}</style>
        </div>
    );
}
