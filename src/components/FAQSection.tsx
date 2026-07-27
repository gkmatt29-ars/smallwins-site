import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Reveal from "@/components/Reveal";

const faqs = [
  {
    question: "What kinds of businesses are a good fit?",
    answer: "Small Wins is designed for growing businesses that handle custom, detail-heavy orders involving different specifications, files, deadlines, pricing, and follow-up. It is especially useful for custom apparel, embroidery, screen printing, trophies, awards, promotional products, and related shops that have outgrown email, paper forms, and spreadsheets.",
  },
  {
    question: "Can I collect more than one type of request?",
    answer: "Yes. Related request types can use different form questions while still flowing into one shared Order Hub. For example, embroidery and trophy requests can be collected separately and managed through the same overall order process.",
  },
  {
    question: "What is included in implementation?",
    answer: "Implementation includes workflow discovery, branded request forms, related request-type configuration, Order Hub setup, email setup, testing, training, and launch support. Pricing starts at $2,500 and depends on complexity.",
  },
  {
    question: "What is included in the monthly service?",
    answer: "The monthly service includes access to the customer forms and private Order Hub, hosting, routine maintenance, product improvements, reliability monitoring, and product support. Pricing starts at $299 per month.",
  },
  {
    question: "Can Small Wins replace my existing request form?",
    answer: "Often, yes. I can review what you collect today, simplify where appropriate, and connect new submissions directly to the Order Hub. The best approach is confirmed during workflow discovery.",
  },
  {
    question: "What happens if I need something new?",
    answer: "Small adjustments within the existing setup can often be handled through normal support. New major processes, integrations, historical imports, custom reporting, and specialized development are reviewed and quoted separately before work begins.",
  },
];

const FAQSection = () => (
  <section id="faq" className="py-20 sm:py-28">
    <div className="container">
      <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <span className="section-kicker">Frequently asked</span>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">A few things worth knowing.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Straightforward answers about fit, implementation, pricing, and what happens as your business evolves.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <Accordion type="single" collapsible className="rounded-[1.75rem] border bg-background px-5 shadow-card sm:px-7">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline sm:text-lg">{faq.question}</AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </div>
  </section>
);

export default FAQSection;
