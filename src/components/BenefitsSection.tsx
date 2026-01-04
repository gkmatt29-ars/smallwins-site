import { Inbox, Search, FileStack, Users } from "lucide-react";

const benefits = [
  {
    icon: Inbox,
    title: "Orders stop getting lost",
    description: "Everything comes in through one form and lands in your Order Hub.",
  },
  {
    icon: Search,
    title: "Details stay with the work",
    description: "Files, specs, and notes stay attached from request to completion.",
  },
  {
    icon: FileStack,
    title: "Status is always clear",
    description: "See what’s in progress, blocked, or due soon at a glance.",
  },
  {
    icon: Users,
    title: "Fewer customer follow-ups",
    description: "Automated updates answer questions before they’re asked.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 relative">
      {/* Blue + gold accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple by <span className="text-accent">design</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-3">
            One form. One Order Hub. Fewer follow-ups and less guesswork.
          </p>

          <p className="text-sm text-muted-foreground">
            Smart defaults and automated updates handle the busywork—so you don’t have to.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-background rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border-l-4 border-l-primary hover:border-l-accent"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
