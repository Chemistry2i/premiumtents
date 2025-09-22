import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { toast } from "sonner";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for subscribing to our newsletter!");
    setEmail("");
  };

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 gradient-gold rounded-lg flex items-center justify-center">
                <i className="fas fa-campground text-xl text-primary-foreground"></i>
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold">Premium Tents</h3>
                <p className="text-xs text-muted-foreground font-body">Luxury Event Solutions</p>
              </div>
            </div>
            <p className="font-body text-sm text-muted-foreground mb-4">
              Transform your events with our premium tent solutions. 10+ years of excellence in creating unforgettable moments.
            </p>
            <div className="flex gap-3">
              {[
                { icon: "fab fa-facebook", link: "#" },
                { icon: "fab fa-instagram", link: "#" },
                { icon: "fab fa-youtube", link: "#" },
                { icon: "fab fa-twitter", link: "#" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className="w-10 h-10 rounded-full bg-primary/10 hover:gradient-gold flex items-center justify-center transition-all hover:text-primary-foreground"
                >
                  <i className={`${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Gallery", href: "#gallery" },
                { label: "Pricing Plans", href: "#pricing" },
                { label: "Testimonials", href: "#testimonials" },
                { label: "Contact Us", href: "#contact" }
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    <i className="fas fa-chevron-right text-xs mr-2 text-primary"></i>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                "Wedding Tents",
                "Corporate Events",
                "Traditional Functions",
                "Exhibition Tents",
                "Party Tents",
                "Emergency Shelter"
              ].map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                  >
                    <i className="fas fa-check-circle text-xs mr-2 text-primary"></i>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Stay Updated</h4>
            <p className="font-body text-sm text-muted-foreground mb-4">
              Subscribe to our newsletter for exclusive offers and event tips
            </p>
            <form onSubmit={handleNewsletter} className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="font-body"
              />
              <Button
                type="submit"
                className="w-full gradient-gold text-primary-foreground hover:shadow-glow font-accent font-semibold"
              >
                <i className="fas fa-envelope mr-2"></i>
                Subscribe
              </Button>
            </form>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <a
                href="tel:+256786021431"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <i className="fas fa-phone mr-2 text-primary"></i>
                <span className="font-body">+256 786021431</span>
              </a>
              <a
                href="mailto:wambogohassan63@gmail.com"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <i className="fas fa-envelope mr-2 text-primary"></i>
                <span className="font-body">wambogohassan63@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm text-muted-foreground text-center md:text-left">
              © 2024 Premium Tents Uganda. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;