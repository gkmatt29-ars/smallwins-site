import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const FounderSection = () => {
  const bullets = [
    "We tailor your order form fields to match how you actually take requests.",
    "We configure statuses, due dates, and update emails so fewer follow-ups hit your phone.",
    "We iterate fast—small tweaks as you learn what your customers really need.",
  ];

  return (
    <section id="founder" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* LEFT */}
          <div>
            <Badge variant="secondary" className="mb-4">
              Hands-on setup
            </Badge>

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Built and supported by a real human
            </h2>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Hi — I’m Matt, the founder of Small Wins. I’ve built analytics and
              workflow systems at Adobe and now Vanguard.
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              When you sign up, I personally help set up your form, Order Hub, and
              notifications so it fits how your business actually works.
            </p>

            <div className="mt-6 space-y-3">
              {bullets.map((b) => (
                <div key={b} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-muted-foreground" />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {b}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild>
                <a href="mailto:hello@smallwins.ai?subject=Small%20Wins%20setup">
                  Talk through your workflow
                </a>
              </Button>

              <p className="text-sm text-muted-foreground">
                Fast reply. Simple setup. No pressure.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
            <h3 className="text-lg font-semibold">What setup looks like</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Most businesses are live quickly, then refine from there.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border p-4">
                <p className="text-sm font-medium">1) Quick intake</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  You show me how orders come in today.
                </p>
              </div>

              <div className="rounded-xl border p-4">
                <p className="text-sm font-medium">2) Customize</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  We tailor fields, statuses, and emails.
                </p>
              </div>

              <div className="rounded-xl border p-4">
                <p className="text-sm font-medium">3) Launch & refine</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Use it, then tighten the workflow with small tweaks.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-muted/40 p-4">
              <p className="text-sm text-muted-foreground">
                The goal isn’t more software — it’s fewer follow-ups.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
