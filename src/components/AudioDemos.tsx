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
    title: "Dental Appointment Booking",
    industry: "Dental Services",
    duration: "2:15",
    description: "AI handles dental appointment request, checks availability, and schedules cleaning",
    scenario: "Patient calling to schedule routine dental cleaning appointment"
  },
  {
    id: 2,
    title: "Roofing Damage Assessment",
    industry: "Roofing Services",
    duration: "2:45", 
    description: "AI qualifies storm damage claim, gathers details, and schedules inspection",
    scenario: "Homeowner calling after hailstorm damaged their roof"
  },
  {
    id: 3,
    title: "Doctor Appointment Outreach",
    industry: "Medical Services",
    duration: "1:50",
    description: "AI conducts outbound call for annual checkup reminder and appointment scheduling",
    scenario: "Automated outreach to patients due for annual physical examination"
  },
  {
    id: 4,
    title: "Legal Consultation Outreach",
    industry: "Legal Services", 
    duration: "2:30",
    description: "AI reaches out to potential clients for personal injury consultation",
    scenario: "Following up on legal inquiry form submission for accident case"
  },
  {
    id: 5,
    title: "Roofing Sales Outreach",
    industry: "Roofing Services",
    duration: "3:10",
    description: "AI conducts outbound sales call for roof replacement services",
    scenario: "Proactive outreach to homeowners in targeted neighborhood for roof upgrades"
  },
  {
    id: 6,
    title: "Real Estate Investment Lead",
    industry: "Real Estate Investment",
    duration: "2:55",
    description: "AI qualifies property sellers for cash purchase and schedules evaluation",
    scenario: "Outbound call to homeowner about quick cash sale opportunity"
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
                      <span className="text-muted-foreground text-sm">{demo.duration}</span>
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
                      <span>{demo.duration}</span>
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