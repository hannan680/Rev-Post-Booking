import { useState } from "react";
import { Button } from "./ui/button";
import { Play, Pause, Volume2 } from "lucide-react";

interface Video {
  id: number;
  title: string;
  duration: string;
  description: string;
  thumbnail: string;
}

const videos: Video[] = [
  {
    id: 1,
    title: "The 147-Page Custom Prompt",
    duration: "3:45",
    description: "Deep dive into our comprehensive AI training methodology",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    id: 2,
    title: "Live AI Conversation Test",
    duration: "4:20",
    description: "Watch real-time AI interactions with potential customers",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    id: 3,
    title: "Client Communication Process",
    duration: "2:30",
    description: "Our systematic approach to client collaboration",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    id: 4,
    title: "SMS AI & Pipeline Demo",
    duration: "3:15",
    description: "See how our AI handles SMS leads and sales pipelines",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    id: 5,
    title: "Client Success Stories",
    duration: "2:50",
    description: "Real results from businesses using our AI systems",
    thumbnail: "/api/placeholder/300/200"
  },
  {
    id: 6,
    title: "ROI Calculator Walkthrough",
    duration: "4:10",
    description: "Calculate your potential return on AI investment",
    thumbnail: "/api/placeholder/300/200"
  }
];

const BreakoutVideos = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState<number | null>(null);
  const [playingStates, setPlayingStates] = useState<Record<number, boolean>>({});

  const toggleVideo = (videoId: number) => {
    // Pause currently playing video if different
    if (currentlyPlaying && currentlyPlaying !== videoId) {
      setPlayingStates(prev => ({ ...prev, [currentlyPlaying]: false }));
    }

    // Toggle the clicked video
    const newState = !playingStates[videoId];
    setPlayingStates(prev => ({ ...prev, [videoId]: newState }));
    
    if (newState) {
      setCurrentlyPlaying(videoId);
    } else {
      setCurrentlyPlaying(null);
    }
  };

  return (
    <section id="videos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-super-bright mb-6">
            Explore Our Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get an inside look at how we develop custom AI employees for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className="group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => toggleVideo(video.id)}
            >
              <div className="bg-gradient-card card-glow rounded-xl overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                      {playingStates[video.id] ? (
                        <Pause className="w-6 h-6 text-white" />
                      ) : (
                        <Play className="w-6 h-6 text-white ml-1" />
                      )}
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>

                  {/* Playing Indicator */}
                  {playingStates[video.id] && (
                    <div className="absolute bottom-2 left-2 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-sm font-medium">Playing</span>
                    </div>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="font-semibold text-super-bright mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {video.description}
                  </p>

                  {/* Progress Bar (shown when playing) */}
                  {playingStates[video.id] && (
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                        <span>1:23</span>
                        <span>{video.duration}</span>
                      </div>
                      <div className="h-1 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-1/3 rounded-full transition-all duration-300"></div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreakoutVideos;