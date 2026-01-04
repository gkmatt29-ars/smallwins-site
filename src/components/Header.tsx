import { Button } from "@/components/ui/button";
import logoColor from "@/assets/logo-color.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container relative flex h-16 items-center">
        {/* Left: Logo */}
        <a href="/" className="flex items-center">
          <img src={logoColor} alt="Small Wins" className="h-8 w-auto" />
        </a>

        {/* Center: Nav (true centered) */}
<nav
  className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8"
  aria-label="Primary navigation"
>
  <a
    href="#how-it-works"
    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
  >
    How it works
  </a>
  <a
    href="#who-its-for"
    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
  >
    Who it’s for
  </a>
  <a
    href="#founder"
    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
  >
    Setup
  </a>
  <a
    href="#pricing"
    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
  >
    Pricing
  </a>
</nav>


        {/* Right: Login */}
        <div className="ml-auto">
          <Button
  size="sm"
  asChild
  className="bg-accent text-accent-foreground hover:bg-accent/90"
>
  <a
    href="https://admin.smallwins.ai"
    target="_blank"
    rel="noopener noreferrer"
  >
    Order Hub
  </a>
</Button>

        </div>
      </div>
    </header>
  );
};

export default Header;
