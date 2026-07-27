import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, FormInput, LayoutDashboard } from "lucide-react";
import Reveal from "@/components/Reveal";
import { DEMO_FORM_URL } from "@/lib/constants";

const LiveExampleSection = () => (
  <section id="demo" className="py-20 sm:py-28">
    <div className="container">
      <Reveal className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 bg-gradient-to-br from-background via-primary/[0.035] to-accent/15 p-7 shadow-elevated sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="relative grid items-center gap-9 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="section-kicker">Live demo</span>
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">See a realistic Small Wins setup.</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Explore the customer-facing form, then jump back to the guided product tour to see where the request lands.
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Demo information only—no live customer data.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={DEMO_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border bg-background p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent hover:shadow-elevated"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/25 text-primary">
                  <FormInput className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">Try the customer form</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Choose a request type and see how structured intake feels.</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Open the demo <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </a>

              <a
                href="#product"
                className="group rounded-2xl border bg-background p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <LayoutDashboard className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">Explore the Order Hub</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">See orders, deadlines, files, notes, and financials in context.</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  View the product tour <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default LiveExampleSection;
