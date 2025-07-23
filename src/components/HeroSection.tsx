import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Play, Pause, Volume2 } from "lucide-react";
import heroImage from "../assets/hero-bg.jpg";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="pt-20 bg-gradient-hero retro-grid">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
              RevSquared AI Development Process
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-8 leading-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Inside RevSquared:
            </span>
            <br />
            How We Actually Build Your AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            A complete look at our process, case studies, and what to expect on
            our call
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/Rev2 Ebook.pdf" download="Rev2 Ebook.pdf">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground"
              >
                Download The AI Playbook
              </Button>
            </a>
          </div>
        </div>

        {/* Main Video Player */}
        <div className="max-w-4xl mx-auto mb-12 animate-slide-in-right">
          <div className="relative rounded-2xl overflow-hidden shadow-card bg-card border-2 border-primary/30 hover-glow-aqua">
            <div className="relative aspect-video bg-cover bg-center">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yT_z70FK5_A"
                title="Main Hero Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto animate-fade-in">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 text-center hover:bg-card/70 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-foreground font-medium mb-1">
              Client Retention
            </div>
            <div className="text-muted-foreground text-sm">
              Every client stays with us
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 text-center hover:bg-card/70 transition-all duration-300">
            <div className="text-3xl font-bold text-accent mb-2">$2M+</div>
            <div className="text-foreground font-medium mb-1">
              Revenue Generated
            </div>
            <div className="text-muted-foreground text-sm">
              For clients combined
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 text-center hover:bg-card/70 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-foreground font-medium mb-1">
              Businesses Automated
            </div>
            <div className="text-muted-foreground text-sm">
              Across diverse industries
            </div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 text-center hover:bg-card/70 transition-all duration-300">
            <div className="text-3xl font-bold text-accent mb-2">30 Days</div>
            <div className="text-foreground font-medium mb-1">
              Average Delivery
            </div>
            <div className="text-muted-foreground text-sm">
              From start to deployment
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
