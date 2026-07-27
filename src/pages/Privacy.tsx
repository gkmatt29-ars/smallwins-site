import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SALES_EMAIL } from "@/lib/constants";

const Privacy = () => (
  <>
    <Helmet>
      <title>Privacy Notice | Small Wins</title>
      <meta name="description" content="How Small Wins handles information submitted through the website inquiry form." />
      <link rel="canonical" href="https://smallwins.ai/privacy" />
    </Helmet>
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container max-w-3xl pb-24 pt-32 sm:pt-36">
        <span className="section-kicker">Privacy notice</span>
        <h1 className="mt-4 font-display text-4xl font-bold sm:text-5xl">Website inquiry information</h1>
        <p className="mt-5 text-sm text-muted-foreground">Last updated: July 24, 2026</p>

        <div className="prose-smallwins mt-10 space-y-8">
          <section>
            <h2>What is collected</h2>
            <p>When you submit the workflow inquiry form, Small Wins collects the information you provide, such as your name, business name, email address, website, type of work, current intake method, and workflow frustration.</p>
          </section>
          <section>
            <h2>How it is used</h2>
            <p>The information is used to review your inquiry, assess whether Small Wins may be a practical fit, respond to you, and maintain a record of sales conversations. It is not sold to advertisers.</p>
          </section>
          <section>
            <h2>Where it is stored</h2>
            <p>Inquiry information is stored in the Small Wins Supabase project and may be included in an email notification sent to Matthew so he can review and respond to your request.</p>
          </section>
          <section>
            <h2>Retention and requests</h2>
            <p>Inquiry records may be retained for business follow-up and recordkeeping. To request access, correction, or deletion of information you submitted, email <a href={`mailto:${SALES_EMAIL}`}>{SALES_EMAIL}</a>.</p>
          </section>
          <section>
            <h2>Updates</h2>
            <p>This notice may be updated as the website and Small Wins services develop. The current version will be posted on this page.</p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  </>
);

export default Privacy;
