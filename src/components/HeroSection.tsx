import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden">
      {/* Blue + gold accent decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/10 rounded-full blur-2xl" />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 opacity-0 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-foreground">Live and working today</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 opacity-0 animate-fade-in-up animation-delay-100">
            Collect requests.{" "}
            <span className="text-primary">Track them.</span>{" "}
            <span className="text-accent">Keep customers informed.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-in-up animation-delay-200">
            A lightweight system for small businesses — without building or managing a tool.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="https://admin.smallwins.ai" target="_blank" rel="noopener noreferrer">
                Go to Admin Console
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#case-study">
                See It In Action
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
