import { Section } from "@/components/Section";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechVentures Inc.",
    content: "Working with this team transformed our entire digital infrastructure. Their expertise in AI and cloud solutions helped us scale 10x in just 6 months. Absolutely exceptional work!",
    avatar: "SJ",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CTO, InnovateLabs",
    content: "The level of technical expertise and attention to detail is unmatched. They delivered a complex blockchain solution that exceeded all our expectations. Highly recommended!",
    avatar: "MC",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Director, FutureScale",
    content: "From concept to deployment, the entire process was seamless. The team's understanding of modern web technologies and their commitment to quality is remarkable.",
    avatar: "ER",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder, DataDriven AI",
    content: "Their machine learning solutions helped us automate 80% of our manual processes. The ROI was visible within the first quarter. Incredible team to work with!",
    avatar: "DK",
    rating: 5,
  },
  {
    id: 5,
    name: "Amanda Foster",
    role: "VP Engineering, CloudFirst",
    content: "Professional, innovative, and reliable. They built our entire microservices architecture from scratch and it's been running flawlessly for over a year.",
    avatar: "AF",
    rating: 5,
  },
];

function TestimonialCard({ 
  testimonial, 
  isActive,
  position 
}: { 
  testimonial: typeof testimonials[0];
  isActive: boolean;
  position: number;
}) {
  return (
    <div
      className="absolute top-1/2 left-1/2 w-full max-w-lg transition-all duration-500 ease-out"
      style={{
        transform: `translate(-50%, -50%) translateX(${position * 120}%) scale(${isActive ? 1 : 0.85})`,
        opacity: Math.abs(position) > 1 ? 0 : isActive ? 1 : 0.5,
        zIndex: isActive ? 10 : 5,
        filter: isActive ? 'none' : 'blur(2px)',
      }}
    >
      <div 
        className={`relative p-8 rounded-2xl border transition-all duration-300 ${
          isActive 
            ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/20 shadow-2xl' 
            : 'bg-white/5 border-white/10'
        }`}
      >
        {/* Quote icon */}
        <div className="absolute -top-4 -left-2">
          <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
            <Quote className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Content */}
        <p className="text-white/80 text-lg leading-relaxed mb-6 mt-4">
          "{testimonial.content}"
        </p>

        {/* Rating */}
        <div className="flex gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>

        {/* Author */}
        <div className="flex items-center gap-4">
          <div 
            className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold"
          >
            {testimonial.avatar}
          </div>
          <div>
            <h4 className="text-white font-semibold">{testimonial.name}</h4>
            <p className="text-white/50 text-sm">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <Section id="testimonials" className="relative min-h-[80vh] bg-black overflow-hidden py-20">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-purple-400 font-mono text-sm tracking-widest uppercase mb-3">
            Testimonials
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Trusted by industry leaders and innovative startups worldwide
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative h-[400px] max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => {
            let position = index - activeIndex;
            if (position > testimonials.length / 2) position -= testimonials.length;
            if (position < -testimonials.length / 2) position += testimonials.length;
            
            return (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                isActive={index === activeIndex}
                position={position}
              />
            );
          })}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            onClick={goToPrev}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
            data-testid="button-testimonial-prev"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setActiveIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'w-8 bg-white' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                data-testid={`button-testimonial-dot-${index}`}
              />
            ))}
          </div>

          <button
            onClick={goToNext}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all"
            data-testid="button-testimonial-next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}
