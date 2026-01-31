import { Section, SectionHeader } from "@/components/Section";

function IndustryCard({ title, items, gradient }: { title: string, items: string[], gradient: string }) {
  return (
    <div className={`p-8 rounded-2xl bg-gradient-to-br ${gradient} border border-white/10`}>
      <h3 className="text-2xl font-bold mb-6 text-white">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-white/80">
            <div className="w-1.5 h-1.5 rounded-full bg-white" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Industries() {
  return (
    <Section id="industries">
      <SectionHeader 
        title="Transforming Industries" 
        subtitle="Tailored AI solutions that address the unique challenges of modern enterprise sectors."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <IndustryCard 
          title="Healthcare"
          items={["Patient Analytics", "Resource Allocation", "Diagnostic Assist"]}
          gradient="from-blue-500/20 to-cyan-500/20"
        />
        <IndustryCard 
          title="Finance"
          items={["Fraud Detection", "Algorithmic Trading", "Risk Assessment"]}
          gradient="from-purple-500/20 to-pink-500/20"
        />
        <IndustryCard 
          title="Manufacturing"
          items={["Predictive Maintenance", "Quality Control", "Supply Chain"]}
          gradient="from-orange-500/20 to-red-500/20"
        />
      </div>
    </Section>
  );
}
