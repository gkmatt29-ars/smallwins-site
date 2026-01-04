import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const LiveExampleSection = () => {
  return (
    <section id="case-study" className="py-20 md:py-28">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <span className="text-sm font-medium text-foreground">Examples</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See a <span className="text-accent">sample</span> setup
          </h2>

          <p className="text-lg text-muted-foreground">
            Explore a demo order form and a preview of the Order Hub experience.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-background rounded-2xl border-2 border-primary/30 shadow-elevated overflow-hidden">
            <div className="p-8 md:p-10">
              {/* Company Header */}
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 pb-8 border-b border-border">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-xl font-bold text-primary-foreground">C&amp;M</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    Sample business: C&amp;M Sporting Goods
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Custom apparel, trophies, and awards
                  </p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 sm:flex-none">
                  <Button
                    variant="accent"
                    size="lg"
                    asChild
                    className="w-full sm:w-auto"
                  >
                    <a
                      href="https://cm.smallwins.ai"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Example Order Form
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <p className="mt-2 text-xs text-muted-foreground">
                    This is a demo form for a sample business.
                  </p>
                </div>

                <div className="flex-1 sm:flex-none">
                  <Button
                    variant="outline"
                    size="lg"
                    asChild
                    className="w-full sm:w-auto border-primary/30 hover:bg-primary/5"
                  >
                    <a href="#order-hub">
                      Preview the Order Hub
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                  <p className="mt-2 text-xs text-muted-foreground">
                    A guided preview with realistic sample data.
                  </p>
                </div>
              </div>
            </div>

            {/* Footer note */}
            <div className="bg-primary/5 px-8 py-3 border-t border-primary/20">
              <p className="text-sm text-muted-foreground text-center">
                Demos shown — not live customer data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveExampleSection;
