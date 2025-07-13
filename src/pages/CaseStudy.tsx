import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, TrendingUp, Clock, DollarSign, Users, Calendar } from "lucide-react";
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
    industry: "Business Lending (A-Paper Direct Lender)",
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
        { label: "Team Satisfaction", value: "9/10", icon: Calendar }
      ]
    },
    testimonial: {
      quote: "I was getting killed by brokers who make promises they can't keep. I operate with ethics, but that meant my team was cold calling all day with terrible results. My best guy was ready to quit. RevSquared built me an AI that scales my ethics - it qualifies prospects the way I would, but does it 20,000 times a day instead of 5,000. Now my team only calls people who already want funding and qualify for it. One funded deal paid for the whole system. It's been a game-changer.",
      author: "Jack",
      title: "Founder, Merchant Financial"
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
  },
  "c4kr-real-estate": {
    id: "c4kr-real-estate",
    clientName: "Jason Bennett", 
    company: "C4KR Real Estate Investments",
    industry: "Real Estate Wholesaling & Investment",
    location: "Multi-Market Operations",
    employeeCount: "7-Figure Business",
    challenge: "Jason Bennett built a 7-figure real estate investment business using pure mathematical thinking. But even the most systematic approach couldn't solve his core problem: he was drowning in manual lead management while trying to analyze deals, visit properties, and manage investors. He was spending 85% of time on leads that never converted, with only a 15% close rate.",
    solution: "We built Jason a complete AI ecosystem that thinks like him - mathematical, systematic, and focused on qualified opportunities only. The AI instantly engages and qualifies motivated sellers, handles inbound calls with full real estate knowledge, and automatically prioritizes highest-probability deals.",
    implementation: [
      "SMS AI for instant seller engagement and qualification",
      "Voice AI handling inbound calls with real estate expertise",
      "CRM integration for seamless pipeline management", 
      "Qualification intelligence for property types and motivation levels",
      "Lead scoring to prioritize highest-probability deals",
      "Real estate expertise including condition assessment and timeline detection"
    ],
    results: {
      leadIncrease: "347%",
      timesSaved: "42 hours/week",
      revenueImpact: "$15K+ per deal",
      additionalMetrics: [
        { label: "Close Rate", value: "67%", icon: TrendingUp },
        { label: "Time on Qualified Leads", value: "90%", icon: Clock },
        { label: "Daily Quality Calls", value: "8 vs 50", icon: Users }
      ]
    },
    testimonial: {
      quote: "I built my business on math - every call has a dollar value. But I was wasting 85% of my time calling people who'd never sell. RevSquared built me an AI that thinks like me but works 24/7. Now I only talk to motivated sellers who are qualified and ready. My close rate went from 15% to 67%. One deal pays for the system twice over. I finally work ON my business instead of IN it.",
      author: "Jason Bennett",
      title: "Real Estate Investor"
    },
    timeline: [
      {
        week: 1,
        milestone: "Deal Analysis & Process Mapping",
        description: "Analyzed successful deals and mapped qualification criteria"
      },
      {
        week: 2,
        milestone: "AI Training & Real Estate Logic",
        description: "Trained AI on property assessment, motivation detection, and investment criteria"
      },
      {
        week: 3,
        milestone: "Integration & Lead Scoring",
        description: "Integrated CRM and implemented mathematical lead prioritization system"
      },
      {
        week: 4,
        milestone: "Launch & Optimization",
        description: "Go-live with performance tracking and deal flow optimization"
      }
    ]
  },
  "radiant-security": {
    id: "radiant-security",
    clientName: "Chris",
    company: "Radiant Security", 
    industry: "Home Security Systems (DIY + Professional Installation)",
    location: "Mississippi-based with national reach",
    employeeCount: "Dual-channel business model",
    challenge: "Chris built Radiant Security around a smart dual model: professional installations within 50 miles, DIY kits everywhere else. But managing both channels was crushing operations. He had expensive overhead with in-house sales team + overseas call center, geographic complexity confusing reps, and incomplete sales processes missing upsells. Chris was personally handling middle-of-night emergency calls.",
    solution: "We built Chris two specialized Voice AI agents - the most complex and longest prompts in our production history. The Sales Agent has geographic intelligence, motivation discovery, technical assessment, and seamless checkout integration. The Technical Support Agent handles complete troubleshooting with 24/7 availability.",
    implementation: [
      "Sales AI with geographic intelligence (DFY vs DIY territory decisions)",
      "Motivation discovery understanding family protection needs",
      "Technical assessment counting windows, doors, glass break needs",
      "Equipment expertise recommending sensors, cameras, monitoring",
      "Upselling mastery converting to $34/month monitoring service",
      "Technical Support AI handling installation to advanced issues with 24/7 availability"
    ],
    results: {
      leadIncrease: "40%",
      timesSaved: "Sleep recovery achieved",
      revenueImpact: "$23K/month",
      additionalMetrics: [
        { label: "Cost Reduction", value: "80%", icon: DollarSign },
        { label: "Revenue Growth", value: "+30%", icon: TrendingUp },
        { label: "After-Hours Calls", value: "0", icon: Clock }
      ]
    },
    testimonial: {
      quote: "I was burning money on sales staff and an overseas call center that didn't really understand my products. My old AI was basically useless for anything complex. RevSquared built me two AI agents that are smarter than most of my previous employees. The sales agent knows my 50-mile territory, sells the right equipment, and upsells monitoring better than humans ever did. The tech support agent handles everything - I literally sleep through the night now. 80% cost reduction and 30% revenue increase. It's the best investment I've ever made.",
      author: "Chris",
      title: "Founder, Radiant Security"
    },
    timeline: [
      {
        week: 1,
        milestone: "Dual Model Analysis & Integration Planning", 
        description: "Analyzed DFY vs DIY operations and planned complex system architecture"
      },
      {
        week: 2,
        milestone: "Dual AI Development & Training",
        description: "Built separate Sales and Support AIs with complete security system knowledge"
      },
      {
        week: 3,
        milestone: "Complex Testing & Optimization",
        description: "Tested geographic logic, equipment recommendations, and technical troubleshooting"
      },
      {
        week: 4,
        milestone: "Launch & Cost Optimization",
        description: "Full deployment replacing expensive human labor with intelligent automation"
      }
    ]
  },
  "bana-roofing": {
    id: "bana-roofing",
    clientName: "Don",
    company: "BANA Roofing & Solar",
    industry: "Roofing & Solar Installation", 
    location: "High-Growth Market with Strong SEO",
    employeeCount: "7-Figure scaling to 8-Figure",
    challenge: "Don built BANA Roofing into a 7-figure business through quality work and stellar reviews. His SEO was crushing it, ads had high ROAS, but success was strangling his growth. Every lead that made him money was creating two problems: phone chaos with constantly ringing qualified leads, response delays taking days to reach hot prospects, and feeding competition through slow follow-up.",
    solution: "We built Don a complete AI ecosystem that captures leads from every possible touchpoint and converts them while he focuses on scaling. Complete AI coverage includes SMS AI, Voice AI, Website Chat AI, and Facebook Messenger AI - all feeding into a single qualification pipeline with roofing & solar intelligence.",
    implementation: [
      "SMS AI for instant text response to all inbound leads",
      "Voice AI handling phone calls with roofing/solar expertise", 
      "Website Chat AI converting visitors 24/7",
      "Facebook Messenger AI capturing social media inquiries",
      "Unified system feeding all channels into single qualification pipeline",
      "Storm damage assessment and insurance claim guidance with solar savings calculations"
    ],
    results: {
      leadIncrease: "500%", 
      timesSaved: "60 hours/week",
      revenueImpact: "8-figure scaling",
      additionalMetrics: [
        { label: "Response Time", value: "Seconds", icon: Clock },
        { label: "Team Growth", value: "+5 reps", icon: Users },
        { label: "Ad Scaling", value: "Unlimited", icon: TrendingUp }
      ]
    },
    testimonial: {
      quote: "I was drowning in my own success. My phone never stopped ringing, but I was losing deals because I couldn't get back to people fast enough. I was feeding my competition while working 16-hour days. RevSquared built me AI for every channel - SMS, voice, website, Facebook - everything. Now I respond to leads in seconds instead of days. I hired 5 more sales reps just to handle all the appointments the AI books. I'm finally scaling to 8-figures because I can actually handle the volume. Best part? I can sleep again.",
      author: "Don",
      title: "Owner, BANA Roofing & Solar"
    },
    timeline: [
      {
        week: 1,
        milestone: "Omnichannel Analysis & Integration Planning",
        description: "Mapped all lead sources and planned unified AI ecosystem"
      },
      {
        week: 2,
        milestone: "Multi-Channel AI Development",
        description: "Built AI for SMS, voice, website chat, and social media with roofing expertise"
      },
      {
        week: 3,
        milestone: "Unified Pipeline Testing",
        description: "Tested cross-channel lead capture and single qualification system"
      },
      {
        week: 4,
        milestone: "Scale-Ready Launch",
        description: "Deployed omnichannel system enabling unlimited growth capacity"
      }
    ]
  }
};

const CaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? caseStudyData[id] : null;

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Case Study Not Found</h1>
          <Link to="/">
            <Button variant="outline">
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
      {/* Header */}
      <div className="bg-gradient-hero border-b border-border">
        <div className="container mx-auto px-6 py-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Success Stories
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {caseStudy.industry}
                </span>
                <span className="text-muted-foreground">{caseStudy.location}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-super-bright mb-4">
                {caseStudy.company}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                How {caseStudy.clientName} transformed their business with custom AI automation
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {caseStudy.employeeCount}
                </div>
                <div className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4" />
                  {caseStudy.industry}
                </div>
              </div>
            </div>
            
            {/* Key Metrics */}
            <div className="bg-card rounded-xl shadow-card border border-border/50 p-6">
              <h3 className="font-semibold text-foreground mb-4">Key Results</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">+{caseStudy.results.leadIncrease}</div>
                  <div className="text-xs text-muted-foreground">Leads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{caseStudy.results.timesSaved}</div>
                  <div className="text-xs text-muted-foreground">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{caseStudy.results.revenueImpact}</div>
                  <div className="text-xs text-muted-foreground">Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Challenge */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">The Challenge</h2>
            <div className="bg-card rounded-xl shadow-card border border-border/50 p-6">
              <p className="text-muted-foreground leading-relaxed">
                {caseStudy.challenge}
              </p>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Solution</h2>
            <div className="bg-card rounded-xl shadow-card border border-border/50 p-6">
              <p className="text-muted-foreground leading-relaxed mb-6">
                {caseStudy.solution}
              </p>
              
              <h3 className="font-semibold text-foreground mb-4">Implementation Highlights:</h3>
              <ul className="space-y-2">
                {caseStudy.implementation.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Timeline */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">30-Day Implementation Timeline</h2>
            <div className="space-y-4">
              {caseStudy.timeline.map((item, index) => (
                <div key={index} className="bg-card rounded-xl shadow-card border border-border/50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold">{item.week}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">{item.milestone}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Results */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">Results & Impact</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl shadow-card border border-border/50 p-6">
                <h3 className="font-semibold text-foreground mb-4">Primary Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Lead Increase</span>
                    <span className="text-2xl font-bold text-success">+{caseStudy.results.leadIncrease}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Time Saved Weekly</span>
                    <span className="text-2xl font-bold text-primary">{caseStudy.results.timesSaved}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Monthly Revenue Impact</span>
                    <span className="text-2xl font-bold text-accent">{caseStudy.results.revenueImpact}</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-xl shadow-card border border-border/50 p-6">
                <h3 className="font-semibold text-foreground mb-4">Additional Improvements</h3>
                <div className="space-y-4">
                  {caseStudy.results.additionalMetrics.map((metric, index) => {
                    const Icon = metric.icon;
                    return (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Icon className="w-5 h-5 text-primary" />
                          <span className="text-muted-foreground">{metric.label}</span>
                        </div>
                        <span className="text-lg font-bold text-foreground">{metric.value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Testimonial */}
          <section>
            <div className="bg-gradient-card rounded-xl border border-border/50 p-8 text-center">
              <blockquote className="text-lg text-foreground leading-relaxed mb-6">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-foreground">{caseStudy.testimonial.author}</div>
                <div className="text-muted-foreground">{caseStudy.testimonial.title}</div>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <div className="bg-card rounded-xl shadow-card border border-border/50 p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-muted-foreground mb-6">
                Schedule a discovery call to see how we can build a custom AI employee for your business
              </p>
              <Button variant="default" size="lg">
                Schedule Discovery Call
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;