import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import requestTypesImg from "@/assets/product/01-form-request-types.png";
import hubImg from "@/assets/product/04-order-hub-desktop.png";

const HeroSection = () => {
  return (
    <section id="top" className="hero-grid relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute -left-28 top-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-20 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-3xl" />

      <div className="container relative grid items-center gap-14 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/45 bg-accent/15 px-4 py-2 text-sm font-semibold text-foreground opacity-0 animate-fade-in-up">
            <Sparkles className="h-4 w-4 text-primary" />
            Order intake and tracking for custom shops
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-foreground opacity-0 animate-fade-in-up animation-delay-100 sm:text-6xl lg:text-[4.65rem]">
            Turn custom requests into <span className="text-primary">organized, trackable orders.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground opacity-0 animate-fade-in-up animation-delay-200 sm:text-xl">
            Small Wins brings customer details, files, deadlines, notes, updates, and job financials into one shared Order Hub—without a complicated software rollout.
          </p>

          <p className="mt-3 flex items-center gap-2 text-sm font-medium text-foreground/75 opacity-0 animate-fade-in-up animation-delay-300 sm:text-base">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
            Less digging. Fewer missing details. One clear place to manage the work.
          </p>

          <div className="mt-9 flex flex-col gap-3 opacity-0 animate-fade-in-up animation-delay-400 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Talk through your workflow
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#demo">
                Explore a sample setup
              </a>
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground opacity-0 animate-fade-in-up animation-delay-500">
            <span>Hands-on implementation</span>
            <span>Mobile friendly</span>
            <span>Built for real workflows</span>
          </div>
        </div>

        <div className="relative mx-auto min-h-[410px] w-full max-w-[720px] opacity-0 animate-fade-in animation-delay-300 sm:min-h-[500px] lg:min-h-[560px]">
          <div className="absolute inset-x-10 bottom-0 top-12 rounded-[2.5rem] bg-gradient-to-br from-primary/15 via-white to-accent/20 blur-sm" />

          <div className="hero-form-card absolute left-0 top-10 w-[58%] overflow-hidden rounded-2xl border border-primary/15 bg-white p-2 shadow-elevated sm:p-3">
            <img src={requestTypesImg} alt="Small Wins branded customer request portal" className="w-full rounded-xl" loading="eager" />
          </div>

          <div className="hero-hub-card absolute bottom-4 right-0 w-[78%] overflow-hidden rounded-2xl border border-primary/20 bg-white p-2 shadow-2xl sm:p-3">
            <div className="h-[285px] overflow-hidden rounded-xl sm:h-[370px] lg:h-[420px]">
              <img src={hubImg} alt="Small Wins Order Hub with orders, status, deadlines, and financial summaries" className="w-full" loading="eager" />
            </div>
          </div>

          <div className="floating-chip absolute right-[5%] top-2 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/95 px-3 py-2 text-xs font-semibold text-emerald-700 shadow-elevated backdrop-blur sm:text-sm">
            <CheckCircle2 className="h-4 w-4" />
            Request received
          </div>
          <div className="floating-chip-delayed absolute bottom-[3%] left-[6%] inline-flex items-center gap-2 rounded-full border border-accent/50 bg-white/95 px-3 py-2 text-xs font-semibold text-foreground shadow-elevated backdrop-blur sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Order created automatically
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
