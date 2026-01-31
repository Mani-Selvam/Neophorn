import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroProps {
  onExploreClick: () => void;
}

export function Hero({ onExploreClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#78b3f2]">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
      
      <div className="absolute inset-0 z-0">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/40 rounded-full blur-[180px] animate-pulse" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/30 rounded-full blur-[140px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-4xl"
          >
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                x: [0, 10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-40 -left-20 md:-left-40 w-24 h-24 md:w-32 md:h-32 bg-zinc-900 rounded-full shadow-[inset_-10px_-10px_20px_rgba(255,255,255,0.05),20px_20px_40px_rgba(0,0,0,0.6)] z-20"
            />
            <motion.div 
              animate={{ 
                y: [0, 25, 0],
                x: [0, -15, 0],
                rotate: [0, -10, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-40 -left-32 md:-left-60 w-32 h-32 md:w-48 md:h-48 bg-zinc-900 rounded-full shadow-[inset_-15px_-15px_30px_rgba(255,255,255,0.05),30px_30px_60px_rgba(0,0,0,0.7)] z-20"
            />
            <motion.div 
              animate={{ 
                y: [0, -30, 0],
                x: [0, -20, 0],
                rotate: [0, 15, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-20 -right-20 md:-right-60 w-40 h-40 md:w-56 md:h-56 bg-zinc-900 rounded-full shadow-[inset_-20px_-20px_40px_rgba(255,255,255,0.05),40px_40px_80px_rgba(0,0,0,0.8)] z-20"
            />
            <motion.div 
              animate={{ 
                y: [0, 15, 0],
                x: [0, 20, 0],
                rotate: [0, -5, 0]
              }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-0 -right-24 md:-right-40 w-20 h-20 md:w-28 md:h-28 bg-zinc-900 rounded-full shadow-[inset_-8px_-8px_16px_rgba(255,255,255,0.05),16px_16px_32px_rgba(0,0,0,0.6)] z-20"
            />

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 text-black leading-[0.9] drop-shadow-sm select-none">
              The Metaverse <br /> Explorer
            </h1>
            
            <p className="text-lg md:text-xl text-black/60 max-w-lg mx-auto mb-10 font-medium leading-relaxed">
              Light enables users to discovers connections that was not possiable before
            </p>

            <Button 
              size="lg" 
              className="bg-black hover:bg-black/90 text-white px-12 py-8 rounded-full text-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-2xl hover:shadow-black/20 mb-16"
              onClick={onExploreClick}
            >
              Explore Now
            </Button>

            <div className="w-full max-w-2xl mx-auto overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="flex flex-col gap-4"
              >
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-black/40">Trusted Partners</p>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#78b3f2] to-transparent z-10" />
                  <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#78b3f2] to-transparent z-10" />
                  
                  <motion.div 
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity, 
                      ease: "linear" 
                    }}
                    className="flex whitespace-nowrap gap-12 py-2"
                  >
                    {[
                      "ACME CORP", "NEBULA", "QUANTUM", "FUTURE", "GLOBAL",
                      "ACME CORP", "NEBULA", "QUANTUM", "FUTURE", "GLOBAL"
                    ].map((logo, i) => (
                      <span 
                        key={i} 
                        className="text-xl font-black tracking-tighter text-black/20 hover:text-black/40 transition-colors cursor-default"
                      >
                        {logo}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <div className="absolute inset-0 -z-10 pointer-events-none">
              <svg className="w-full h-full opacity-30" viewBox="0 0 800 600">
                <motion.path
                  d="M100,500 Q400,100 700,500"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.path
                  d="M700,100 Q400,500 100,100"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
