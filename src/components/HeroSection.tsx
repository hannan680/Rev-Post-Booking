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
            Custom AI Employee
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Development Journey
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            A transparent look at RevSquared for Due Diligence & Decision Making.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
              Download The AI Playbook
            </Button>
          </div>
        </div>

        {/* Main Video Player */}
        <div className="max-w-4xl mx-auto mb-12 animate-slide-in-right">
          <div className="relative rounded-2xl overflow-hidden shadow-card bg-card border-2 border-primary/30 hover-glow-aqua">
            <div 
              className="relative aspect-video bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImage})` }}
            >
              {/* Video Placeholder with Controls */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-primary/10 flex items-center justify-center">
                <div className="text-center">
                  <button
                    onClick={togglePlay}
                    className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4 mx-auto transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_hsl(var(--primary)/0.6)] border-2 border-white/20"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-background" />
                    ) : (
                      <Play className="w-8 h-8 text-background ml-1" />
                    )}
                  </button>
                  <p className="text-white text-lg font-audiowide font-semibold tracking-wide drop-shadow-lg">
                    Watch Our Complete AI Development Process
                  </p>
                </div>
              </div>

              {/* Video Controls Overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={togglePlay}
                      className="text-white hover:bg-white/20"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleMute}
                      className="text-white hover:bg-white/20"
                    >
                      <Volume2 className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="flex-1 mx-4">
                    <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-1/3 rounded-full"></div>
                    </div>
                  </div>
                  
                  <span className="text-white text-sm">Playing...</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto animate-fade-in">
          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 text-center hover:bg-card/70 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-foreground font-medium mb-1">Client Retention</div>
            <div className="text-muted-foreground text-sm">Every client stays with us</div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 text-center hover:bg-card/70 transition-all duration-300">
            <div className="text-3xl font-bold text-accent mb-2">$2M+</div>
            <div className="text-foreground font-medium mb-1">Revenue Generated</div>
            <div className="text-muted-foreground text-sm">For clients combined</div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 text-center hover:bg-card/70 transition-all duration-300">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-foreground font-medium mb-1">Businesses Automated</div>
            <div className="text-muted-foreground text-sm">Across diverse industries</div>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 text-center hover:bg-card/70 transition-all duration-300">
            <div className="text-3xl font-bold text-accent mb-2">30 Days</div>
            <div className="text-foreground font-medium mb-1">Average Delivery</div>
            <div className="text-muted-foreground text-sm">From start to deployment</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;