import { useState } from "react";
import { Button } from "./ui/button";
import { Play, Pause, Volume2 } from "lucide-react";
interface Video {
  id: number;
  title: string;
  description: string;
  url: string;
}
const videos: Video[] = [
  {
    id: 1,
    title: "Experience A Live Demo Call",
    description: "Watch a real demo call in action.",
    url: "https://youtu.be/wOP4lzBXIJM",
  },
  {
    id: 2,
    title: "Why choose RevSquared",
    description: "Discover what makes RevSquared unique.",
    url: "https://youtu.be/LujN3PqXN68",
  },
  {
    id: 3,
    title: "Calculate Your AI ROI",
    description: "See how to calculate your AI return on investment.",
    url: "https://youtu.be/FQO97M4jGwA",
  },
  {
    id: 4,
    title: "How We Handle Client Communication",
    description: "Our approach to client communication.",
    url: "https://youtu.be/X8Bqu2WjbPI",
  },
  {
    id: 5,
    title: "The Power Of SMS AI",
    description: "Explore the power of SMS AI.",
    url: "https://youtu.be/fo9zt8tOk3Y",
  },
  {
    id: 6,
    title: "Owning vs Renting Your AI",
    description: "Understand the difference between owning and renting AI.",
    url: "https://youtu.be/_UG54qtBjWk",
  },
];
const getYoutubeId = (url: string) => url.split("youtu.be/")[1];
const BreakoutVideos = () => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  return (
    <section id="videos" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-super-bright mb-6">
            Behind the Scenes: Our Complete Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how we build custom AI systems and see real examples of
            what&apos;s possible for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className="group cursor-pointer animate-fade-in h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setPlayingId(video.id)}
            >
              <div className="bg-gradient-card card-glow rounded-xl overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105 h-full flex flex-col">
                {/* Video Thumbnail or Embedded Player */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  {playingId === video.id ? (
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${getYoutubeId(
                        video.url
                      )}?autoplay=1`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  ) : (
                    <>
                      <img
                        src={`https://img.youtube.com/vi/${getYoutubeId(
                          video.url
                        )}/hqdefault.jpg`}
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary/90 hover:bg-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-[0_0_20px_hsl(var(--primary)/0.4)]">
                          <Play className="w-6 h-6 text-white ml-1" />
                        </div>
                      </div>
                    </>
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
