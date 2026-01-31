import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 md:py-32 relative", className)}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ 
  title, 
  subtitle, 
  align = "center" 
}: { 
  title: string; 
  subtitle: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("mb-16", align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl")}>
      <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/60">
        {title}
      </h2>
      <p className="text-lg text-muted-foreground">
        {subtitle}
      </p>
    </div>
  );
}
