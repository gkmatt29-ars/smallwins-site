import { Badge } from "@/components/ui/badge";
import { Shirt, CalendarDays, Hammer, Layers } from "lucide-react";

const WhoItsForSection = () => {
  const items = [
    {
      title: "Custom apparel & print shops",
      desc: "Embroidery, screen printing, promo products—files, mockups, and updates stay attached to the job.",
      icon: Shirt,
    },
    {
      title: "Event services",
      desc: "DJs, florists, planners, rentals—keep timelines, changes, and customer updates organized in one hub.",
      icon: CalendarDays,
    },
    {
      title: "Home improvement & service shops",
      desc: "Contractors, mechanics, repair—capture details, track progress, and reduce “any update?” calls.",
      icon: Hammer,
    },
    {
      title: "Other project-based work",
      desc: "If each request is slightly different and customers ask for updates, Small Wins keeps everything in one place.",
      icon: Layers,
    },
  ];

  return (
    <section id="who-its-for" className="py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          {/* Bigger pill to match "Approachable AI for Small Business" */}
          <Badge
            variant="secondary"
            className="mb-4 rounded-full px-6 py-2.5 text-sm font-medium"
          >
            Who it’s for
          </Badge>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for custom, project-based work
          </h2>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            If orders come in through email, texts, DMs, or phone calls—and status
            lives in someone’s head—Small Wins brings it all into one place.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border bg-background p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-muted/40 p-3">
                    <Icon className="h-5 w-5 text-foreground/80" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Restore your original common pain pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-muted-foreground">
          <span className="font-medium text-foreground">Common pain:</span>
          <span className="rounded-full border bg-background px-3 py-1">
            “Where is that file?”
          </span>
          <span className="rounded-full border bg-background px-3 py-1">
            “What’s the status?”
          </span>
          <span className="rounded-full border bg-background px-3 py-1">
            “When is it due?”
          </span>
          <span className="rounded-full border bg-background px-3 py-1">
            “Did we email them?”
          </span>
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
