import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoColor from "@/assets/logo-color.svg";
import { CLIENT_LOGIN_URL } from "@/lib/constants";
import { ExternalLink, Menu, X } from "lucide-react";

const navItems = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#product", label: "Product" },
  { href: "/#setup", label: "Setup" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#faq", label: "FAQ" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="container flex h-[4.5rem] items-center gap-6">
        <a href="/" className="flex shrink-0 items-center" aria-label="Small Wins home">
          <img src={logoColor} alt="Small Wins" className="h-7 w-auto sm:h-8" />
        </a>

        <nav className="mx-auto hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <Button variant="ghost" size="sm" asChild>
            <a href={CLIENT_LOGIN_URL} target="_blank" rel="noopener noreferrer">
              Client login
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href="/#contact">Talk through your workflow</a>
          </Button>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-lg border bg-background lg:hidden"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-background px-6 pb-6 pt-4 shadow-elevated lg:hidden">
          <nav className="mx-auto flex max-w-xl flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={close}
                className="rounded-lg px-3 py-3 text-sm font-medium hover:bg-muted"
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <Button variant="outline" asChild>
                <a href={CLIENT_LOGIN_URL} target="_blank" rel="noopener noreferrer">
                  Client login
                </a>
              </Button>
              <Button asChild>
                <a href="/#contact" onClick={close}>Talk through your workflow</a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
