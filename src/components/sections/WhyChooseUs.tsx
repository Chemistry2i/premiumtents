import { useEffect, useState } from "react";

const features = [
  {
    icon: "fa-award",
    title: "Premium Quality",
    description: "Top-grade tents built to withstand weather while maintaining elegance",
    stat: "100%",
    statLabel: "Quality Assured"
  },
  {
    icon: "fa-clock",
    title: "Timely Delivery",
    description: "We value your time and ensure punctual setup for every event",
    stat: "24/7",
    statLabel: "Support Available"
  },
  {
    icon: "fa-users",
    title: "Expert Team",
    description: "Professional staff with years of experience in event management",
    stat: "50+",
    statLabel: "Trained Staff"
  },
  {
    icon: "fa-shield-alt",
    title: "Fully Insured",
    description: "Complete insurance coverage for your peace of mind",
    stat: "10+",
    statLabel: "Years Experience"
  }
];

const WhyChooseUs = () => {
  const [counters, setCounters] = useState([0, 0, 0, 0]);

  useEffect(() => {
    const targets = [100, 24, 50, 10];
    const interval = setInterval(() => {
      setCounters(prev => prev.map((count, index) => {
        const target = targets[index];
        const increment = Math.ceil(target / 50);
        return count < target ? Math.min(count + increment, target) : target;
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, var(--primary) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 border border-primary/20 mb-4">
            <i className="fas fa-star text-primary mr-2"></i>
            <span className="text-sm font-body">Why Us</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Why Choose <span className="text-gradient">Premium Tents</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            We combine quality, reliability, and exceptional service to make your events memorable
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl gradient-gold flex items-center justify-center shadow-glow group-hover:animate-pulse">
                <i className={`fas ${feature.icon} text-3xl text-primary-foreground`}></i>
              </div>

              {/* Counter */}
              <div className="mb-4">
                <span className="font-accent text-5xl font-bold text-foreground">
                  {counters[index]}
                  {index === 0 && '%'}
                  {index === 1 && '/7'}
                  {index === 2 && '+'}
                  {index === 3 && '+'}
                </span>
                <p className="text-sm text-muted-foreground font-body mt-1">
                  {feature.statLabel}
                </p>
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold mb-2">{feature.title}</h3>
              <p className="font-body text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="bg-card rounded-2xl p-8 shadow-elegant">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: "fa-truck", label: "Free Delivery", value: "Within 50km" },
              { icon: "fa-tools", label: "Free Setup", value: "Professional Team" },
              { icon: "fa-certificate", label: "Certified", value: "ISO 9001:2015" },
              { icon: "fa-handshake", label: "Trusted", value: "200+ Events" }
            ].map((badge, index) => (
              <div key={index} className="text-center">
                <i className={`fas ${badge.icon} text-2xl text-primary mb-2`}></i>
                <div className="font-accent font-semibold text-foreground">{badge.label}</div>
                <div className="text-sm text-muted-foreground font-body">{badge.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;