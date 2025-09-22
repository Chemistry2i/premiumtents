import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Pricing", href: "#pricing" },
    { label: "About", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center">
              <i className="fas fa-campground text-2xl text-primary-foreground"></i>
            </div>
            <div>
              <h1 className="font-heading text-xl font-bold text-foreground">
                Premium Tents
              </h1>
              <p className="text-xs text-muted-foreground font-body">
                Luxury Event Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-foreground/80 hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="tel:+256786021431"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-body">+256 786021431</span>
              </a>
              <a
                href="mailto:wambogohassan63@gmail.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
            <Button className="gradient-gold text-primary-foreground hover:shadow-glow font-accent font-semibold">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96" : "max-h-0"
          )}
        >
          <div className="py-4 space-y-4 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-2 text-foreground/80 hover:text-primary transition-colors font-body"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-border">
              <a href="tel:+256786021431" className="block py-2 text-primary font-body">
                <i className="fas fa-phone mr-2"></i> +256 786021431
              </a>
              <Button className="w-full mt-4 gradient-gold text-primary-foreground font-accent font-semibold">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;