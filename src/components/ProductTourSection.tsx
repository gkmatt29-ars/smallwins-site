import { Badge } from "@/components/ui/badge";
import { Check, FileUp, Filter, MailCheck, Smartphone, WalletCards } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProductScreenshot from "@/components/ProductScreenshot";
import requestTypesImg from "@/assets/product/01-form-request-types.png";
import requestDetailsImg from "@/assets/product/02-form-order-details.png";
import confirmationImg from "@/assets/product/03-form-confirmation.png";
import hubImg from "@/assets/product/04-order-hub-desktop.png";
import detailsTopImg from "@/assets/product/05-order-details-top.png";
import detailsFinancialsImg from "@/assets/product/06-order-details-files-financials.png";
import mobileHubImg from "@/assets/product/07-order-hub-mobile.png";
import mobileDetailsImg from "@/assets/product/08-order-details-mobile.png";

const FeatureList = ({ items }: { items: string[] }) => (
  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
    {items.map((item) => (
      <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Check className="h-3 w-3" />
        </span>
        {item}
      </li>
    ))}
  </ul>
);

const ProductTourSection = () => (
  <section id="product" className="overflow-hidden py-20 sm:py-28">
    <div className="container">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Badge variant="secondary" className="rounded-full px-4 py-1.5">Product tour</Badge>
        <h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">
          The form and the Hub work as one system.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
          Better information comes in, the order is created automatically, and every detail stays visible as the work moves forward.
        </p>
      </Reveal>

      <div className="mt-20 space-y-24 sm:space-y-32">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <Reveal>
            <div className="max-w-xl">
              <span className="section-kicker">01 · Customer intake</span>
              <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Start with a complete request</h3>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Branded forms guide customers through the details, specifications, deadlines, and files your team needs before work begins.
              </p>
              <FeatureList items={["Branded request experience", "Related request types", "Request-specific fields", "Customer file uploads", "Clear confirmation", "Customer and owner email notifications"]} />
            </div>
          </Reveal>

          <Reveal delay={100} className="relative min-h-[520px] sm:min-h-[590px]">
            <div className="absolute inset-8 rounded-[2.5rem] bg-gradient-to-br from-accent/20 via-primary/5 to-primary/15 blur-xl" />
            <ProductScreenshot
              src={requestTypesImg}
              alt="Customer selects a request type in a branded Small Wins form"
              className="absolute left-0 top-8 z-10 w-[72%] rotate-[-1.5deg]"
            />
            <ProductScreenshot
              src={requestDetailsImg}
              alt="Structured customer request fields and file upload"
              className="absolute right-0 top-0 z-20 w-[43%] rotate-[1.5deg]"
            />
            <ProductScreenshot
              src={confirmationImg}
              alt="Customer request submitted confirmation screen"
              className="absolute bottom-0 left-[18%] z-30 w-[68%] rotate-[0.5deg]"
            />
          </Reveal>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          <Reveal delay={80} className="lg:order-1">
            <div className="relative rounded-[2rem] bg-gradient-to-br from-primary/10 via-background to-accent/15 p-3 sm:p-6">
              <ProductScreenshot
                src={hubImg}
                alt="Small Wins Order Hub showing open orders, statuses, deadlines, priorities, and financial summaries"
                className="overflow-hidden"
                imageClassName="w-full"
              />
            </div>
          </Reveal>

          <Reveal className="lg:order-2">
            <div className="max-w-xl lg:pl-6">
              <span className="section-kicker">02 · Order overview</span>
              <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Turn every submission into a working order</h3>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                New requests automatically appear in the Order Hub, ready to prioritize, assign a status, track against a deadline, and move forward.
              </p>
              <FeatureList items={["Automatic order creation", "Search and filters", "Status and due dates", "Priority and blocked work", "Request types", "Open revenue, cost, and profit"]} />
            </div>
          </Reveal>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
          <Reveal>
            <div className="max-w-xl">
              <span className="section-kicker">03 · Order details</span>
              <h3 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Keep the full job connected</h3>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Customer information, artwork, pricing, notes, updates, costs, and margin stay attached to the order from intake through completion.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  { icon: FileUp, text: "Customer and admin uploads" },
                  { icon: WalletCards, text: "Revenue, COGS, profit, and margin" },
                  { icon: MailCheck, text: "Customer update actions" },
                  { icon: Filter, text: "Status, priority, and blocked reasons" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 rounded-xl border bg-background p-3 text-sm font-medium shadow-sm">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </span>
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={100} className="relative grid gap-5 sm:grid-cols-[1fr_0.88fr] sm:items-start">
            <ProductScreenshot
              src={detailsTopImg}
              alt="Order details with customer request, status, timing, assets, and internal notes"
              className="sm:translate-y-8"
            />
            <ProductScreenshot
              src={detailsFinancialsImg}
              alt="Order financials with revenue, cost of goods sold, profit, margin, and notes"
            />
          </Reveal>
        </div>
      </div>

      <Reveal className="relative mt-24 overflow-hidden rounded-[2rem] bg-foreground px-6 py-10 text-background shadow-2xl sm:px-10 lg:px-14 lg:py-14">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Smartphone className="h-6 w-6" />
            </div>
            <h3 className="font-display text-3xl font-bold text-background sm:text-4xl">Keep work moving away from the desk.</h3>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-background/70">
              Review active orders, check deadlines, open the details, and update the work from your phone.
            </p>
          </div>
          <div className="flex items-end justify-center gap-4 sm:gap-8">
            <ProductScreenshot
              src={mobileHubImg}
              alt="Mobile Small Wins Order Hub list"
              className="phone-frame w-[43%] max-w-[250px] rotate-[-2deg] border-white/20"
            />
            <ProductScreenshot
              src={mobileDetailsImg}
              alt="Mobile Small Wins order details"
              className="phone-frame w-[43%] max-w-[250px] translate-y-4 rotate-[2deg] border-white/20"
            />
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ProductTourSection;
