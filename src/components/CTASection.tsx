import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const CTASection = () => (
  <section className="border-b border-background/10 bg-foreground pb-12 text-background">
    <div className="container">
      <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-background/10 bg-background/5 px-6 py-8 text-center sm:flex-row sm:text-left">
        <div className="max-w-2xl">
          <p className="font-display text-2xl font-bold text-background">Ready to turn scattered requests into a system?</p>
          <p className="mt-2 text-sm leading-relaxed text-background/60">Tell me how custom orders reach your business today. I’ll review the workflow personally and follow up with an honest recommendation.</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button variant="accent" asChild>
            <a href="#contact">
              Talk through your workflow <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button className="border-background/20 bg-transparent text-background hover:bg-background/10" variant="outline" asChild>
            <a href="#demo">
              Explore a sample setup <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
