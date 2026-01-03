import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const LiveExampleSection = () => {
  return (
    <section id="case-study" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm font-medium text-foreground">Case Study</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See it <span className="text-accent">working</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A real business using Small Wins today.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-background rounded-2xl border-2 border-primary/30 shadow-elevated overflow-hidden">
            <div className="p-8 md:p-10">
              {/* Company Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 pb-8 border-b border-border">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-xl font-bold text-primary-foreground">C&M</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    C&M Sporting Goods
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Custom apparel, trophies, and awards
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="accent" size="lg" asChild className="flex-1 sm:flex-none">
                  <a href="https://cm.smallwins.ai" target="_blank" rel="noopener noreferrer">
                    View Order Form
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="lg" asChild className="flex-1 sm:flex-none border-primary/30 hover:bg-primary/5">
                  <a href="https://admin.smallwins.ai" target="_blank" rel="noopener noreferrer">
                    Explore Admin
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Footer note */}
            <div className="bg-primary/5 px-8 py-3 border-t border-primary/20">
              <p className="text-sm text-muted-foreground text-center">
                Real customer, not a demo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveExampleSection;
