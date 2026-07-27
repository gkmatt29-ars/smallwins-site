import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Plus, ShieldCheck, Wrench } from "lucide-react";
import Reveal from "@/components/Reveal";

const implementationFeatures = [
  "Workflow discovery",
  "Branded request forms",
  "Related request-type configuration",
  "Shared Order Hub configuration",
  "Statuses, deadlines, files, financial fields, and email setup",
  "Testing and training",
  "Launch support",
];

const monthlyFeatures = [
  "Customer request forms",
  "Private Order Hub",
  "Secure hosting",
  "Routine maintenance",
  "Product improvements",
  "Reliability monitoring",
  "Product support",
];

const projectFeatures = [
  "Integrations",
  "Historical imports",
  "Custom reporting",
  "Additional major processes",
  "Significant website work",
  "Specialized automation or unique development requests",
];

const FeatureList = ({ features }: { features: string[] }) => (
  <div className="mt-6 space-y-3">
    {features.map((feature) => (
      <div key={feature} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
        <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <span>{feature}</span>
      </div>
    ))}
  </div>
);

const PricingSection = () => (
  <section id="pricing" className="relative overflow-hidden bg-primary/[0.045] py-20 sm:py-28">
    <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
    <div className="container relative">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Badge variant="secondary" className="rounded-full px-4 py-1.5">Straightforward pricing</Badge>
        <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">Hands-on implementation. Reliable ongoing service.</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Start with a focused system configured around your business. Add larger capabilities only when they are actually needed.
        </p>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-3">
        <Reveal>
          <article className="h-full rounded-[1.75rem] border bg-background p-7 shadow-card sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-sm font-semibold text-primary">Implementation</span>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Starting at</p>
                <div className="mt-1 font-display text-4xl font-bold">$2,500</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">A hands-on implementation configured around the way your business handles custom requests.</p>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/25 text-primary">
                <Wrench className="h-5 w-5" />
              </div>
            </div>
            <FeatureList features={implementationFeatures} />
          </article>
        </Reveal>

        <Reveal delay={80}>
          <article className="relative h-full rounded-[1.75rem] border-2 border-accent bg-background p-7 shadow-elevated sm:p-8">
            <span className="absolute -top-3 left-7 rounded-full border border-accent bg-background px-3 py-1 text-xs font-semibold text-primary shadow-sm">Ongoing service</span>
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-sm font-semibold text-primary">Ongoing service</span>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">Starting at</p>
                <div className="mt-1 font-display text-4xl font-bold">$299<span className="text-lg font-semibold text-muted-foreground"> / month</span></div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">The platform, hosting, maintenance, improvements, and support required to keep Small Wins running reliably.</p>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <ShieldCheck className="h-5 w-5" />
              </div>
            </div>
            <FeatureList features={monthlyFeatures} />
            <Button className="mt-7 w-full" asChild>
              <a href="#contact">Talk through your workflow</a>
            </Button>
          </article>
        </Reveal>

        <Reveal delay={160}>
          <article className="h-full rounded-[1.75rem] border bg-background p-7 shadow-card sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-sm font-semibold text-primary">Additional projects</span>
                <div className="mt-3 font-display text-4xl font-bold">Quoted separately</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Larger additions can be scoped as separate projects when your business needs them.</p>
              </div>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-primary">
                <Plus className="h-5 w-5" />
              </div>
            </div>
            <FeatureList features={projectFeatures} />
          </article>
        </Reveal>
      </div>

      <Reveal className="mx-auto mt-8 max-w-5xl rounded-2xl border border-primary/15 bg-background px-6 py-5 text-center text-sm leading-relaxed text-muted-foreground shadow-sm">
        Small Wins is a standardized platform with hands-on configuration. Major additions are reviewed and approved before work begins.
      </Reveal>
    </div>
  </section>
);

export default PricingSection;
