import { Section } from "@/components/Section";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Layers, BarChart3, Globe, Activity } from "lucide-react";

// --- Data ---
const products = [
    {
        id: "neo-erp",
        icon: <Layers size={24} />,
        name: "Neo ERP",
        tagline: "Orchestrate Everything",
        description:
            "Unifying finance, supply chain, and operations into a single, intelligent platform for seamless enterprise management.",
        color: "from-blue-400/20 to-cyan-400/20",
        accentColor: "#60a5fa",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
    {
        id: "neo-crm",
        icon: <BarChart3 size={24} />,
        name: "Neo CRM",
        tagline: "Predict the Future",
        description:
            "AI-powered customer relationship management with predictive analytics to maximize engagement and lifetime value.",
        color: "from-emerald-400/20 to-teal-400/20",
        accentColor: "#34d399",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    },
    {
        id: "my-campus",
        icon: <Globe size={24} />,
        name: "My Campus",
        tagline: "Educate at Scale",
        description:
            "Digital ecosystem empowering institutions with AI-driven curriculum management and global connectivity.",
        color: "from-purple-400/20 to-pink-400/20",
        accentColor: "#c084fc",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop",
    },
    {
        id: "neo-connect",
        icon: <Activity size={24} />,
        name: "Neo Connect",
        tagline: "Sync the Unsynced",
        description:
            "Real-time mesh networking for multi-branch enterprises with zero-latency data synchronization.",
        color: "from-orange-400/20 to-amber-400/20",
        accentColor: "#fb923c",
        image: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?w=800&h=600&fit=crop",
    },
];

// --- Components ---

function WorkspaceScene() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Soft Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40" />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f020_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f020_1px,transparent_1px)] bg-[size:3rem_3rem]" />

            {/* Light Grain Texture */}
            <div
                className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Ambient Light Orbs */}
            <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] bg-gradient-radial from-blue-200/30 via-purple-200/20 to-transparent blur-[100px] animate-float-slow" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[35%] h-[35%] bg-gradient-radial from-pink-200/20 via-cyan-200/15 to-transparent blur-[100px] animate-float-slower" />

            {/* Desk Illustration (Minimalist SVG) */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl">
                {/* Desk Surface */}
                <div className="relative h-32 bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-t-2xl shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.1)] border-t border-x border-gray-200/50">
                    {/* Desk Edge Highlight */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />

                    {/* Subtle Desk Details */}
                    <div className="absolute top-8 right-16 w-20 h-12 bg-gray-100 rounded-lg shadow-sm border border-gray-200/50 opacity-40" />
                    <div className="absolute top-10 left-20 w-6 h-6 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full shadow-sm opacity-30" />
                </div>

                {/* Chair Silhouette */}
                <div className="absolute bottom-32 right-[15%] w-24 h-32 opacity-20">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-16 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-xl" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-20 bg-gray-800 rounded-full" />
                </div>
            </div>
        </div>
    );
}

function GlassmorphicCard({
    product,
    index,
    offset,
}: {
    product: (typeof products)[0];
    index: number;
    offset: number;
}) {
    const position = (index - offset + products.length) % products.length;
    const isCenter = position === 1;

    // Calculate transform based on position
    const getTransform = () => {
        const baseX = (position - 1) * 340; // 320px card + 20px gap
        const scale = isCenter ? 1 : 0.85;
        const rotateY = isCenter ? 0 : (position - 1) * -8;
        const z = isCenter ? 50 : 0;

        return {
            transform: `translateX(${baseX}px) translateZ(${z}px) scale(${scale}) rotateY(${rotateY}deg)`,
            opacity: isCenter ? 1 : 0.4,
            zIndex: isCenter ? 20 : 10,
        };
    };

    return (
        <div
            className="absolute left-1/2 -translate-x-1/2 transition-all duration-700 ease-out"
            style={getTransform()}>
            <div className="w-[320px] h-[420px] group cursor-pointer">
                {/* Glassmorphic Card */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-white/60 backdrop-blur-2xl border border-white/50 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.25)] transition-all duration-500">
                    {/* Gradient Overlay */}
                    <div
                        className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    {/* Image Container */}
                    <div className="relative h-[240px] overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            style={{ opacity: 0.85 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/80" />
                    </div>

                    {/* Content */}
                    <div className="relative p-6 space-y-3">
                        {/* Icon Badge */}
                        <div
                            className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg mb-2"
                            style={{ color: product.accentColor }}>
                            {product.icon}
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold text-gray-800 tracking-tight">
                            {product.name}
                        </h3>

                        {/* Tagline */}
                        <p className="text-sm font-medium text-gray-500 tracking-wide">
                            {product.tagline}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                            {product.description}
                        </p>

                        {/* Accent Line */}
                        <div
                            className="w-12 h-1 rounded-full mt-4 transition-all duration-500 group-hover:w-20"
                            style={{ backgroundColor: product.accentColor }}
                        />
                    </div>

                    {/* Glass Shine Effect */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50" />
                </div>
            </div>
        </div>
    );
}

function CarouselIndicators({
    total,
    active,
    onSelect,
}: {
    total: number;
    active: number;
    onSelect: (i: number) => void;
}) {
    return (
        <div className="flex items-center gap-3">
            {Array.from({ length: total }).map((_, i) => (
                <button
                    key={i}
                    onClick={() => onSelect(i)}
                    className={`transition-all duration-300 rounded-full ${
                        i === active
                            ? "w-12 h-2 bg-gray-700"
                            : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                />
            ))}
        </div>
    );
}

export function Products() {
    const [offset, setOffset] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-rotate carousel
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setOffset((prev) => (prev + 1) % products.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [isPaused]);

    const handleIndicatorClick = (index: number) => {
        setOffset(index);
        setIsPaused(true);
        setTimeout(() => setIsPaused(false), 5000);
    };

    return (
        <Section
            id="products"
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/40"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}>
            {/* Scene Background */}
            <WorkspaceScene />

            {/* Main Content Container */}
            <div className="relative z-10 container mx-auto px-6 h-screen flex flex-col justify-center">
                <div className="flex flex-col items-center gap-16">
                    {/* Header Section */}
                    <div className="text-center space-y-4 max-w-3xl animate-fade-in">
                        <p className="text-sm font-medium text-gray-500 tracking-[0.2em] uppercase">
                            Our Products
                        </p>
                        <h1 className="text-6xl md:text-7xl font-black tracking-tight text-gray-900 leading-tight">
                            Built for the{" "}
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Future
                            </span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Enterprise solutions designed with intelligence,
                            crafted with precision
                        </p>
                    </div>

                    {/* 3D Carousel Container */}
                    <div
                        className="relative w-full h-[480px] perspective-container"
                        style={{ perspective: "2000px" }}>
                        <div className="absolute inset-0 flex items-center justify-center preserve-3d">
                            {products.map((product, index) => (
                                <GlassmorphicCard
                                    key={product.id}
                                    product={product}
                                    index={index}
                                    offset={offset}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Carousel Controls */}
                    <div className="flex flex-col items-center gap-6 animate-fade-in-delay">
                        <CarouselIndicators
                            total={products.length}
                            active={offset}
                            onSelect={handleIndicatorClick}
                        />

                        <div className="flex items-center gap-4">
                            <button className="group px-8 py-3.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm tracking-wide rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
                                Explore Products
                                <ArrowRight
                                    size={16}
                                    className="group-hover:translate-x-1 transition-transform"
                                />
                            </button>
                            <button className="px-6 py-3.5 text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
                                View Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx global>{`
                @keyframes float-slow {
                    0%,
                    100% {
                        transform: translate(0, 0);
                    }
                    50% {
                        transform: translate(30px, -30px);
                    }
                }
                @keyframes float-slower {
                    0%,
                    100% {
                        transform: translate(0, 0);
                    }
                    50% {
                        transform: translate(-40px, 40px);
                    }
                }
                .animate-float-slow {
                    animation: float-slow 20s ease-in-out infinite;
                }
                .animate-float-slower {
                    animation: float-slower 25s ease-in-out infinite;
                }
                .perspective-container {
                    perspective: 2000px;
                }
                .preserve-3d {
                    transform-style: preserve-3d;
                }
                .animate-fade-in {
                    animation: fadeIn 1s ease-out;
                }
                .animate-fade-in-delay {
                    animation: fadeIn 1s ease-out 0.3s backwards;
                }
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .bg-gradient-radial {
                    background: radial-gradient(
                        circle,
                        var(--tw-gradient-stops)
                    );
                }
            `}</style>
        </Section>
    );
}
