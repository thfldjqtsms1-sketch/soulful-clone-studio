import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "ABOUT", href: "/about" },
  { name: "REVIEWS", href: "/reviews" },
  { name: "ENJOY", href: "/enjoy" },
  { name: "CARDS", href: "/cards" },
  { name: "JOIN", href: "/join" },
  { name: "BUY", href: "/buy" },
  { name: "LEARN", href: "/learn" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top download bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-sm border-b border-border py-2">
        <div className="container flex items-center justify-center gap-4">
          <span className="text-sm text-foreground">고품격 타로 상담 마음통 설치하기</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="h-7 text-xs">
              <Download className="w-3 h-3" />
              Google Play
            </Button>
            <Button variant="outline" size="sm" className="h-7 text-xs">
              <Download className="w-3 h-3" />
              App Store
            </Button>
          </div>
        </div>
      </div>

      {/* Recruitment banner */}
      <div className="fixed top-10 left-0 right-0 z-50 bg-secondary py-2">
        <div className="container flex items-center justify-center gap-4">
          <span className="text-sm text-foreground">마음통 사주・신점 상담사 모집중</span>
          <div className="flex items-center gap-2 text-primary font-mono font-bold">
            <span>05</span>:<span>14</span>:<span>28</span>:<span>00</span>
          </div>
          <Button variant="goldOutline" size="sm" className="h-7 text-xs">
            지원하기
          </Button>
        </div>
      </div>

      {/* Main navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-[84px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full gradient-gold flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-foreground tracking-wide">MAUM TALK</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[148px] z-30 bg-background/98 backdrop-blur-lg lg:hidden"
          >
            <nav className="container py-8 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className={`block py-3 text-lg font-medium transition-colors ${
                      location.pathname === link.href ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
