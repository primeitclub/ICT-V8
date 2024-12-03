import { Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import ict from "@/assets/ict.svg";
import { useMedia } from "use-media";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/../tailwind.config";

const config = resolveConfig(tailwindConfig);

interface NavItem {
  title: string;
  href: string;
}

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Schedule", href: "/schedule" },
  { title: "Events", href: "/events" },
  { title: "Contact", href: "/contact" },
  { title: "ICT Cup", href: "/ict-cup" },
];

export function Navbar() {
  const isLg = useMedia({ minWidth: config.theme.screens.lg });

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full text-white transition-colors bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/30"
      )}
    >
      <div className="container px-[1.5rem] flex items-center justify-between h-16 mx-auto">
        <Link
          to="/"
          className="flex items-center mr-6 space-x-2"
          aria-label="ICT Logo"
        >
          <img src={ict} className="object-contain w-20 h-10" alt="PITC logo" />
        </Link>
        <nav className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="transition-colors text-muted-foreground hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className="items-center justify-end hidden lg:flex">
          <Button>Get Started</Button>
        </div>
        {!isLg && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="[&_svg]:size-6" size="icon">
                <Menu />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="pl-1 pr-0 text-white border-r-gray-700 bg-gradient-to-b from-cyan-700 via-blue-800 to-blue-900"
            >
              <div className="px-7">
                <Link
                  to="/"
                  className="flex items-center mr-6 space-x-2"
                  aria-label="ICT Logo"
                >
                  <img
                    src={ict}
                    className="object-contain w-20 h-10"
                    alt="PITC logo"
                  />
                </Link>
                <nav className="flex flex-col mt-6 space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      to={item.href}
                      className="transition-colors text-muted-foreground hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
}
