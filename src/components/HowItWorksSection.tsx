import { FileCheck2, LayoutDashboard, Paperclip } from "lucide-react";
import Reveal from "@/components/Reveal";

const steps = [
  {
    icon: FileCheck2,
    title: "Start with a complete request",
    description: "Branded forms collect the details, specifications, deadlines, and files your team needs before work begins.",
  },
  {
    icon: LayoutDashboard,
    title: "Turn it into a working order",
    description: "Every submission appears in the Order Hub, ready to prioritize, track against a deadline, and move forward.",
  },
  {
    icon: Paperclip,
    title: "Keep the full job connected",
    description: "Customer information, artwork, pricing, notes, updates, costs, and margin stay attached through completion.",
  },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="relative overflow-hidden bg-primary/[0.045] py-20 sm:py-28">
    <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
    <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

    <div className="container relative">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="section-kicker">How it works</span>
        <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
          One request becomes one working order.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">Simple by design. Detailed where it matters.</p>
      </Reveal>

      <div className="relative mx-auto mt-14 max-w-6xl">
        <div className="absolute left-[16%] right-[16%] top-9 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block" />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 100}>
                <article className="group relative h-full rounded-2xl border border-primary/15 bg-background p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="inline-flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-primary-foreground shadow-lg transition-transform group-hover:rotate-2 group-hover:scale-105">
                      <Icon className="h-8 w-8" />
                    </div>
                    <span className="font-display text-5xl font-bold text-accent/45">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{step.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
