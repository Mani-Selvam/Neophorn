import { Section } from "@/components/Section";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";

const technologies = [
  // AI & Infrastructure
  { name: "PyTorch", color: "#EE4C2C", category: "ai", initials: "Pt" },
  { name: "TensorFlow", color: "#FF6F00", category: "ai", initials: "TF" },
  { name: "OpenAI", color: "#10A37F", category: "ai", initials: "AI" },
  { name: "Spark", color: "#E25A1C", category: "ai", initials: "Sp" },
  
  // Frontend
  { name: "React", color: "#61DAFB", category: "frontend", initials: "Re" },
  { name: "Vue.js", color: "#4FC08D", category: "frontend", initials: "Vu" },
  { name: "Angular", color: "#DD0031", category: "frontend", initials: "Ng" },
  { name: "JavaScript", color: "#F7DF1E", category: "frontend", initials: "JS" },
  { name: "TypeScript", color: "#3178C6", category: "frontend", initials: "TS" },
  { name: "HTML5", color: "#E34F26", category: "frontend", initials: "H5" },
  { name: "CSS3", color: "#1572B6", category: "frontend", initials: "C3" },
  
  // Backend
  { name: "Node.js", color: "#339933", category: "backend", initials: "No" },
  { name: "Python", color: "#3776AB", category: "backend", initials: "Py" },
  { name: "FastAPI", color: "#009688", category: "backend", initials: "FA" },
  { name: "Express", color: "#ffffff", category: "backend", initials: "Ex" },
  { name: "PHP", color: "#777BB4", category: "backend", initials: "Ph" },
  { name: "Laravel", color: "#FF2D20", category: "backend", initials: "La" },
  
  // Database
  { name: "PostgreSQL", color: "#336791", category: "database", initials: "Pg" },
  { name: "MongoDB", color: "#47A248", category: "database", initials: "Mg" },
  { name: "MySQL", color: "#4479A1", category: "database", initials: "My" },
  { name: "Redis", color: "#DC382D", category: "database", initials: "Rd" },
  { name: "Firebase", color: "#FFCA28", category: "database", initials: "Fb" },
  
  // Cloud & DevOps
  { name: "Docker", color: "#2496ED", category: "cloud", initials: "Dk" },
  { name: "Kubernetes", color: "#326CE5", category: "cloud", initials: "K8" },
  { name: "AWS", color: "#FF9900", category: "cloud", initials: "Aw" },
  { name: "NGINX", color: "#009639", category: "cloud", initials: "Nx" },
  { name: "GitHub", color: "#ffffff", category: "cloud", initials: "Gh" },
];

const categories = [
  { id: "all", label: "ALL" },
  { id: "ai", label: "AI & ML" },
  { id: "frontend", label: "FRONTEND" },
  { id: "backend", label: "BACKEND" },
  { id: "database", label: "DATABASE" },
  { id: "cloud", label: "CLOUD" },
];

function TechIcon({ 
  tech, 
  index, 
  total,
  isVisible 
}: { 
  tech: typeof technologies[0]; 
  index: number;
  total: number;
  isVisible: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  
  // Calculate 3D position - spread across rows with perspective
  const row = Math.floor(index / 9);
  const col = index % 9;
  const totalRows = Math.ceil(total / 9);
  
  // Create depth effect - items in back rows are smaller and higher
  const zIndex = totalRows - row;
  const scale = 0.6 + (row / totalRows) * 0.4;
  const yOffset = (totalRows - row - 1) * 60;
  const xOffset = (col - 4) * 110;
  
  return (
    <div
      className="absolute transition-all duration-500"
      style={{
        left: `calc(50% + ${xOffset * scale}px)`,
        bottom: `${80 + yOffset}px`,
        transform: `translateX(-50%) scale(${scale})`,
        zIndex: zIndex * 10,
        opacity: isVisible ? 1 : 0,
        transitionDelay: `${index * 30}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`tech-icon-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      {/* Icon container with 3D effect */}
      <div 
        className="relative cursor-pointer transition-all duration-300"
        style={{
          transform: isHovered ? 'translateY(-20px) scale(1.15)' : 'translateY(0) scale(1)',
        }}
      >
        {/* Main icon */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-lg shadow-2xl transition-all duration-300"
          style={{
            background: `linear-gradient(135deg, ${tech.color}ee, ${tech.color}aa)`,
            color: tech.color === '#F7DF1E' || tech.color === '#FFCA28' || tech.color === '#ffffff' ? '#000' : '#fff',
            boxShadow: isHovered 
              ? `0 25px 50px -12px ${tech.color}80, 0 0 40px ${tech.color}40` 
              : `0 10px 30px -10px ${tech.color}60`,
          }}
        >
          {tech.initials}
        </div>
        
        {/* Reflection */}
        <div
          className="absolute top-full left-0 w-16 h-16 rounded-2xl opacity-30 blur-sm"
          style={{
            background: `linear-gradient(to bottom, ${tech.color}40, transparent)`,
            transform: 'scaleY(-0.5) translateY(-16px)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)',
          }}
        />
        
        {/* Tooltip */}
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white text-black text-xs font-semibold rounded-lg whitespace-nowrap transition-all duration-200 pointer-events-none"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: `translateX(-50%) translateY(${isHovered ? 0 : 10}px)`,
          }}
        >
          {tech.name}
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white" />
        </div>
      </div>
    </div>
  );
}

export function Tech() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTechs = useMemo(() => {
    return technologies.filter(tech => {
      const matchesCategory = activeCategory === "all" || tech.category === activeCategory;
      const matchesSearch = tech.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <Section id="tech" className="relative min-h-screen bg-black overflow-hidden py-16">
      {/* Gradient glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background: 'radial-gradient(circle, #10b981 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      {/* Reflective floor gradient */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-48"
        style={{
          background: 'linear-gradient(to top, rgba(255,255,255,0.02), transparent)',
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-3">
            Technologies
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Powering innovation with cutting-edge technologies
          </p>
        </div>

        {/* 3D Tech Icons Display */}
        <div className="relative h-[400px] md:h-[500px] mb-12 perspective-1000">
          {filteredTechs.map((tech, index) => (
            <TechIcon
              key={tech.name}
              tech={tech}
              index={index}
              total={filteredTechs.length}
              isVisible={true}
            />
          ))}
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 max-w-4xl mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1 bg-white/5 rounded-full p-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-white text-black'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
                data-testid={`filter-${cat.id}`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-full text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-white/30 w-40"
              data-testid="input-tech-search"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
