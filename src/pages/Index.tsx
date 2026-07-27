import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ProductTourSection from "@/components/ProductTourSection";
import FounderSection from "@/components/FounderSection";
import LiveExampleSection from "@/components/LiveExampleSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import LeadCaptureSection from "@/components/LeadCaptureSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const title = "Small Wins | Turn Custom Requests Into Trackable Orders";
const description = "Small Wins turns custom requests into organized, trackable orders with branded intake forms, a shared Order Hub, hands-on implementation, and ongoing support.";

const Index = () => (
  <>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href="https://smallwins.ai" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://smallwins.ai" />
      <meta property="og:image" content="https://smallwins.ai/og-small-wins.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://smallwins.ai/og-small-wins.png" />
    </Helmet>

    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhoItsForSection />
        <HowItWorksSection />
        <ProductTourSection />
        <FounderSection />
        <LiveExampleSection />
        <PricingSection />
        <FAQSection />
        <LeadCaptureSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  </>
);

export default Index;
