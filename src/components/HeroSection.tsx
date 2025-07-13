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
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-audiowide font-bold text-foreground mb-6 leading-tight tracking-wider">
            Behind the Scenes:<br />
            <span className="text-neon-aqua">
              How We Build Your Custom 
            </span>
            <br />
            <span className="text-neon-magenta font-pacifico text-5xl md:text-7xl">
              AI Employee
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-manrope">
            Complete due diligence materials for businesses investing 
            <span className="text-neon-yellow font-semibold"> $5K-7.5K </span>
            in custom AI automation
          </p>
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
                  <p className="text-warning font-semibold drop-shadow-lg">12:45 duration</p>
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
          <div className="text-center p-6 rounded-xl bg-gradient-card card-glow hover-glow-aqua transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_hsl(var(--primary)/0.3)]">
              <span className="text-2xl font-audiowide font-bold text-background">100%</span>
            </div>
            <h3 className="font-audiowide font-semibold text-bright mb-2 tracking-wide">Client Retention</h3>
            <p className="text-muted-foreground text-sm font-manrope">Every client stays with us</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-card card-glow-magenta hover-glow-magenta transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_hsl(var(--accent)/0.3)]">
              <span className="text-2xl font-audiowide font-bold text-background">$2M+</span>
            </div>
            <h3 className="font-audiowide font-semibold text-bright mb-2 tracking-wide">Revenue Generated</h3>
            <p className="text-muted-foreground text-sm font-manrope">For our clients combined</p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-card card-glow-yellow transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--warning)/0.3)]">
            <div className="w-16 h-16 bg-gradient-to-br from-warning to-warning/30 rounded-full flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_hsl(var(--warning)/0.3)]">
              <span className="text-2xl font-audiowide font-bold text-background">50+</span>
            </div>
            <h3 className="font-audiowide font-semibold text-bright mb-2 tracking-wide">Businesses Automated</h3>
            <p className="text-muted-foreground text-sm font-manrope">Across diverse industries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;