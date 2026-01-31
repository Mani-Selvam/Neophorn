import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Section, SectionHeader } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Bot, 
  BrainCircuit, 
  BarChart3, 
  Layers, 
  Database, 
  Globe2, 
  ShieldCheck, 
  ArrowRight, 
  Code2, 
  Cpu, 
  Sparkles,
  Zap
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactRequestSchema, type InsertContactRequest } from "@shared/schema";
import { useSubmitContact } from "@/hooks/use-contact";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="fixed inset-0 z-0 grid-pattern opacity-30 pointer-events-none" />
      
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          {/* Ambient Glows */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -z-10" />

          <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
                <Sparkles className="w-4 h-4" />
                <span>Next-Gen AI Solutions Available Now</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-tight">
                Empowering Businesses <br /> with 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary text-glow mx-2">
                   Smarter AI
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
                Accelerate your digital transformation with autonomous software systems designed for the future of enterprise intelligence.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollTo('contact')}
                  className="w-full sm:w-auto text-lg px-8 py-6 rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-1 transition-all"
                >
                  Get Free Consultation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollTo('products')}
                  className="w-full sm:w-auto text-lg px-8 py-6 rounded-2xl border-white/10 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm hover:-translate-y-1 transition-all"
                >
                  View Solutions
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Hero Scroll Indicator */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50"
          >
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-current rounded-full" />
            </div>
          </motion.div>
        </section>

        {/* Products Section */}
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

        {/* Industries Section */}
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

        {/* Tech Stack */}
        <Section id="tech" className="bg-gradient-to-b from-transparent to-black/40">
          <SectionHeader 
            title="Built on Modern Tech" 
            subtitle="We leverage the most advanced frameworks and models to build robust, scalable systems."
          />

          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Tech Stack Icons using generic Lucide for representation */}
            <TechItem icon={<BrainCircuit />} name="TensorFlow" />
            <TechItem icon={<Code2 />} name="Python" />
            <TechItem icon={<Database />} name="PostgreSQL" />
            <TechItem icon={<Globe2 />} name="React" />
            <TechItem icon={<ShieldCheck />} name="Security" />
            <TechItem icon={<Cpu />} name="Cloud Infrastructure" />
          </div>
        </Section>

        {/* Clients Strip */}
        <div className="py-12 border-y border-white/5 bg-white/5 backdrop-blur-sm overflow-hidden">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm font-mono text-muted-foreground mb-8 tracking-widest uppercase">Trusted By Industry Leaders</p>
            <div className="flex justify-between items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500 px-4 md:px-20 overflow-x-auto gap-12 no-scrollbar">
              {/* Placeholders for logos */}
              {["Acme Corp", "GlobalTech", "Nebula Systems", "Quantum AI", "Future Dynamics"].map((client) => (
                <span key={client} className="text-xl font-display font-bold whitespace-nowrap">{client}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <Section id="contact">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Innovate?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule a consultation with our AI experts to discover how Neophron can accelerate your business growth.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Analysis & Strategy</h4>
                    <p className="text-muted-foreground text-sm">We assess your current infrastructure and identify opportunities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Code2 className="text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Custom Development</h4>
                    <p className="text-muted-foreground text-sm">Tailored solutions built specifically for your operational needs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-3xl">
              <ContactForm />
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

// Components specific to Home page
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

function TechItem({ icon, name }: { icon: React.ReactNode, name: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 text-white">
        {/* Render icon with size prop if possible, otherwise wrapper handles size */}
        <div className="scale-150">{icon}</div>
      </div>
      <span className="text-sm font-medium text-muted-foreground">{name}</span>
    </div>
  );
}

function ContactForm() {
  const mutation = useSubmitContact();
  
  const form = useForm<InsertContactRequest>({
    resolver: zodResolver(insertContactRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: ""
    }
  });

  function onSubmit(data: InsertContactRequest) {
    mutation.mutate(data, {
      onSuccess: () => form.reset()
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
          <p className="text-muted-foreground">Fill out the form below and our team will get back to you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" className="bg-black/20 border-white/10 focus:border-primary" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@company.com" className="bg-black/20 border-white/10 focus:border-primary" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="Acme Inc." className="bg-black/20 border-white/10 focus:border-primary" {...field} value={field.value || ''} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="How can we help you?" 
                  className="min-h-[120px] bg-black/20 border-white/10 focus:border-primary" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          disabled={mutation.isPending}
          className="w-full h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {mutation.isPending ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
