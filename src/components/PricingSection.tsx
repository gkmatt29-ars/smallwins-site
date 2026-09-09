import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Wrench } from "lucide-react";
import Reveal from "@/components/Reveal";

const formAndHubFeatures = [
  "Custom-configured customer request form",
  "Private Order Hub",
  "Branding and intake configuration",
  "Workflow configuration",
  "Statuses, deadlines, files & financials",
  "Standard form notifications",
  "Secure hosting",
  "Routine maintenance & improvements",
  "Product support",
  "Testing, training & launch support",
];

const connectedFeatures = [
  "Private Order Hub",
  "Connect your existing request form",
  "Submission and field mapping",
  "Automated order creation",
  "Workflow configuration",
  "Statuses, deadlines, files & financials",
  "Secure integration setup",
  "Routine maintenance & monitoring",
  "Product support",
  "Testing, training & launch support",
];

const FeatureList = ({ features }: { features: string[] }) => (
  <ul className="mt-6 space-y-3">
    {features.map((feature) => (
      <li key={feature} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
        <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <span>{feature}</span>
      </li>
    ))}
  </ul>
);

const PlanPricing = ({ implementation, monthly }: { implementation: string; monthly: string }) => (
  <div className="mt-6 rounded-2xl bg-primary/[0.045] p-5">
    <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Implementation</p>
        <p className="mt-1 text-xs font-semibold text-muted-foreground">Starting at</p>
        <p className="mt-0.5 font-display text-2xl font-bold">{implementation}</p>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Ongoing service</p>
        <p className="mt-1 flex flex-wrap items-baseline gap-x-1 font-display text-4xl font-bold leading-none">
          {monthly}<span className="text-base font-semibold text-muted-foreground"> / month</span>
        </p>
      </div>
    </div>
  </div>
);

const PricingSection = () => (
  <section id="pricing" className="relative overflow-hidden bg-primary/[0.045] py-20 sm:py-28">
    <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
    <div className="container relative">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Badge variant="secondary" className="rounded-full px-4 py-1.5">Straightforward pricing</Badge>
        <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">Two ways to get started.</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Keep the customer intake process you already have, or let Small Wins handle it for you. Either way, your team gets one organized place to manage every request.
        </p>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
        <Reveal>
          <article className="flex h-full flex-col rounded-[1.75rem] border bg-background p-7 shadow-card sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-primary">Keep your existing form</p>
                <h3 className="mt-2 font-display text-2xl font-bold">Connected</h3>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/25 text-primary">
                <ShieldCheck aria-hidden="true" className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              For businesses that already have a request form they like. Small Wins connects your existing intake process directly to the private Order Hub.
            </p>
            <PlanPricing implementation="$2,500" monthly="$499" />
            <FeatureList features={connectedFeatures} />
            <div className="mt-auto pt-7">
            <Button className="h-auto min-h-10 w-full whitespace-normal" asChild>
              <a href="#contact">Talk through your workflow</a>
            </Button>
            </div>
          </article>
        </Reveal>

        <Reveal delay={80}>
          <article className="relative flex h-full flex-col rounded-[1.75rem] border-2 border-accent bg-background p-7 shadow-elevated sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-primary">Full intake + order management</p>
                <h3 className="mt-2 font-display text-2xl font-bold">Form + Hub</h3>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Wrench aria-hidden="true" className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              For businesses that want Small Wins to provide and manage the customer-facing request experience as well as the private Order Hub.
            </p>
            <PlanPricing implementation="$3,500" monthly="$599" />
            <FeatureList features={formAndHubFeatures} />
            <div className="mt-auto pt-7">
            <Button className="h-auto min-h-10 w-full whitespace-normal" asChild>
              <a href="#contact">Talk through your workflow</a>
            </Button>
            </div>
          </article>
        </Reveal>

      </div>

      <Reveal className="mx-auto mt-8 max-w-5xl rounded-2xl border border-primary/15 bg-background px-6 py-5 text-center text-sm leading-relaxed text-muted-foreground shadow-sm">
        <h3 className="font-semibold text-foreground">Need something beyond the standard setup?</h3>
        <p className="mt-2">
          Historical imports, custom reporting, additional workflows, specialized automation, major website work, and other custom integrations can be scoped separately. Any additional work is reviewed and approved before it begins.
        </p>
        <p className="mt-3 text-xs">Pricing may vary for unusually complex workflows or integrations.</p>
      </Reveal>
    </div>
  </section>
);

export default PricingSection;
