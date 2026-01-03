import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Accent decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/15 rounded-full blur-3xl" />
      
      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to try it?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            Small Wins is live. Set up takes 48 hours or less.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              variant="accent" 
              size="xl" 
              asChild
            >
              <a href="https://admin.smallwins.ai" target="_blank" rel="noopener noreferrer">
                Go to Admin Console
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/70 text-sm mb-3">Questions?</p>
            <Button 
              variant="link" 
              asChild
              className="text-accent hover:text-accent/80"
            >
              <a href="mailto:hello@smallwins.ai">
                <Mail className="w-4 h-4 mr-2" />
                hello@smallwins.ai
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
