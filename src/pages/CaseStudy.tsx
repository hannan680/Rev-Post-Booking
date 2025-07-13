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
  "hvac-pro": {
    id: "hvac-pro",
    clientName: "Mike Rodriguez",
    company: "Elite HVAC Pro",
    industry: "HVAC Services",
    location: "Phoenix, AZ",
    employeeCount: "12 employees",
    challenge: "Elite HVAC Pro was losing 40% of emergency calls due to delayed response times. During peak summer months, their small team couldn't handle the volume of incoming service requests, resulting in frustrated customers and lost revenue.",
    solution: "We developed a custom AI employee that handles emergency HVAC calls 24/7, instantly qualifies service needs, provides immediate cost estimates, and books same-day appointments. The AI was trained on 3 years of service data and common HVAC emergencies.",
    implementation: [
      "Integrated with existing CRM and scheduling system",
      "Trained AI on 3,000+ previous service calls",
      "Implemented SMS and phone call handling",
      "Added real-time technician availability checking",
      "Created emergency escalation protocols"
    ],
    results: {
      leadIncrease: "185%",
      timesSaved: "25 hours/week",
      revenueImpact: "$47K/month",
      additionalMetrics: [
        { label: "Response Time", value: "< 2 min", icon: Clock },
        { label: "Customer Satisfaction", value: "96%", icon: Users },
        { label: "Same-Day Bookings", value: "89%", icon: Calendar }
      ]
    },
    testimonial: {
      quote: "This AI has completely transformed our business. We went from missing calls to being available 24/7. Our customers love the instant response, and we're booking more jobs than ever. It's like having our best salesperson working around the clock.",
      author: "Mike Rodriguez",
      title: "Owner, Elite HVAC Pro"
    },
    timeline: [
      {
        week: 1,
        milestone: "Business Analysis & Integration Planning",
        description: "Analyzed call patterns, service processes, and integrated with existing Jobber CRM"
      },
      {
        week: 2,
        milestone: "AI Training & Voice Development",
        description: "Trained AI on HVAC terminology, common problems, and pricing structure"
      },
      {
        week: 3,
        milestone: "System Testing & Optimization",
        description: "Comprehensive testing of emergency scenarios and appointment booking flows"
      },
      {
        week: 4,
        milestone: "Launch & Team Training",
        description: "Go-live with full team training and monitoring protocols"
      }
    ]
  },
  "realty-group": {
    id: "realty-group", 
    clientName: "Sarah Chen",
    company: "Premium Realty Group",
    industry: "Real Estate",
    location: "Austin, TX",
    employeeCount: "8 agents",
    challenge: "Premium Realty Group's agents were spending 60% of their time on lead qualification and initial inquiries instead of focusing on closings. Many leads went cold due to delayed response times, especially during evenings and weekends.",
    solution: "We created an AI real estate assistant that qualifies buyers, determines budgets, schedules showings, and nurtures leads through personalized follow-up sequences. The AI was trained on local market data and the team's successful sales conversations.",
    implementation: [
      "Integrated with MLS and showing scheduling platform",
      "Connected to Chime CRM for lead management", 
      "Implemented lead scoring and qualification system",
      "Added market analysis and property recommendations",
      "Created automated follow-up sequences"
    ],
    results: {
      leadIncrease: "340%",
      timesSaved: "40 hours/week",
      revenueImpact: "$125K/month",
      additionalMetrics: [
        { label: "Qualified Leads", value: "+340%", icon: TrendingUp },
        { label: "Showing Bookings", value: "78%", icon: Calendar },
        { label: "Agent Productivity", value: "+155%", icon: Users }
      ]
    },
    testimonial: {
      quote: "Our AI assistant has revolutionized how we handle leads. It qualifies buyers better than most humans and never misses a follow-up. Our agents can now focus on what they do best - closing deals. We've had our best quarter ever.",
      author: "Sarah Chen",
      title: "Broker/Owner, Premium Realty Group"
    },
    timeline: [
      {
        week: 1,
        milestone: "Market Research & CRM Integration",
        description: "Analyzed local market trends and integrated with existing systems"
      },
      {
        week: 2,
        milestone: "AI Training & Lead Qualification Logic",
        description: "Trained AI on qualification criteria and market knowledge"
      },
      {
        week: 3,
        milestone: "Testing & Workflow Optimization",
        description: "Tested lead routing and automated showing scheduling"
      },
      {
        week: 4,
        milestone: "Launch & Agent Training",
        description: "Full deployment with comprehensive agent training program"
      }
    ]
  }
  // Add more case studies as needed...
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
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
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