import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: "Products", id: "products" },
    { name: "Industries", id: "industries" },
    { name: "Tech Stack", id: "tech" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md border-b border-black/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group cursor-pointer">
          <span className="font-display font-bold text-2xl tracking-tighter text-black">
            BRAND
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-8">
            <Link href="/">
              <a className="text-sm font-medium text-black/60 hover:text-black transition-colors">Home</a>
            </Link>
            <a href="#about" className="text-sm font-medium text-black/60 hover:text-black transition-colors">About</a>
            <a href="#contact" className="text-sm font-medium text-black/60 hover:text-black transition-colors">Contact</a>
          </div>
          <Button 
            className="bg-white text-black hover:bg-white/90 border border-black/10 rounded-full px-8 py-2 h-auto text-sm font-bold shadow-sm"
          >
            Explore Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-t border-white/5 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left py-2 text-base font-medium text-muted-foreground hover:text-white"
                >
                  {link.name}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection("contact")}
                className="w-full mt-2"
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
