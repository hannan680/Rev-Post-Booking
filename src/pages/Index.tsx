import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import BreakoutVideos from "../components/BreakoutVideos";
import ProcessOverview from "../components/ProcessOverview";
import EbookDownload from "../components/EbookDownload";
import SuccessStories from "../components/SuccessStories";
import AudioDemos from "../components/AudioDemos";
import FAQ from "../components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <BreakoutVideos />
      <ProcessOverview />
      <EbookDownload />
      <SuccessStories />
      <AudioDemos />
      <FAQ />
    </div>
  );
};

export default Index;
