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
    category: "pricing",
    question: "How much will I save vs. hiring more people?",
    answer: "A receptionist costs $37K salary plus $30K+ in benefits (health insurance, 401K, PTO, etc.) = $67K+ annually. And they work 40 hours/week. Our AI works 168 hours/week for less than the cost of benefits alone. Plus no sick days, no turnover, no training time."
  },
  {
    id: 2,
    category: "general", 
    question: "How is this different from chatbots or generic AI?",
    answer: "Chatbots follow scripts. Our AI is custom-trained on your business with 100+ pages of specific knowledge. It knows your pricing, processes, and can actually take actions like booking appointments and updating your CRM. It's like having your best employee available 24/7."
  },
  {
    id: 4,
    category: "general",
    question: "What problems signal I need this?",
    answer: "You're missing calls outside business hours. Your team is overwhelmed during busy periods. You want to scale ads but can't handle more volume. You're paying for answering services that don't understand your business. Your leads aren't getting followed up fast enough."
  },
  {
    id: 5,
    category: "process",
    question: "How quickly will I see results?",
    answer: "Most clients start seeing impact within the first week of going live. Marcus was booking qualified appointments on day one. The AI works immediately - the ROI builds from there."
  },
  {
    id: 6,
    category: "general",
    question: "What if my customers hate talking to AI?",
    answer: "They won't know it's AI. Our systems sound completely natural and are trained on your specific industry. Most customers prefer it because they get instant, knowledgeable responses instead of waiting hours for callbacks."
  },
  {
    id: 7,
    category: "process",
    question: "What do I need to prepare?",
    answer: "Nothing upfront. Week 1 is our discovery process where we record how you currently handle calls and document your processes. We handle all the technical setup. You just need to be available for the initial interviews."
  },
  {
    id: 8,
    category: "general",
    question: "What happens if it doesn't work?",
    answer: "We've never had a project fail because we don't start building until we're 100% confident it will work. That's what the discovery week is for - making sure this is the right fit before we write any code."
  },
  {
    id: 9,
    category: "pricing",
    question: "Are there ongoing monthly fees?",
    answer: "Yes, $497-$1,500/month depending on usage. This covers all software licenses, hosting, AI processing costs, and premium support. No hidden fees, no surprises. You're not managing multiple vendor relationships."
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
    <section id="faq" className="py-20 bg-background retro-grid">
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

        </div>
      </div>
    </section>
  );
};

export default FAQ;
