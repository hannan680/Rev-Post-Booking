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
  },
  "c4kr-real-estate": {
    id: "c4kr-real-estate",
    clientName: "Jason Bennett", 
    company: "C4KR Real Estate Investments",
    industry: "Real Estate Wholesaling",
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
      title: "Real Estate Investor",
      rating: 5
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
    industry: "Home Security Systems",
    location: "Mississippi (National Reach)",
    employeeCount: "Dual-Channel Business",
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
      title: "Founder, Radiant Security",
      rating: 5
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
    location: "High-Growth Market",
    employeeCount: "7-Figure to 8-Figure",
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
      title: "Owner, BANA Roofing & Solar",
      rating: 5
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

// Get the next case study in the sequence
const getNextCaseStudy = (currentId: string) => {
  const caseStudyIds = Object.keys(caseStudyData);
  const currentIndex = caseStudyIds.indexOf(currentId);
  const nextIndex = (currentIndex + 1) % caseStudyIds.length;
  return caseStudyData[caseStudyIds[nextIndex]];
};

const ModernCaseStudy = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = id ? caseStudyData[id] : null;
  const nextCaseStudy = id ? getNextCaseStudy(id) : null;

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

            {/* Next Case Study Preview */}
            {nextCaseStudy && (
              <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Next Success Story</h3>
                  <p className="text-muted-foreground">Continue exploring our client transformations</p>
                </div>
                
                <Link 
                  to={`/case-study/${nextCaseStudy.id}`}
                  className="group block hover:scale-[1.02] transition-all duration-300"
                >
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-medium">
                            {nextCaseStudy.industry}
                          </span>
                          <span className="text-sm text-muted-foreground">{nextCaseStudy.location}</span>
                        </div>
                        
                        <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {nextCaseStudy.company}
                        </h4>
                        
                        <p className="text-muted-foreground mb-4 line-clamp-2">
                          How {nextCaseStudy.clientName} transformed their business with custom AI automation
                        </p>
                        
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            <span className="font-semibold text-primary">+{nextCaseStudy.results.leadIncrease}</span>
                            <span className="text-muted-foreground">leads</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4 text-accent" />
                            <span className="font-semibold text-accent">{nextCaseStudy.results.revenueImpact}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 text-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-primary">
                            {nextCaseStudy.clientName.charAt(0)}
                          </span>
                        </div>
                        <div className="text-sm text-muted-foreground mb-2">Client Spotlight</div>
                        <div className="font-semibold text-foreground">{nextCaseStudy.clientName}</div>
                        <div className="text-sm text-muted-foreground">{nextCaseStudy.testimonial.title}</div>
                        
                        <div className="mt-4 text-center">
                          <Button size="sm" className="group-hover:scale-105 transition-transform">
                            Read Case Study
                            <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                
                <div className="text-center mt-6">
                  <Link to="/#success-stories">
                    <Button variant="outline" size="lg">
                      View All Case Studies
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ModernCaseStudy;
