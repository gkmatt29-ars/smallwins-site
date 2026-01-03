import { Button } from "@/components/ui/button";
import logoColor from "@/assets/logo-color.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="flex items-center">
          <img 
            src={logoColor} 
            alt="Small Wins" 
            className="h-8 w-auto"
          />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#case-study" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Case Study
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>

        <Button size="sm" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
          <a href="https://admin.smallwins.ai" target="_blank" rel="noopener noreferrer">
            Log In
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;