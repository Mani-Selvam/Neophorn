import { Section, SectionHeader } from "@/components/Section";
import { BrainCircuit, Code2, Database, Globe2, ShieldCheck, Cpu } from "lucide-react";

function TechItem({ icon, name }: { icon: React.ReactNode, name: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-white">
        <div className="scale-150">{icon}</div>
      </div>
      <span className="text-sm font-medium text-muted-foreground">{name}</span>
    </div>
  );
}

export function Tech() {
  return (
    <Section id="tech" className="bg-gradient-to-b from-transparent to-black/40">
      <SectionHeader 
        title="Built on Modern Tech" 
        subtitle="We leverage the most advanced frameworks and models to build robust, scalable systems."
      />

      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        <TechItem icon={<BrainCircuit />} name="TensorFlow" />
        <TechItem icon={<Code2 />} name="Python" />
        <TechItem icon={<Database />} name="PostgreSQL" />
        <TechItem icon={<Globe2 />} name="React" />
        <TechItem icon={<ShieldCheck />} name="Security" />
        <TechItem icon={<Cpu />} name="Cloud Infrastructure" />
      </div>
    </Section>
  );
}
