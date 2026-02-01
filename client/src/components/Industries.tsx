import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaChartLine, FaKey, FaDollarSign, FaStar, FaFileAlt, FaUser } from "react-icons/fa";

const benefits = [
    { name: "Detailed Statistics", icon: FaChartLine },
    { name: "Convenient Personal Account", icon: FaKey },
    { name: "Financial Support for Partners", icon: FaDollarSign },
    { name: "Wide Selection of Advertising Materials", icon: FaStar },
    { name: "Multi-level Program", icon: FaFileAlt },
    { name: "Individual Approach", icon: FaUser },
];

export function Industries() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div 
            ref={sectionRef}
            className="relative py-24 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden"
            id="industries"
        >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.05) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        When Opening a Partner Account
                    </h2>
                    <p className="text-xl text-gray-600">
                        You Get the Following Benefits:
                    </p>
                </motion.div>

                {/* Benefits with curved path */}
                <div className="relative max-w-6xl mx-auto">
                    {/* SVG Curved Path */}
                    <svg
                        className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 pointer-events-none hidden md:block"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                    >
                        <motion.path
                            d="M 50 80 Q 150 20, 250 60 Q 350 100, 450 40 Q 550 -20, 650 60 Q 750 100, 850 40 Q 950 -20, 1050 60 Q 1150 100, 1150 60"
                            fill="none"
                            stroke="#d1d5db"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                            initial={{ pathLength: 0 }}
                            animate={isInView ? { pathLength: 1 } : {}}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </svg>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
                        {benefits.map((benefit, index) => {
                            const Icon = benefit.icon;
                            const isEven = index % 2 === 0;
                            
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ 
                                        duration: 0.5, 
                                        delay: index * 0.15,
                                        ease: "easeOut"
                                    }}
                                    className={`flex flex-col items-center ${isEven ? 'md:mt-0' : 'md:mt-12'}`}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    {/* Icon Circle */}
                                    <motion.div
                                        className="relative mb-4"
                                        animate={hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Glow effect */}
                                        <motion.div
                                            className="absolute inset-0 rounded-full bg-orange-500"
                                            animate={hoveredIndex === index ? { 
                                                scale: 1.3, 
                                                opacity: 0.3 
                                            } : { 
                                                scale: 1, 
                                                opacity: 0 
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        
                                        {/* Main circle */}
                                        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg cursor-pointer group">
                                            <Icon className="w-7 h-7 md:w-8 md:h-8 text-white transition-transform duration-300 group-hover:scale-110" />
                                            
                                            {/* Pulse animation */}
                                            <motion.div
                                                className="absolute inset-0 rounded-full border-2 border-orange-400"
                                                animate={{ 
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.5, 0, 0.5]
                                                }}
                                                transition={{ 
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: index * 0.3
                                                }}
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Label */}
                                    <motion.p
                                        className="text-center text-sm md:text-base font-medium text-gray-700 max-w-[120px] leading-tight"
                                        animate={hoveredIndex === index ? { 
                                            color: "#ea580c",
                                            y: -2
                                        } : { 
                                            color: "#374151",
                                            y: 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {benefit.name}
                                    </motion.p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-orange-100 opacity-50 blur-2xl" />
                <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-red-100 opacity-50 blur-2xl" />
            </div>

            {/* Bottom gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-30" />
        </div>
    );
}
