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
    <section className="pt-20 bg-gradient-hero">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Behind the Scenes:<br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              How We Build Your Custom AI Employee
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Complete due diligence materials for businesses investing $5K-7.5K in custom AI automation
          </p>
        </div>

        {/* Main Video Player */}
        <div className="max-w-4xl mx-auto mb-12 animate-slide-in-right">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant bg-card">
            <div 
              className="relative aspect-video bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImage})` }}
            >
              {/* Video Placeholder with Controls */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="text-center">
                  <button
                    onClick={togglePlay}
                    className="w-20 h-20 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center mb-4 mx-auto transition-all duration-300 hover:scale-110"
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </button>
                  <p className="text-white text-lg font-semibold">
                    Watch Our Complete AI Development Process
                  </p>
                  <p className="text-white/80">12:45 duration</p>
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
                  
                  <span className="text-white text-sm">4:20 / 12:45</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in">
          <div className="text-center p-6 rounded-xl bg-card shadow-card border border-border/50">
            <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-success">100%</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Client Retention</h3>
            <p className="text-muted-foreground text-sm">Every client stays with us</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-card shadow-card border border-border/50">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">$2M+</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Revenue Generated</h3>
            <p className="text-muted-foreground text-sm">For our clients combined</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-card shadow-card border border-border/50">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-accent">50+</span>
            </div>
            <h3 className="font-semibold text-foreground mb-2">Businesses Automated</h3>
            <p className="text-muted-foreground text-sm">Across diverse industries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;