import { Badge } from "@/components/ui/badge";
import { Award, Megaphone, Shirt, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";

const examples = [
  {
    icon: Shirt,
    title: "Apparel, embroidery & screen printing",
    description: "Collect garment details, quantities, artwork, deadlines, and customer notes without piecing the order together later.",
  },
  {
    icon: Award,
    title: "Trophies, awards & engraving",
    description: "Keep names, personalization, files, due dates, pricing, and approvals connected to the correct request.",
  },
  {
    icon: Megaphone,
    title: "Promotional products & related custom work",
    description: "Manage made-to-order jobs where every request comes with different specifications, files, and follow-up.",
  },
];

const pains = [
  "Where is the artwork?",
  "What did the customer request?",
  "When is it due?",
  "What are we waiting on?",
  "Did anyone follow up?",
  "Are we making money on it?",
];

const WhoItsForSection = () => (
  <section id="who-its-for" className="relative overflow-hidden py-20 sm:py-24">
    <div className="container">
      <Reveal className="mx-auto max-w-4xl text-center">
        <Badge variant="secondary" className="mb-5 rounded-full px-4 py-1.5">
          <Sparkles className="mr-1.5 h-3.5 w-3.5" />
          Built for custom work
        </Badge>
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Built for custom work that does not fit neatly into a shopping cart.
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Designed first for custom apparel, embroidery, screen printing, trophies, awards, promotional products, and related shops where every order comes with different details, files, deadlines, and follow-up.
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-foreground/75">
          Small Wins works best for growing teams that have outgrown email, paper forms, and spreadsheets—but do not need a complicated ERP.
        </p>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
        {examples.map((example, index) => {
          const Icon = example.icon;
          return (
            <Reveal key={example.title} delay={index * 90}>
              <div className="group h-full rounded-2xl border bg-background p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:rotate-3 group-hover:scale-105">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{example.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{example.description}</p>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="mx-auto mt-14 max-w-6xl overflow-hidden rounded-[2rem] border border-primary/15 bg-primary/[0.04] p-6 shadow-card sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="section-kicker">The root problem</span>
            <h3 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Custom work rarely arrives in one clean place.</h3>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Requests show up through emails, phone calls, texts, generic forms, spreadsheets, paper notes, and separate artwork files. Someone has to piece everything together before the work can even begin.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 lg:justify-end">
            {pains.map((pain) => (
              <span key={pain} className="pain-chip rounded-full border bg-background px-3.5 py-2 text-sm text-muted-foreground shadow-sm">
                “{pain}”
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default WhoItsForSection;
