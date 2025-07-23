import { ArrowRight, TrendingUp, DollarSign, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface SuccessStory {
  id: string;
  clientName: string;
  company: string;
  industry: string;
  keyMetric: string;
  metricValue: string;
  description: string;
  results: {
    leadIncrease: string;
    timesSaved: string;
    revenueImpact: string;
  };
  image: string;
}

const successStories: SuccessStory[] = [
  {
    id: "merchant-financial",
    clientName: "Jack",
    company: "Merchant Financial",
    industry: "Business Lending",
    keyMetric: "Daily Contact Volume",
    metricValue: "20,000",
    description:
      "Scaling lending operation that needed to handle massive lead volume without burning through overhead. AI processes 20K contacts daily while maintaining quality conversations and ethical standards.",
    results: {
      leadIncrease: "300%",
      timesSaved: "40 hours/week",
      revenueImpact: "Predictable Revenue",
    },
    image: "/api/placeholder/400/300",
  },
  {
    id: "c4kr-real-estate",
    clientName: "Jason Bennett",
    company: "C4KR Real Estate",
    industry: "Real Estate Investment",
    keyMetric: "Close Rate",
    metricValue: "67%",
    description:
      "Real estate investor who needed systematic deal flow instead of manual chaos. AI qualification and follow-up turned his operation into a predictable revenue machine.",
    results: {
      leadIncrease: "347%",
      timesSaved: "42 hours/week",
      revenueImpact: "$15K+ per deal",
    },
    image: "/api/placeholder/400/300",
  },
  {
    id: "radiant-security",
    clientName: "Chris",
    company: "Radiant Security",
    industry: "Home Security Systems",
    keyMetric: "Cost Reduction",
    metricValue: "80%",
    description:
      "Complex security sales requiring technical expertise and ongoing support. Dual AI system handles both sales and customer service, cutting overhead while growing revenue.",
    results: {
      leadIncrease: "80%",
      timesSaved: "Dual AI Coverage",
      revenueImpact: "Revenue Growth",
    },
    image: "/api/placeholder/400/300",
  },
  {
    id: "bana-roofing",
    clientName: "Don",
    company: "BANA Roofing & Solar",
    industry: "Roofing and Solar",
    keyMetric: "Response Time",
    metricValue: "Instant",
    description:
      "7-figure roofing company hitting capacity limits during storm season. AI command center handles unlimited call volume and scales the business into 8-figures.",
    results: {
      leadIncrease: "Instant Response",
      timesSaved: "Unlimited Capacity",
      revenueImpact: "8-Figure Scaling",
    },
    image: "/api/placeholder/400/300",
  },
];

const SuccessStories = () => {
  return (
    <section id="success-stories" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-super-bright mb-6">
            From Scaling Walls to 8-Figure Growth
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            How 4 companies removed their biggest bottlenecks and transformed
            their operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {successStories.map((story, index) => (
            <div
              key={story.id}
              className="group bg-gradient-card card-glow overflow-hidden hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-fade-in rounded-xl flex flex-col h-full"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Card Header */}
              <div className="p-6 border-b border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-super-bright group-hover:text-primary transition-colors">
                      {story.clientName}
                    </h3>
                    <p className="text-muted-foreground">{story.company}</p>
                    <span className="inline-block mt-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                      {story.industry}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-success">
                      {story.metricValue}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {story.keyMetric}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {story.description}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <TrendingUp className="w-5 h-5 text-success" />
                    </div>
                    <div className="text-lg font-bold text-success">
                      +{story.results.leadIncrease}
                    </div>
                    <div className="text-xs text-muted-foreground">Leads</div>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-lg font-bold text-primary">
                      {story.results.timesSaved}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Time Saved
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                      <DollarSign className="w-5 h-5 text-accent" />
                    </div>
                    <div className="text-lg font-bold text-accent">
                      {story.results.revenueImpact}
                    </div>
                    <div className="text-xs text-muted-foreground">Revenue</div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link to={`/case-study/${story.id}`}>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
