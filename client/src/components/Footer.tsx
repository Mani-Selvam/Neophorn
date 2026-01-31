import { Cpu, Twitter, Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black/40 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
                <Cpu className="w-5 h-5 text-primary" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                Neophron<span className="text-primary">Tech</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pioneering the future of enterprise intelligence with cutting-edge AI solutions and autonomous software systems.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Enterprise ERP</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Intelligent CRM</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Inventory AI</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Process Automation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors text-white">
                <Github className="w-4 h-4" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              hello@neophron.tech
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Neophron Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
