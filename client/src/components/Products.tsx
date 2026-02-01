import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Layers, BarChart3, Globe, Activity, ArrowRight, Check, Sparkles } from "lucide-react";

const products = [
    {
        id: "neo-erp",
        icon: Layers,
        name: "Neo ERP",
        tagline: "Orchestrate Everything",
        description: "Unifying finance, supply chain, and operations into a single, intelligent platform for seamless enterprise management.",
        features: ["Financial Management", "Supply Chain", "Operations Hub", "Real-time Analytics"],
        gradient: "from-blue-500 to-cyan-400",
        bgGradient: "from-blue-50 to-cyan-50",
        color: "#3b82f6",
    },
    {
        id: "neo-crm",
        icon: BarChart3,
        name: "Neo CRM",
        tagline: "Predict the Future",
        description: "AI-powered customer relationship management with predictive analytics to maximize engagement and lifetime value.",
        features: ["Lead Scoring", "Sales Pipeline", "Customer Insights", "Automation"],
        gradient: "from-emerald-500 to-teal-400",
        bgGradient: "from-emerald-50 to-teal-50",
        color: "#10b981",
    },
    {
        id: "my-campus",
        icon: Globe,
        name: "My Campus",
        tagline: "Educate at Scale",
        description: "Digital ecosystem empowering institutions with AI-driven curriculum management and global connectivity.",
        features: ["LMS Integration", "Student Portal", "Analytics Dashboard", "Virtual Classrooms"],
        gradient: "from-purple-500 to-pink-400",
        bgGradient: "from-purple-50 to-pink-50",
        color: "#8b5cf6",
    },
    {
        id: "neo-connect",
        icon: Activity,
        name: "Neo Connect",
        tagline: "Sync the Unsynced",
        description: "Real-time mesh networking for multi-branch enterprises with zero-latency data synchronization.",
        features: ["Multi-branch Sync", "Real-time Data", "API Gateway", "Cloud Native"],
        gradient: "from-orange-500 to-amber-400",
        bgGradient: "from-orange-50 to-amber-50",
        color: "#f97316",
    },
];

function ProductCard({ product, index, isActive, onClick }: { 
    product: typeof products[0]; 
    index: number; 
    isActive: boolean;
    onClick: () => void;
}) {
    const Icon = product.icon;
    
    return (
        <motion.div
            layout
            onClick={onClick}
            className={`relative cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 ${
                isActive ? 'col-span-2 row-span-2' : 'col-span-1 row-span-1'
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: isActive ? 1 : 1.02 }}
        >
            <div className={`relative h-full min-h-[200px] ${isActive ? 'min-h-[400px]' : ''} p-6 bg-gradient-to-br ${product.bgGradient} border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500`}>
                
                {/* Decorative gradient orb */}
                <div 
                    className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl opacity-30 bg-gradient-to-br ${product.gradient}`}
                />
                
                {/* Icon */}
                <motion.div 
                    className={`relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${product.gradient} shadow-lg mb-4`}
                    animate={{ 
                        width: isActive ? 64 : 48,
                        height: isActive ? 64 : 48,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    <Icon className="text-white" size={isActive ? 28 : 20} />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                    <motion.h3 
                        className="font-bold text-gray-900 mb-1"
                        animate={{ fontSize: isActive ? '1.75rem' : '1.25rem' }}
                        transition={{ duration: 0.3 }}
                    >
                        {product.name}
                    </motion.h3>
                    
                    <p className={`text-sm font-medium mb-3`} style={{ color: product.color }}>
                        {product.tagline}
                    </p>

                    <AnimatePresence>
                        {isActive && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {product.description}
                                </p>

                                {/* Features */}
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    {product.features.map((feature, i) => (
                                        <motion.div
                                            key={feature}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex items-center gap-2"
                                        >
                                            <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-sm text-gray-700">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${product.gradient} text-white font-medium shadow-lg hover:shadow-xl transition-shadow`}
                                >
                                    Learn More
                                    <ArrowRight size={16} />
                                </motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Active indicator */}
                {isActive && (
                    <motion.div
                        layoutId="activeIndicator"
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${product.gradient}`}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.5 }}
                    />
                )}
            </div>
        </motion.div>
    );
}

function FloatingParticle({ delay }: { delay: number }) {
    return (
        <motion.div
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-40"
            style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
            }}
            animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
                duration: 4,
                delay,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        />
    );
}

export function Products() {
    const [activeProduct, setActiveProduct] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section 
            ref={sectionRef}
            id="products" 
            className="relative py-24 bg-white overflow-hidden"
        >
            {/* Background elements */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/50 via-purple-100/30 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-orange-100/40 via-pink-100/20 to-transparent rounded-full blur-3xl" />
                
                {/* Floating particles */}
                {[...Array(8)].map((_, i) => (
                    <FloatingParticle key={i} delay={i * 0.5} />
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-blue-500" />
                        <span className="text-sm font-medium text-gray-700">Our Products</span>
                    </motion.div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Built for the{" "}
                        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Future
                        </span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Enterprise solutions designed with intelligence, crafted with precision.
                        Click on any product to explore more.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <motion.div 
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {products.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            index={index}
                            isActive={activeProduct === index}
                            onClick={() => setActiveProduct(index)}
                        />
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex flex-wrap justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                            data-testid="button-explore-all"
                        >
                            Explore All Products
                            <ArrowRight size={18} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-md transition-all"
                            data-testid="button-request-demo"
                        >
                            Request a Demo
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
