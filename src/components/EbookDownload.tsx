import { Button } from "./ui/button";
import { Download, BookOpen, FileText, Star } from "lucide-react";

const EbookDownload = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/5">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium mb-6">
            Free Resource
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            The Real Story Behind Breaking Scaling Walls
          </h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how 4 companies broke through their capacity limits and unlocked
            millions in additional revenue using AI.
          </p>

          <div className="bg-card border border-primary/20 rounded-2xl p-8 mb-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Real Case Studies
                </h3>
                <p className="text-sm text-muted-foreground">
                  Marcus, Don, Sarah, Tom
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Scaling Breakthroughs
                </h3>
                <p className="text-sm text-muted-foreground">
                  $7M+ revenue unlocks
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  Behind the Scenes
                </h3>
                <p className="text-sm text-muted-foreground">
                  How I built this after hitting my own wall
                </p>
              </div>
            </div>

            <a href="/Rev2 Ebook.pdf" download="Rev2 Ebook.pdf">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Free Playbook
              </Button>
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            No email required • Instant download • PDF format
          </p>
        </div>
      </div>
    </section>
  );
};

export default EbookDownload;
