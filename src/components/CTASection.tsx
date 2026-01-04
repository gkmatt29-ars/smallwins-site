import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
      {/* Accent decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/15 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to get started?
          </h2>

<div className="space-y-2 mb-10">
  <p className="text-lg text-primary-foreground/85">
    Small Wins is built for owner-operators doing custom, project-based work.
  </p>
  <p className="text-lg text-primary-foreground/70">
    If it sounds like a fit, let’s talk.
  </p>
</div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button variant="accent" size="xl" asChild className="w-full sm:w-auto">
              <a href="mailto:hello@smallwins.ai">
                Contact us
                <Mail className="w-5 h-5 ml-2" />
              </a>
            </Button>
          </div>

          {/* Existing customers */}
          <div className="pt-6 border-t border-primary-foreground/15">
            <Button
              variant="link"
              asChild
              className="text-primary-foreground/70 hover:text-primary-foreground px-0 h-auto text-sm"
            >
              <a
                href="https://admin.smallwins.ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                Existing customers → Order Hub
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
