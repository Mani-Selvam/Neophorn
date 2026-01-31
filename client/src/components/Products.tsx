import { Section, SectionHeader } from "@/components/Section";
import { motion } from "framer-motion";
import { Database, Bot, Layers, Zap } from "lucide-react";

function ProductCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-card p-8 rounded-2xl group hover:border-primary/50 transition-colors"
    >
      <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl border border-white/10 group-hover:bg-primary/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
}

export function Products() {
  return (
    <Section id="products" className="bg-black/20">
      <SectionHeader 
        title="Intelligent Product Suite" 
        subtitle="Comprehensive AI-driven platforms engineered to optimize every facet of your business operations."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard 
          icon={<Database className="w-10 h-10 text-secondary" />}
          title="Enterprise ERP"
          description="Unified resource planning with predictive analytics and automated supply chain optimization."
        />
        <ProductCard 
          icon={<Bot className="w-10 h-10 text-primary" />}
          title="AI CRM"
          description="Customer relationship management powered by NLP for sentiment analysis and lead scoring."
        />
        <ProductCard 
          icon={<Layers className="w-10 h-10 text-purple-400" />}
          title="Smart IMS"
          description="Real-time inventory management with computer vision tracking and demand forecasting."
        />
        <ProductCard 
          icon={<Zap className="w-10 h-10 text-yellow-400" />}
          title="Business Automation"
          description="End-to-end workflow automation to eliminate repetitive tasks and boost efficiency."
        />
      </div>
    </Section>
  );
}
