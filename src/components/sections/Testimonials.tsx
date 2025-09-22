import { useState } from "react";
import { Card } from "../ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Nakamya",
    role: "Wedding Client",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150",
    rating: 5,
    text: "Premium Tents made our wedding day absolutely magical! The setup was elegant, and the team was professional throughout. Highly recommended!",
    event: "Garden Wedding - June 2024"
  },
  {
    id: 2,
    name: "James Mukasa",
    role: "Corporate Event Manager",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150",
    rating: 5,
    text: "We've used their services for multiple corporate events. Always on time, always perfect. They understand what professional events need.",
    event: "Annual Conference - May 2024"
  },
  {
    id: 3,
    name: "Grace Namukasa",
    role: "Birthday Celebration",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150",
    rating: 5,
    text: "The colorful party tent setup was amazing! My daughter's birthday was unforgettable. The team went above and beyond our expectations.",
    event: "16th Birthday Party - July 2024"
  },
  {
    id: 4,
    name: "Robert Ochieng",
    role: "Traditional Ceremony",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150",
    rating: 5,
    text: "They respected our cultural requirements and created a beautiful traditional setup. The tent was spacious and well-decorated.",
    event: "Introduction Ceremony - August 2024"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 border border-primary/20 mb-4">
            <i className="fas fa-comments text-primary mr-2"></i>
            <span className="text-sm font-body">Testimonials</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied customers
          </p>
        </div>

        {/* Main Testimonial Carousel */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 md:p-12 relative shadow-elegant">
            <div className="flex items-start gap-6">
              {/* Quote Icon */}
              <div className="hidden md:block">
                <i className="fas fa-quote-left text-4xl text-primary/20"></i>
              </div>

              {/* Content */}
              <div className="flex-1">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <i key={i} className="fas fa-star text-primary mr-1"></i>
                  ))}
                </div>

                {/* Text */}
                <p className="font-body text-lg md:text-xl text-foreground mb-6 italic">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-heading font-bold text-foreground">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-muted-foreground font-body">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-xs text-primary font-accent">
                      {testimonials[currentIndex].event}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-primary" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-primary" />
            </button>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-primary' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "98%", label: "Client Satisfaction" },
            { value: "200+", label: "Events Completed" },
            { value: "5.0", label: "Average Rating" },
            { value: "100%", label: "On-Time Delivery" }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="font-accent text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;