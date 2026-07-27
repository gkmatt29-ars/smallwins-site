import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bot, ExternalLink, Linkedin, Rocket, Search, Settings2 } from "lucide-react";
import Reveal from "@/components/Reveal";
import { LINKEDIN_URL } from "@/lib/constants";

const implementationSteps = [
  {
    icon: Search,
    label: "Understand",
    title: "Show me how orders arrive today",
    description: "We review your current forms, emails, files, follow-up, and the places where work gets stuck.",
  },
  {
    icon: Settings2,
    label: "Configure",
    title: "Build your Small Wins setup",
    description: "I configure your branded request experience, related request types, shared Order Hub, statuses, emails, and operational settings.",
  },
  {
    icon: Rocket,
    label: "Launch",
    title: "Test, train, and go live",
    description: "We test the workflow, walk your team through it, launch the system, and refine the setup from real use.",
  },
];

const FounderSection = () => (
  <section id="setup" className="relative overflow-hidden bg-primary/[0.045] py-20 sm:py-28">
    <div className="pointer-events-none absolute -right-28 top-10 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
    <div className="container relative">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Badge variant="secondary" className="mb-5 rounded-full px-4 py-1.5">Hands-on implementation</Badge>
        <h2 className="font-display text-4xl font-bold sm:text-5xl">From scattered requests to a working system—in three steps.</h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          A practical implementation that starts with how your business works today and ends with a system your team can actually use.
        </p>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-3">
        {implementationSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Reveal key={step.label} delay={index * 90}>
              <article className="h-full rounded-[1.75rem] border bg-background p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-elevated sm:p-7">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-4xl font-bold text-accent/50">0{index + 1}</span>
                </div>
                <span className="section-kicker mt-6">{step.label}</span>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 lg:grid-cols-[1.02fr_0.98fr]">
        <Reveal>
          <div className="h-full rounded-[2rem] bg-foreground p-7 text-background shadow-2xl sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Bot className="h-6 w-6" />
            </div>
            <span className="mt-6 inline-flex text-xs font-bold uppercase tracking-[0.16em] text-accent">Modern implementation</span>
            <h3 className="mt-3 font-display text-3xl font-bold text-background">AI-assisted. Human-led.</h3>
            <p className="mt-4 text-base leading-relaxed text-background/70">
              Modern AI tools help accelerate setup, organize requirements, and refine forms and workflows. Every Small Wins implementation is still personally reviewed, configured, tested, and supported by Matthew.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-background/60">
              You get the advantages of modern technology without having to evaluate tools, write prompts, or redesign the process yourself.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="h-full rounded-[2rem] border border-primary/15 bg-background p-7 shadow-elevated sm:p-9">
            <span className="section-kicker">Founder-led</span>
            <h3 className="mt-3 font-display text-3xl font-bold">Work directly with the person configuring your system.</h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              I’m Matthew, the founder of Small Wins. I work with you from workflow discovery through configuration, testing, launch, and support—so important context does not disappear between sales and implementation.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              I have spent my career helping teams turn scattered information into clearer systems, reporting, and decisions.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild>
                <a href="#contact">Talk through your workflow</a>
              </Button>
              <Button variant="ghost" className="h-auto justify-start whitespace-normal text-left" asChild>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  View Matthew’s background on LinkedIn
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default FounderSection;
