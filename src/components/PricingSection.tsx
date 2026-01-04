import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

type Tier = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
};

const PricingSection = () => {
  const tiers: Tier[] = [
    {
      name: "Core",
      price: "$149 / month",
      tagline: "Everything most small teams need to run custom work smoothly.",
      highlight: true,
      badge: "Best fit for most teams",
      features: [
        "Branded order form",
        "Order Hub with detailed order pages",
        "Status, priority, and due date tracking",
        "Revenue + margin tracking",
        "File uploads (logos, artwork, specs)",
        "Internal + customer email updates",
      ],
    },
    {
      name: "White-glove",
      price: "Quoted",
      tagline: "For complex workflows, multiple teams, or ongoing customization.",
      features: [
        "Multi-location or multi-brand setups",
        "Advanced routing and custom logic",
        "Ongoing workflow tuning",
        "Dedicated support and priorities",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="secondary"
            className="mb-5 border px-4 py-1.5 text-sm font-medium"
            style={{ borderColor: "#dbc078", color: "#175382" }}
          >
            Pricing
          </Badge>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            One-time setup, then a simple monthly fee
          </h2>

          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            I set everything up to match how you work — then you pay monthly to
            keep orders organized and customers informed.
          </p>
        </div>

        {/* One-time setup */}
        <div className="mt-8 rounded-2xl border bg-background p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-lg font-semibold">One-time setup</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Typically{" "}
                <span className="font-medium text-foreground">
                  $750–$1,500
                </span>
                . Final quote after a quick look at your workflow.
              </p>
            </div>

            <Button
              asChild
              className="w-full sm:w-auto"
              style={{ backgroundColor: "#175382" }}
            >
              <a href="mailto:hello@smallwins.ai?subject=Small%20Wins%20setup%20quote">
                Get a setup quote
              </a>
            </Button>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Form branded to your logo and colors",
              "Fields tailored to your jobs",
              "Order Hub configured for your workflow",
              "Email notifications set up",
              "Live walkthrough and handoff",
            ].map((f) => (
              <div key={f} className="flex gap-3">
                <Check className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">{f}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            Setup covers one primary workflow.
          </p>
        </div>

        {/* Monthly plans */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={[
                "relative rounded-2xl border bg-background p-6 shadow-sm",
                tier.highlight ? "ring-1" : "",
              ].join(" ")}
              style={
                tier.highlight
                  ? { ringColor: "#dbc078", borderColor: "#dbc078" }
                  : undefined
              }
            >
              {/* Badge */}
              {tier.badge && (
                <span
                  className="absolute -top-3 left-6 rounded-full border bg-background px-3 py-1 text-xs font-medium"
                  style={{ borderColor: "#dbc078", color: "#175382" }}
                >
                  {tier.badge}
                </span>
              )}

              <div>
                <h3 className="text-lg font-semibold">{tier.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {tier.tagline}
                </p>
              </div>

              <div className="mt-6">
                <div className="text-3xl font-semibold tracking-tight">
                  {tier.price}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Monthly, after setup
                </p>
              </div>

              <div className="mt-6 space-y-3">
                {tier.features.map((f) => (
                  <div key={f} className="flex gap-3">
                    <Check className="mt-0.5 h-5 w-5 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">{f}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
