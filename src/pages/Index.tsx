import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import { OrderHubSection } from "@/components/OrderHubSection";
import FounderSection from "@/components/FounderSection";
import LiveExampleSection from "@/components/LiveExampleSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Small Wins – Custom Order Management for Small Businesses</title>
        <meta
          name="description"
          content="Clean order forms for customers. One simple Order Hub for your business. Small Wins helps small businesses manage custom, project-based work — apparel, embroidery, screen printing, trophies, awards, and more."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://smallwins.ai" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Small Wins – Custom Order Management for Small Businesses"
        />
        <meta
          property="og:description"
          content="Collect requests, track work, and keep customers informed — without the chaos. Built for custom, project-based work."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smallwins.ai" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Small Wins – Custom Order Management for Small Businesses"
        />
        <meta
          name="twitter:description"
          content="Collect requests, track work, and keep customers informed — without the chaos. Built for custom, project-based work."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <WhoItsForSection />
          <HowItWorksSection />
          <OrderHubSection />
          <FounderSection />
          <LiveExampleSection />
          <PricingSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
