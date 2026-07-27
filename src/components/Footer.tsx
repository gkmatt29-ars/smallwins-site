import logoWhite from "@/assets/logo-white.svg";
import { CLIENT_LOGIN_URL, DEMO_FORM_URL, LINKEDIN_URL, SALES_EMAIL } from "@/lib/constants";
import { ExternalLink, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-10 text-background">
      <div className="container">
        <div className="grid gap-8 border-b border-background/10 pb-8 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <img src={logoWhite} alt="Small Wins" className="h-7 w-auto opacity-95" />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-background/55">
              Turn custom requests into organized, trackable orders with hands-on implementation and a shared Order Hub.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-background/65">
            <a href={DEMO_FORM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-background">Demo</a>
            <a href="#pricing" className="hover:text-background">Pricing</a>
            <a href="#contact" className="hover:text-background">Contact</a>
            <a href={CLIENT_LOGIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-background">Client login</a>
            <a href="/privacy" className="hover:text-background">Privacy</a>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-background/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Small Wins. Built and supported by Matthew Daugherty.</p>
          <div className="flex flex-wrap items-center gap-5">
            <a href={`mailto:${SALES_EMAIL}`} className="inline-flex items-center gap-1.5 hover:text-background">
              <Mail className="h-3.5 w-3.5" /> {SALES_EMAIL}
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-background">
              <Linkedin className="h-3.5 w-3.5" /> LinkedIn <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
