import { FileText, LayoutDashboard, Bell } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Collect",
    description: "Customers submit requests through your branded form.",
  },
  {
    icon: LayoutDashboard,
    title: "Track",
    description: "See everything in one place. No more digging.",
  },
  {
    icon: Bell,
    title: "Inform",
    description: "Customers get updates. You get fewer calls.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-primary/5 relative">
      {/* Blue accent */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
      
      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Simple by <span className="text-primary">design</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            One form. One dashboard. One source of truth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="relative group"
            >
              <div className="relative bg-background rounded-xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 border-2 border-primary/20 hover:border-accent/40">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-lg">
                  {index + 1}
                </div>
                <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <step.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
