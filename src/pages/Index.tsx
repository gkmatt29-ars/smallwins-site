import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import { OrderHubSection } from "@/components/OrderHubSection";
import LiveExampleSection from "@/components/LiveExampleSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Small Wins – Custom Order Management for Small Businesses</title>
        <meta
          name="description"
          content="Clean order forms for customers. A powerful admin view for your business. Small Wins helps small businesses manage custom orders — embroidery, screen printing, trophies, and more."
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
          content="Clean order forms for customers. A powerful admin view for your business. Manage custom orders without the chaos."
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
          content="Clean order forms for customers. A powerful admin view for your business. Manage custom orders without the chaos."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <HowItWorksSection />
          <OrderHubSection />
          <LiveExampleSection />
          <BenefitsSection />
          <AboutSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
