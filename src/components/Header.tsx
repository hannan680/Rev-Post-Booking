import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Phone, Zap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* RevSquared AI Logo */}
          <div className="flex items-center space-x-3">
            {/* Logo Icon - Neon Cyan Square with R² and Phone */}
            <div className="relative">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center border-2 border-primary shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
                <span className="text-background font-audiowide font-bold text-sm">R²</span>
              </div>
              <Phone className="absolute -top-1 -right-1 w-5 h-5 text-accent drop-shadow-[0_0_8px_hsl(var(--accent)/0.6)]" />
            </div>
            {/* Brand Name */}
            <div className="flex flex-col">
              <div className="flex items-baseline space-x-1">
                <span className="text-xl font-pacifico text-primary">RevSquared</span>
                <span className="text-xl font-pacifico text-accent">AI</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#process" className="text-foreground hover:text-primary transition-colors">
              Our Process
            </a>
            <a href="#success-stories" className="text-foreground hover:text-primary transition-colors">
              Success Stories
            </a>
            <a href="#demos" className="text-foreground hover:text-primary transition-colors">
              Live Demos
            </a>
            <a href="#faq" className="text-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <Button variant="neon" size="lg">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#process" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Process
              </a>
              <a 
                href="#success-stories" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Success Stories
              </a>
              <a 
                href="#demos" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Live Demos
              </a>
              <a 
                href="#faq" 
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <Button variant="neon" size="lg" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;