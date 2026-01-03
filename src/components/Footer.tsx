import logoWhite from "@/assets/logo-white.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img 
              src={logoWhite} 
              alt="Small Wins" 
              className="h-6 w-auto opacity-90"
            />
          </div>

          <nav className="flex items-center gap-8">
            <a 
              href="https://admin.smallwins.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-background/70 hover:text-background transition-colors"
            >
              Admin Console
            </a>
            <a 
              href="mailto:hello@smallwins.ai"
              className="text-sm text-background/70 hover:text-background transition-colors"
            >
              Contact
            </a>
          </nav>

          <p className="text-sm text-background/50">
            © {currentYear} Small Wins
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
