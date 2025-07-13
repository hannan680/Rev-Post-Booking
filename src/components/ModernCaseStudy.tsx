import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, TrendingUp, Clock, DollarSign, Users, CheckCircle, Star } from "lucide-react";
import { Button } from "../components/ui/button";

interface CaseStudyData {
  id: string;
  clientName: string;
  company: string;
  industry: string;
  location: string;
  employeeCount: string;
  challenge: string;
  solution: string;
  implementation: string[];
  results: {
    leadIncrease: string;
    timesSaved: string;
    revenueImpact: string;
    additionalMetrics: Array<{
      label: string;
      value: string;
      icon: React.ElementType;
    }>;
  };
  testimonial: {
    quote: string;
    author: string;
    title: string;
    rating: number;
  };
  timeline: Array<{
    week: number;
    milestone: string;
    description: string;
  }>;
}

const caseStudyData: Record<string, CaseStudyData> = {
  "merchant-financial": {
    id: "merchant-financial",
    clientName: "Jack",
    company: "Merchant Financial",
    industry: "Business Lending",
    location: "New York, NY",
    employeeCount: "1M+ business records",
    challenge: "Jack runs Merchant Financial, an A-paper direct lender in the most competitive lending market in the world - New York City. Unlike the sea of low-level brokers making promises they can't keep, Jack operates with ethics and actually funds the deals he approves. But ethics don't scale without volume. His team was limited to 5,000 text blasts per day, every positive response required immediate rep handling, and his top performer was ready to quit due to endless cold calling.",
    solution: "We built Jack a custom SMS AI system that operates with his same ethical standards but at machine scale. The AI engages business owners naturally about capital needs, knows Jack's exact A-paper lending criteria, processes 20,000 contacts daily (4x previous limit), and converts cold contacts into interested, qualified applicants.",
    implementation: [
      "Fluid conversation AI that engages business owners naturally",
      "Qualification intelligence matching Jack's A-paper lending criteria", 
      "Volume scaling from 5,000 to 20,000 daily contacts",
      "Revenue recovery with affiliate downsell links for unqualified prospects",
      "Lead warming system converting cold contacts to interested applicants",
      "Seamless CRM integration with existing business records"
    ],
    results: {
      leadIncrease: "300%",
      timesSaved: "Manual bottleneck eliminated",
      revenueImpact: "1 deal = ROI",
      additionalMetrics: [
        { label: "Daily Contact Volume", value: "20,000", icon: TrendingUp },
        { label: "Positive Response Rate", value: "65%", icon: Users },
        { label: "Team Satisfaction", value: "9/10", icon: Star }
      ]
    },
    testimonial: {
      quote: "I was getting killed by brokers who make promises they can't keep. I operate with ethics, but that meant my team was cold calling all day with terrible results. My best guy was ready to quit. RevSquared built me an AI that scales my ethics - it qualifies prospects the way I would, but does it 20,000 times a day instead of 5,000. Now my team only calls people who already want funding and qualify for it. One funded deal paid for the whole system. It's been a game-changer.",
      author: "Jack",
      title: "Founder, Merchant Financial",
      rating: 5
    },
    timeline: [
      {
        week: 1,
        milestone: "Business Analysis & CRM Integration",
        description: "Analyzed lending criteria, integrated with business records database"
      },
      {
        week: 2,
        milestone: "AI Training & Qualification Logic",
        description: "Trained AI on A-paper lending standards and ethical qualification processes"
      },
      {
        week: 3,
        milestone: "Volume Testing & Optimization",
        description: "Tested 20,000 daily contact capacity and conversation optimization"
      },
      {
        week: 4,
        milestone: "Launch & Team Training",
        description: "Full deployment with team training on qualified lead handling"
      }
    ]
  }
  // ... other case studies (truncated for brevity)
};

const ModernCaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? caseStudyData[id] : null;

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <ExternalLink className="w-8 h-8 text-destructive" />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-4">Case Study Not Found</h1>
          <p className="text-muted-foreground mb-6">The case study you're looking for doesn't exist or has been moved.</p>
          <Link to="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 border-b border-border">
        <div className="container mx-auto px-6 py-16">
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Success Stories
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary text-sm font-medium rounded-full">
                  {caseStudy.industry}
                </span>
                <span className="text-muted-foreground">{caseStudy.location}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                {caseStudy.company}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                How {caseStudy.clientName} transformed their business with custom AI automation
              </p>
              
              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 bg-card px-3 py-2 rounded-lg border">
                  <Users className="w-4 h-4 text-primary" />
                  {caseStudy.employeeCount}
                </div>
                <div className="flex items-center gap-2 bg-card px-3 py-2 rounded-lg border">
                  <ExternalLink className="w-4 h-4 text-primary" />
                  {caseStudy.industry}
                </div>
              </div>
            </div>
            
            {/* Results Dashboard */}
            <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Key Results Achieved</h3>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">+{caseStudy.results.leadIncrease}</div>
                  <div className="text-sm text-muted-foreground">Lead Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">{caseStudy.results.revenueImpact}</div>
                  <div className="text-sm text-muted-foreground">Revenue Impact</div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="text-center">
                  <div className="text-lg font-medium text-foreground mb-2">{caseStudy.results.timesSaved}</div>
                  <div className="text-sm text-muted-foreground">Time Optimization</div>
                </div>
              </div>

              {/* Additional Metrics */}
              <div className="mt-6 space-y-3">
                {caseStudy.results.additionalMetrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="text-sm text-foreground">{metric.label}</span>
                      </div>
                      <span className="font-semibold text-primary">{metric.value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Challenge */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">The Challenge</h2>
              <div className="bg-gradient-to-r from-destructive/5 to-destructive/10 border border-destructive/20 rounded-2xl p-8">
                <p className="text-foreground leading-relaxed text-lg">
                  {caseStudy.challenge}
                </p>
              </div>
            </div>

            {/* Solution */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Our Solution</h2>
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-8">
                <p className="text-foreground leading-relaxed text-lg mb-8">
                  {caseStudy.solution}
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mb-6">Implementation Highlights</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {caseStudy.implementation.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Client Testimonial</h2>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < caseStudy.testimonial.rating ? 'text-yellow-500 fill-current' : 'text-muted'}`} 
                    />
                  ))}
                </div>
                
                <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
                  "{caseStudy.testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {caseStudy.testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{caseStudy.testimonial.author}</div>
                    <div className="text-muted-foreground">{caseStudy.testimonial.title}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready for Similar Results?</h3>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                See how we can build a custom AI solution for your business in just 30 days.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent">
                  Schedule Strategy Call
                </Button>
                <Button variant="outline" size="lg">
                  View More Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModernCaseStudy;
