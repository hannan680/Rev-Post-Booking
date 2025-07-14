import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, RotateCcw } from "lucide-react";
import { Button } from "./ui/button";

interface AudioDemo {
  id: number;
  title: string;
  industry: string;
  duration: string;
  description: string;
  scenario: string;
}

const audioDemos: AudioDemo[] = [
  {
    id: 1,
    title: "Dental Practice - Inbound",
    industry: "Healthcare",
    duration: "",
    description: "AI handling appointment scheduling and patient inquiries for a busy dental office.",
    scenario: "Patient calling to schedule a cleaning appointment with specific time constraints"
  },
  {
    id: 2,
    title: "Roofing Company - Inbound", 
    industry: "Construction",
    duration: "",
    description: "Emergency roof repair call with detailed damage assessment and urgent scheduling.",
    scenario: "Homeowner with storm damage requiring immediate inspection and repair estimate"
  },
  {
    id: 3,
    title: "Medical Practice - Outbound",
    industry: "Healthcare", 
    duration: "",
    description: "AI conducting patient follow-ups and appointment confirmations for medical practice.",
    scenario: "Following up with patients post-procedure and scheduling routine check-ups"
  },
  {
    id: 4,
    title: "Legal Office - Outbound",
    industry: "Legal Services",
    duration: "",
    description: "AI reaching out to potential clients for consultation scheduling and case evaluation.",
    scenario: "Following up with leads who inquired about personal injury representation"
  },
  {
    id: 5,
    title: "Roofing Company - Outbound",
    industry: "Construction",
    duration: "",
    description: "Proactive outreach for roof maintenance and inspection services to existing customers.",
    scenario: "Seasonal maintenance reminders and upselling additional roofing services"
  },
  {
    id: 6,
    title: "Real Estate Investing - Outbound",
    industry: "Real Estate",
    duration: "",
    description: "AI contacting property owners for potential investment opportunities and acquisitions.",
    scenario: "Reaching out to homeowners about cash offers for their properties"
  }
];

const AudioDemos = () => {
  const [playingAudio, setPlayingAudio] = useState<number | null>(null);
  const [currentTimes, setCurrentTimes] = useState<Record<number, number>>({});
  const [durations, setDurations] = useState<Record<number, number>>({});
  const audioRefs = useRef<Record<number, HTMLAudioElement>>({});

  useEffect(() => {
    // Initialize audio elements
    audioDemos.forEach(demo => {
      if (!audioRefs.current[demo.id]) {
        audioRefs.current[demo.id] = new Audio();
        // In real implementation, you'd set the src to actual audio files
        // audioRefs.current[demo.id].src = `/audio/demo-${demo.id}.mp3`;
        
        const audio = audioRefs.current[demo.id];
        
        audio.addEventListener('loadedmetadata', () => {
          setDurations(prev => ({ ...prev, [demo.id]: audio.duration }));
        });
        
        audio.addEventListener('timeupdate', () => {
          setCurrentTimes(prev => ({ ...prev, [demo.id]: audio.currentTime }));
        });
        
        audio.addEventListener('ended', () => {
          setPlayingAudio(null);
          setCurrentTimes(prev => ({ ...prev, [demo.id]: 0 }));
        });
      }
    });

    return () => {
      // Cleanup
      Object.values(audioRefs.current).forEach(audio => {
        audio.pause();
        audio.removeEventListener('loadedmetadata', () => {});
        audio.removeEventListener('timeupdate', () => {});
        audio.removeEventListener('ended', () => {});
      });
    };
  }, []);

  const toggleAudio = (demoId: number) => {
    const currentAudio = audioRefs.current[demoId];
    
    if (playingAudio && playingAudio !== demoId) {
      // Pause currently playing audio
      audioRefs.current[playingAudio].pause();
    }

    if (playingAudio === demoId) {
      // Pause current audio
      currentAudio.pause();
      setPlayingAudio(null);
    } else {
      // Play new audio
      currentAudio.play().catch(console.error);
      setPlayingAudio(demoId);
    }
  };

  const resetAudio = (demoId: number) => {
    const audio = audioRefs.current[demoId];
    audio.currentTime = 0;
    setCurrentTimes(prev => ({ ...prev, [demoId]: 0 }));
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const getProgress = (demoId: number) => {
    const current = currentTimes[demoId] || 0;
    const duration = durations[demoId] || 1;
    return (current / duration) * 100;
  };

  return (
    <section id="demos" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-super-bright mb-6">
            Hear Your AI In Action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real conversations from different industries showing how our AI handles complex customer interactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {audioDemos.map((demo, index) => {
            const isPlaying = playingAudio === demo.id;
            const currentTime = currentTimes[demo.id] || 0;
            const progress = getProgress(demo.id);
            
            return (
              <div 
                key={demo.id}
                className="bg-gradient-card card-glow rounded-xl p-6 hover:shadow-elegant transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        {demo.industry}
                      </span>
                      
                    </div>
                    <h3 className="font-semibold text-super-bright mb-2">{demo.title}</h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-2">{demo.description}</p>
                <p className="text-xs text-muted-foreground/80 italic mb-4">
                  Scenario: {demo.scenario}
                </p>

                {/* Audio Controls */}
                <div className="space-y-3">
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{formatTime(currentTime)}</span>
                      <span>Ready to play</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary rounded-full transition-all duration-200"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Control Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleAudio(demo.id)}
                        className="w-10 h-10"
                      >
                        {isPlaying ? (
                          <Pause className="w-4 h-4" />
                        ) : (
                          <Play className="w-4 h-4" />
                        )}
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => resetAudio(demo.id)}
                        className="w-8 h-8"
                      >
                        <RotateCcw className="w-3 h-3" />
                      </Button>
                    </div>

                    {/* Status Indicator */}
                    <div className="flex items-center space-x-2">
                      {isPlaying && (
                        <>
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                          <span className="text-xs text-primary font-medium">Playing</span>
                        </>
                      )}
                      <Volume2 className="w-4 h-4 text-muted-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AudioDemos;