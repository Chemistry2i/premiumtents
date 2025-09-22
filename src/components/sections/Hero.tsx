import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const heroTexts = [
    "Premium Tents for Every Occasion",
    "Transform Your Events into Memories",
    "Luxury Solutions for Unforgettable Moments"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-120 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background z-10" />
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070"
          alt="Luxury tent event"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-primary/20 mb-6 animate-fade-in">
            <i className="fas fa-star text-primary mr-2"></i>
            <span className="text-sm font-body text-foreground">
              10+ Years of Excellence
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient animate-fade-in">
              Hire & Buy
            </span>
            <br />
            <span className="text-foreground animate-slide-up">
              {heroTexts[textIndex]}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-body text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in">
            From intimate gatherings to grand celebrations, we provide luxury tent solutions 
            that elevate your events to extraordinary experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <Button
              size="lg"
              className="gradient-gold text-primary-foreground hover:shadow-glow font-accent font-semibold text-lg px-8 py-6"
            >
              <i className="fas fa-calendar-check mr-2"></i>
              Book a Tent Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-accent font-semibold text-lg px-8 py-6"
            >
              <i className="fas fa-th-large mr-2"></i>
              Browse Categories
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { icon: "fa-trophy", value: "200+", label: "Events Served" },
              { icon: "fa-users", value: "1000+", label: "Happy Clients" },
              { icon: "fa-campground", value: "50+", label: "Tent Options" },
              { icon: "fa-clock", value: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <i className={`fas ${stat.icon} text-2xl text-primary mb-2`}></i>
                <div className="font-accent font-bold text-2xl text-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-body">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
