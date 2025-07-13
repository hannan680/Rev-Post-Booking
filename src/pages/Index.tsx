import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import BreakoutVideos from "../components/BreakoutVideos";
import BuildProcess from "../components/BuildProcess";
import SuccessStories from "../components/SuccessStories";
import AudioDemos from "../components/AudioDemos";
import FAQ from "../components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BreakoutVideos />
      <BuildProcess />
      <SuccessStories />
      <AudioDemos />
      <FAQ />
    </div>
  );
};

export default Index;
