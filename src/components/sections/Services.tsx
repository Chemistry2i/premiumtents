import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const services = [
  {
    id: 1,
    title: "Wedding Tents",
    icon: "fa-heart",
    image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?q=80&w=2070",
    description: "Elegant and romantic setups for your perfect day",
    features: ["Luxury Draping", "Climate Control", "Lighting Options", "Dance Floors"]
  },
  {
    id: 2,
    title: "Corporate Events",
    icon: "fa-briefcase",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
    description: "Professional spaces for business gatherings",
    features: ["Modular Design", "AV Equipment", "Branding Options", "VIP Areas"]
  },
  {
    id: 3,
    title: "Traditional Functions",
    icon: "fa-crown",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069",
    description: "Authentic setups honoring cultural celebrations",
    features: ["Custom Layouts", "Traditional Decor", "Large Capacity", "Cultural Themes"]
  },
  {
    id: 4,
    title: "Exhibitions",
    icon: "fa-store",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2071",
    description: "Versatile spaces for trade shows and displays",
    features: ["Booth Sections", "Clear Span", "Power Supply", "Loading Access"]
  },
  {
    id: 5,
    title: "Party Tents",
    icon: "fa-glass-cheers",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070",
    description: "Fun and vibrant setups for celebrations",
    features: ["Colorful Options", "Sound Systems", "Bar Areas", "Kids Zones"]
  },
  {
    id: 6,
    title: "Emergency Shelter",
    icon: "fa-home",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070",
    description: "Quick deployment for urgent needs",
    features: ["Fast Setup", "Weather Resistant", "Multiple Sizes", "24/7 Available"]
  }
];

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 border border-primary/20 mb-4">
            <i className="fas fa-award text-primary mr-2"></i>
            <span className="text-sm font-body">Premium Services</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our Tent <span className="text-gradient">Categories</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of tent solutions designed to meet every event requirement
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 w-14 h-14 rounded-full gradient-gold flex items-center justify-center shadow-glow">
                  <i className={`fas ${service.icon} text-2xl text-primary-foreground`}></i>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold mb-2">{service.title}</h3>
                <p className="font-body text-muted-foreground mb-4">{service.description}</p>

                {/* Features */}
                <div className={`overflow-hidden transition-all duration-300 ${
                  hoveredCard === service.id ? 'max-h-40' : 'max-h-0'
                }`}>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <i className="fas fa-check-circle text-primary mr-2"></i>
                        <span className="font-body text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full gradient-emerald text-secondary-foreground hover:shadow-glow font-accent font-semibold"
                >
                  <i className="fas fa-arrow-right mr-2"></i>
                  Explore Options
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="font-body text-muted-foreground mb-4">
            Can't find what you're looking for?
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-accent font-semibold"
          >
            <i className="fas fa-phone mr-2"></i>
            Contact Us for Custom Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;