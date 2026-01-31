export function Clients() {
  return (
    <div className="py-12 border-y border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-mono text-muted-foreground mb-8 tracking-widest uppercase">Trusted By Industry Leaders</p>
        <div className="flex justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500 px-4 md:px-20 overflow-x-auto gap-12 no-scrollbar">
          {["Acme Corp", "GlobalTech", "Nebula Systems", "Quantum AI", "Future Dynamics"].map((client) => (
            <span key={client} className="text-xl font-display font-bold whitespace-nowrap">{client}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
