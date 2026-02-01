import { Section } from "@/components/Section";
import { useState } from "react";

const techCategories = [
  {
    title: "AI & Machine Learning",
    techs: [
      { name: "PyTorch", color: "#EE4C2C" },
      { name: "TensorFlow", color: "#FF6F00" },
      { name: "OpenAI", color: "#10A37F" },
      { name: "Apache Spark", color: "#E25A1C" },
    ],
  },
  {
    title: "Frontend",
    techs: [
      { name: "React", color: "#61DAFB" },
      { name: "Vue.js", color: "#4FC08D" },
      { name: "Angular", color: "#DD0031" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "HTML5", color: "#E34F26" },
      { name: "CSS3", color: "#1572B6" },
    ],
  },
  {
    title: "Backend",
    techs: [
      { name: "Node.js", color: "#339933" },
      { name: "Python", color: "#3776AB" },
      { name: "FastAPI", color: "#009688" },
      { name: "Express.js", color: "#ffffff" },
      { name: "PHP", color: "#777BB4" },
      { name: "Laravel", color: "#FF2D20" },
    ],
  },
  {
    title: "Databases",
    techs: [
      { name: "PostgreSQL", color: "#336791" },
      { name: "MongoDB", color: "#47A248" },
      { name: "MySQL", color: "#4479A1" },
      { name: "Redis", color: "#DC382D" },
      { name: "Firebase", color: "#FFCA28" },
    ],
  },
  {
    title: "DevOps & Cloud",
    techs: [
      { name: "Docker", color: "#2496ED" },
      { name: "Kubernetes", color: "#326CE5" },
      { name: "AWS", color: "#FF9900" },
      { name: "NGINX", color: "#009639" },
      { name: "GitHub", color: "#ffffff" },
    ],
  },
  {
    title: "Web3 & Blockchain",
    techs: [
      { name: "Solidity", color: "#363636" },
      { name: "Blockchain", color: "#F7931A" },
    ],
  },
];

function TechCard({ name, color }: { name: string; color: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`tech-card-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
        style={{ backgroundColor: color, opacity: isHovered ? 0.3 : 0 }}
      />
      
      <div
        className="relative px-5 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm
                   transition-all duration-300 cursor-pointer
                   hover:border-white/30 hover:bg-white/10 hover:scale-105 hover:-translate-y-1"
        style={{
          boxShadow: isHovered ? `0 20px 40px -10px ${color}40` : 'none',
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-3 h-3 rounded-full transition-all duration-300 group-hover:scale-125"
            style={{ 
              backgroundColor: color,
              boxShadow: isHovered ? `0 0 20px ${color}` : 'none',
            }}
          />
          <span className="text-white/90 font-medium text-sm tracking-wide group-hover:text-white transition-colors">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
}

function CategorySection({ title, techs, index }: { 
  title: string; 
  techs: { name: string; color: string }[];
  index: number;
}) {
  return (
    <div 
      className="space-y-4"
      style={{ 
        animationDelay: `${index * 100}ms`,
      }}
    >
      <h3 className="text-white/50 text-xs font-semibold uppercase tracking-[0.2em] pl-1">
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {techs.map((tech) => (
          <TechCard key={tech.name} name={tech.name} color={tech.color} />
        ))}
      </div>
    </div>
  );
}

export function Tech() {
  return (
    <Section id="tech" className="relative min-h-screen bg-black overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
            filter: 'blur(120px)',
          }}
        />
      </div>

      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mb-16 md:mb-24">
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-4">
            Technologies
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Tech Stack
          </h2>
          <p className="text-white/50 text-lg md:text-xl max-w-2xl leading-relaxed">
            A comprehensive toolkit of modern technologies powering innovative solutions 
            across AI, web development, cloud infrastructure, and blockchain.
          </p>
        </div>

        <div className="grid gap-10 md:gap-12">
          {techCategories.map((category, index) => (
            <CategorySection
              key={category.title}
              title={category.title}
              techs={category.techs}
              index={index}
            />
          ))}
        </div>

        <div className="mt-20 md:mt-32 pt-12 border-t border-white/10">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-white/30 text-sm">
                Always learning, always building
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-white/50 text-sm">Open to new technologies</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
