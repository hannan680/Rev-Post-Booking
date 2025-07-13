import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { Button } from "./ui/button";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: "general" | "technical" | "pricing" | "process";
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    category: "general",
    question: "How is this different from using ChatGPT or other AI chatbots?",
    answer: "Our AI employees are custom-built for your specific business with 147+ pages of training material, industry expertise, and direct integration with your existing systems. Unlike generic chatbots, our AI understands your products, services, pricing, and can actually take actions like booking appointments and updating your CRM."
  },
  {
    id: 2,
    category: "technical", 
    question: "What systems does your AI integrate with?",
    answer: "We integrate with virtually any CRM (Salesforce, HubSpot, Pipedrive, etc.), calendar systems (Calendly, Google Calendar), communication platforms (SMS, email, phone), and payment processors. Our team handles all technical integrations during the build process."
  },
  {
    id: 3,
    category: "pricing",
    question: "What's included in the $5K-$7.5K investment?",
    answer: "Complete AI development, 147-page custom prompt creation, system integrations, team training, 30-day build process, ongoing support, and performance optimization. The exact price depends on complexity and integrations needed."
  },
  {
    id: 4,
    category: "process",
    question: "How long before I see results?",
    answer: "Most clients see immediate improvements in response times once we go live (Week 4). Full ROI typically achieves within 60-90 days as the AI learns and optimizes. Our average client sees 180%+ lead increase within the first quarter."
  },
  {
    id: 5,
    category: "technical",
    question: "Can the AI handle complex industry-specific conversations?",
    answer: "Absolutely. Our 147-page training includes deep industry research, competitor analysis, common objections, pricing strategies, and technical specifications. We've successfully deployed AI for HVAC, legal, real estate, healthcare, and dozens of other specialized industries."
  },
  {
    id: 6,
    category: "general",
    question: "What if my customers prefer talking to humans?",
    answer: "Our AI is designed to be indistinguishable from a human assistant. It uses natural conversation patterns, industry terminology, and can seamlessly transfer to human team members when needed. Most customers don't realize they're talking to AI."
  },
  {
    id: 7,
    category: "process",
    question: "Do you provide training for my team?",
    answer: "Yes! Week 4 includes comprehensive team training, documentation, and ongoing support. We ensure everyone knows how to work with their new AI employee, including monitoring, optimization, and escalation procedures."
  },
  {
    id: 8,
    category: "pricing",
    question: "Are there ongoing monthly fees?",
    answer: "Beyond the initial build cost, there are minimal ongoing costs for AI usage (typically $200-500/month depending on volume) and optional premium support plans. We're transparent about all costs upfront - no hidden fees."
  },
  {
    id: 9,
    category: "technical",
    question: "What happens if the AI doesn't understand something?",
    answer: "Our AI is trained to recognize when it needs human help and seamlessly transfer conversations. We also include continuous learning features that improve responses over time, plus our team monitors performance and makes optimizations."
  },
  {
    id: 10,
    category: "general",
    question: "How do you ensure data security and privacy?",
    answer: "We follow enterprise-grade security protocols, including encryption, secure API connections, and compliance with GDPR, CCPA, and industry-specific regulations. Your data never leaves your approved systems without explicit permission."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([1]));
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const filteredItems = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { key: "all", label: "All Questions" },
    { key: "general", label: "General" },
    { key: "technical", label: "Technical" },
    { key: "pricing", label: "Pricing" },
    { key: "process", label: "Process" }
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-super-bright mb-6">
            Common Questions Answered
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to the most frequently asked questions about our AI development process
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gradient-card border-2 border-primary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary card-glow"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category.key}
                  variant={selectedCategory === category.key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.key)}
                  className="text-sm"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredItems.map((item, index) => {
              const isOpen = openItems.has(item.id);
              
              return (
                <div 
                  key={item.id}
                  className="bg-gradient-card card-glow rounded-lg overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-6 text-left hover:bg-muted/10 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            item.category === 'general' ? 'bg-primary/10 text-primary' :
                            item.category === 'technical' ? 'bg-accent/10 text-accent' :
                            item.category === 'pricing' ? 'bg-success/10 text-success' :
                            'bg-warning/10 text-warning'
                          }`}>
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-super-bright pr-8">
                          {item.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0 ml-4">
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 border-t border-border/50 animate-fade-in">
                      <p className="text-muted-foreground leading-relaxed pt-4">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No questions found matching your search criteria.
              </p>
            </div>
          )}

          {/* Still Have Questions CTA */}
          <div className="text-center mt-16 p-8 bg-gradient-card card-glow rounded-xl">
            <h3 className="text-2xl font-semibold text-super-bright mb-4">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Schedule a 15-minute discovery call to discuss your specific needs
            </p>
            <Button variant="default" size="lg">
              Schedule Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;