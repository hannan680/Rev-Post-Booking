import { useState } from "react";
import { ChevronDown, ChevronRight, Calendar, Users, Settings, Rocket } from "lucide-react";
import { Button } from "./ui/button";

interface Week {
  number: number;
  title: string;
  icon: React.ElementType;
  summary: string;
  details: string[];
  deliverables: string[];
}

const weeks: Week[] = [
  {
    number: 1,
    title: "Business Analysis",
    icon: Calendar,
    summary: "Deep dive into your business needs and processes",
    details: [
      "Comprehensive 47-question business assessment",
      "Stakeholder interviews and requirement gathering",
      "Process mapping and workflow analysis",
      "Call recording and communication style analysis",
      "Competitive landscape and industry research"
    ],
    deliverables: [
      "Business Analysis Report",
      "Process Flow Diagrams",
      "Technical Requirements Document"
    ]
  },
  {
    number: 2,
    title: "AI Development",
    icon: Settings,
    summary: "Creating your custom 147-page AI prompt and training",
    details: [
      "Custom 147-page prompt development",
      "AI personality and voice customization",
      "Industry-specific knowledge integration",
      "Conversation flow optimization",
      "Initial testing and refinement"
    ],
    deliverables: [
      "Custom AI Prompt Document",
      "Voice & Personality Profile",
      "Initial AI Model"
    ]
  },
  {
    number: 3,
    title: "Integration & Testing",
    icon: Users,
    summary: "CRM integration, workflow setup, and comprehensive testing",
    details: [
      "CRM system integration and data mapping",
      "Workflow automation setup",
      "SMS and email integration configuration",
      "Comprehensive testing across scenarios",
      "Performance optimization and fine-tuning"
    ],
    deliverables: [
      "Integrated AI System",
      "Testing Reports",
      "Performance Metrics"
    ]
  },
  {
    number: 4,
    title: "Launch & Training",
    icon: Rocket,
    summary: "Team training, go-live support, and optimization",
    details: [
      "Comprehensive team training sessions",
      "Go-live support and monitoring",
      "Performance tracking and analytics setup",
      "Initial optimization based on real usage",
      "Documentation and knowledge transfer"
    ],
    deliverables: [
      "Live AI System",
      "Training Materials",
      "Analytics Dashboard"
    ]
  }
];

const BuildProcess = () => {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1);

  const toggleWeek = (weekNumber: number) => {
    setExpandedWeek(expandedWeek === weekNumber ? null : weekNumber);
  };

  return (
    <section id="process" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-super-bright mb-6">
            Our 30-Day Build Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers your custom AI employee in just one month
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative max-w-6xl mx-auto">
            {/* Progress Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-border">
              <div className="h-full bg-gradient-primary w-3/4 transition-all duration-1000"></div>
            </div>

            <div className="grid grid-cols-4 gap-8">
              {weeks.map((week, index) => {
                const Icon = week.icon;
                const isExpanded = expandedWeek === week.number;
                
                return (
                  <div key={week.number} className="relative">
                    {/* Week Node */}
                    <div className="flex flex-col items-center mb-8">
                      <div 
                        className={`w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                          isExpanded 
                            ? 'bg-primary text-primary-foreground shadow-glow animate-pulse-glow' 
                            : 'bg-card text-muted-foreground border-2 border-border hover:border-primary'
                        }`}
                        onClick={() => toggleWeek(week.number)}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="text-center mt-4">
                        <h3 className="font-semibold text-super-bright mb-2">Week {week.number}</h3>
                        <h4 className="text-lg font-medium text-primary mb-2">{week.title}</h4>
                        <p className="text-sm text-muted-foreground">{week.summary}</p>
                      </div>
                    </div>

                    {/* Expanded Details */}
                    {isExpanded && (
                      <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-80 z-10">
                        <div className="bg-gradient-card card-glow rounded-xl p-6 animate-fade-in">
                          <h5 className="font-semibold text-super-bright mb-4">Detailed Activities:</h5>
                          <ul className="space-y-2 mb-4">
                            {week.details.map((detail, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                          
                          <h5 className="font-semibold text-foreground mb-2">Deliverables:</h5>
                          <ul className="space-y-1">
                            {week.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="text-sm text-success flex items-center">
                                <span className="w-4 h-4 bg-success/20 rounded-full flex items-center justify-center mr-2">
                                  <span className="w-1.5 h-1.5 bg-success rounded-full"></span>
                                </span>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden max-w-2xl mx-auto">
          <div className="space-y-6">
            {weeks.map((week) => {
              const Icon = week.icon;
              const isExpanded = expandedWeek === week.number;
              
              return (
                <div key={week.number} className="bg-card rounded-xl shadow-card border border-border/50">
                  <div 
                    className="p-6 cursor-pointer"
                    onClick={() => toggleWeek(week.number)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          isExpanded ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">Week {week.number}: {week.title}</h3>
                          <p className="text-sm text-muted-foreground">{week.summary}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="px-6 pb-6 border-t border-border/50 pt-4 animate-fade-in">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-foreground mb-3">Activities:</h5>
                          <ul className="space-y-2">
                            {week.details.map((detail, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-foreground mb-3">Deliverables:</h5>
                          <ul className="space-y-2">
                            {week.deliverables.map((deliverable, idx) => (
                              <li key={idx} className="text-sm text-success flex items-center">
                                <span className="w-4 h-4 bg-success/20 rounded-full flex items-center justify-center mr-2">
                                  <span className="w-1.5 h-1.5 bg-success rounded-full"></span>
                                </span>
                                {deliverable}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildProcess;