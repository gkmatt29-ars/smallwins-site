import logoWhite from "@/assets/logo-white.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <img
            src={logoWhite}
            alt="Small Wins"
            className="h-6 w-auto opacity-90"
          />

          <p className="text-sm text-background/50">
            © {currentYear} Small Wins
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
