import { useState } from "react";
import { Button } from "./ui/button";
import { 
  Calendar, 
  Settings, 
  Users, 
  Rocket, 
  CheckCircle, 
  ArrowRight,
  Clock,
  Target,
  Zap
} from "lucide-react";

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: React.ElementType;
  duration: string;
  keyOutputs: string[];
}

const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: "Business Deep-Dive",
    description: "We record how you currently handle calls, map out your sales process, and document everything your AI needs to know about your business.",
    icon: Target,
    duration: "Week 1",
    keyOutputs: [
      "Current call handling analysis",
      "Sales process mapping", 
      "Business knowledge documentation"
    ]
  },
  {
    number: 2,
    title: "AI Training",
    description: "We build your custom AI brain (usually 100+ pages), train it on your specific processes, and make it sound like your best employee.",
    icon: Settings,
    duration: "Week 2", 
    keyOutputs: [
      "Custom AI brain development (100+ pages)",
      "Process-specific training",
      "Employee voice & personality calibration"
    ]
  },
  {
    number: 3,
    title: "Testing & Integration",
    description: "We connect everything to your existing systems, test every scenario, and make sure it works exactly how you need it to.",
    icon: Zap,
    duration: "Week 3",
    keyOutputs: [
      "System integration & connections",
      "Comprehensive scenario testing",
      "Performance optimization"
    ]
  },
  {
    number: 4,
    title: "Go Live", 
    description: "We deploy your AI, train your team on how it works, and stick around to make sure everything runs smoothly.",
    icon: Rocket,
    duration: "Week 4",
    keyOutputs: [
      "AI system deployment",
      "Team training & support",
      "Ongoing monitoring & optimization"
    ]
  }
];

const ProcessOverview = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            Our Proven Process
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            How We Build Your AI in 30 Days
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No BS, no delays. Here&apos;s exactly what happens each week so you know what to expect.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === step.number;
              
              return (
                <div 
                  key={step.number}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    isActive ? 'scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setActiveStep(step.number)}
                >
                  {/* Connecting Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-12 left-full w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent z-0" />
                  )}
                  
                  <div className={`relative bg-card border rounded-2xl p-6 h-full transition-all duration-300 ${
                    isActive 
                      ? 'border-primary shadow-lg shadow-primary/20' 
                      : 'border-border hover:border-primary/30'
                  }`}>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isActive 
                          ? 'bg-primary text-primary-foreground' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                        isActive 
                          ? 'bg-primary/10 text-primary' 
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {step.duration}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className={`text-xl font-semibold mb-3 ${
                      isActive ? 'text-foreground' : 'text-foreground/80'
                    }`}>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Key Outputs */}
                    <div className="space-y-2">
                      {step.keyOutputs.map((output, idx) => (
                        <div key={idx} className="flex items-start text-sm">
                          <CheckCircle className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${
                            isActive ? 'text-primary' : 'text-muted-foreground'
                          }`} />
                          <span className="text-muted-foreground">{output}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Details */}
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-2xl p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Week {activeStep}: {processSteps.find(s => s.number === activeStep)?.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {processSteps.find(s => s.number === activeStep)?.description}
                </p>
                <div className="flex items-center text-sm text-primary">
                  <Clock className="w-4 h-4 mr-2" />
                  Expected timeline: {processSteps.find(s => s.number === activeStep)?.duration}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;