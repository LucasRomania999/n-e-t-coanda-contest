import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Prepare", path: "/vocabulary" },
  { label: "Enroll", path: "/enroll" },
  { label: "Exam", path: "/exam" },
  { label: "Resources", path: "/resources" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-mono-display text-lg font-bold text-primary">
          <Cpu className="h-6 w-6" />
          <span>NET<span className="text-foreground">'26</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path}>
              <Button
                variant="ghost"
                className={cn(
                  "font-mono-display text-xs uppercase tracking-widest",
                  location.pathname === item.path && "text-primary bg-primary/10"
                )}
              >
                {item.label}
              </Button>
            </Link>
          ))}
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} onClick={() => setOpen(false)}>
              <div className={cn(
                "px-6 py-3 font-mono-display text-sm uppercase tracking-widest border-b border-border/30",
                location.pathname === item.path && "text-primary bg-primary/5"
              )}>
                {item.label}
              </div>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
