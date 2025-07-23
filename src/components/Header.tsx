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
            {/* Actual RevSquared AI Logo */}
            <img
              src="/lovable-uploads/48cca130-afa7-4e1a-93df-545e6f93cc23.png"
              alt="RevSquared AI Logo"
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#videos"
              className="text-foreground hover:text-primary transition-colors"
            >
              Our Process
            </a>
            <a
              href="#success-stories"
              className="text-foreground hover:text-primary transition-colors"
            >
              Success Stories
            </a>
            <a
              href="#demos"
              className="text-foreground hover:text-primary transition-colors"
            >
              Live Demos
            </a>
            <a
              href="#faq"
              className="text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#videos"
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
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
