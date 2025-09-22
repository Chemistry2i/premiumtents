import { Card } from "../ui/card";
import { Button } from "../ui/button";

const pricingPlans = [
  {
    name: "Bronze",
    icon: "fa-medal",
    price: "500,000",
    currency: "UGX",
    period: "per day",
    color: "border-orange-600",
    features: [
      { text: "Small to Medium Tents (50-100 guests)", included: true },
      { text: "Basic Setup & Removal", included: true },
      { text: "Standard White Tent", included: true },
      { text: "Delivery within 30km", included: true },
      { text: "Lighting Package", included: false },
      { text: "Premium Decorations", included: false },
      { text: "Climate Control", included: false }
    ]
  },
  {
    name: "Silver",
    icon: "fa-crown",
    price: "1,200,000",
    currency: "UGX",
    period: "per day",
    color: "border-gray-400",
    popular: true,
    features: [
      { text: "Medium to Large Tents (100-300 guests)", included: true },
      { text: "Professional Setup & Removal", included: true },
      { text: "Choice of Tent Colors", included: true },
      { text: "Delivery within 50km", included: true },
      { text: "Basic Lighting Package", included: true },
      { text: "Standard Decorations", included: true },
      { text: "Climate Control", included: false }
    ]
  },
  {
    name: "Gold",
    icon: "fa-gem",
    price: "2,500,000",
    currency: "UGX",
    period: "per day",
    color: "border-yellow-500",
    features: [
      { text: "Large Premium Tents (300+ guests)", included: true },
      { text: "White Glove Setup Service", included: true },
      { text: "Custom Tent Configurations", included: true },
      { text: "Unlimited Delivery Range", included: true },
      { text: "Premium Lighting & Effects", included: true },
      { text: "Luxury Decorations", included: true },
      { text: "Full Climate Control", included: true }
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 border border-primary/20 mb-4">
            <i className="fas fa-tags text-primary mr-2"></i>
            <span className="text-sm font-body">Pricing</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Choose Your <span className="text-gradient">Package</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Select the perfect package for your event
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-primary shadow-glow' : ''
              } animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-accent font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon & Name */}
              <div className="text-center mb-6">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full border-2 ${plan.color} flex items-center justify-center`}>
                  <i className={`fas ${plan.icon} text-2xl text-primary`}></i>
                </div>
                <h3 className="font-heading text-2xl font-bold">{plan.name}</h3>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="font-accent text-4xl font-bold text-foreground">
                  <span className="text-lg align-top">{plan.currency}</span>
                  {plan.price}
                </div>
                <p className="text-muted-foreground font-body">{plan.period}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <i className={`fas ${feature.included ? 'fa-check-circle text-primary' : 'fa-times-circle text-muted-foreground'} mt-1 mr-3`}></i>
                    <span className={`font-body text-sm ${feature.included ? 'text-foreground' : 'text-muted-foreground line-through'}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                className={`w-full ${
                  plan.popular 
                    ? 'gradient-gold text-primary-foreground hover:shadow-glow' 
                    : 'bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground'
                } font-accent font-semibold`}
              >
                <i className="fas fa-whatsapp mr-2"></i>
                Get This Package
              </Button>
            </Card>
          ))}
        </div>

        {/* Custom Quote CTA */}
        <div className="mt-16 text-center bg-card rounded-2xl p-8 shadow-elegant max-w-3xl mx-auto">
          <h3 className="font-heading text-2xl font-bold mb-4">
            Need a Custom Quote?
          </h3>
          <p className="font-body text-muted-foreground mb-6">
            We can create a tailored package that perfectly fits your event requirements and budget
          </p>
          <Button
            size="lg"
            className="gradient-emerald text-secondary-foreground hover:shadow-glow font-accent font-semibold"
          >
            <i className="fas fa-calculator mr-2"></i>
            Get Instant Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;