import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll contact you within 24 hours.");
    setFormData({ name: "", email: "", phone: "", eventType: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 border border-primary/20 mb-4">
            <i className="fas fa-envelope text-primary mr-2"></i>
            <span className="text-sm font-body">Contact</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Let's Plan Your <span className="text-gradient">Event</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Get in touch with us today and let's create something extraordinary together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 shadow-elegant">
            <h3 className="font-heading text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">
                    Your Name *
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="font-body"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="font-body"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">
                    Phone Number *
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+256 700 000000"
                    className="font-body"
                  />
                </div>
                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">
                    Event Type *
                  </label>
                  <Select
                    value={formData.eventType}
                    onValueChange={(value) => setFormData({...formData, eventType: value})}
                  >
                    <SelectTrigger className="font-body">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="traditional">Traditional Function</SelectItem>
                      <SelectItem value="party">Party</SelectItem>
                      <SelectItem value="exhibition">Exhibition</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-body text-muted-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your event..."
                  rows={5}
                  className="font-body"
                />
              </div>

              <Button
                type="submit"
                className="w-full gradient-gold text-primary-foreground hover:shadow-glow font-accent font-semibold"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="p-8">
              <h3 className="font-heading text-2xl font-bold mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <a
                  href="tel:+256786021431"
                  className="flex items-center gap-4 p-4 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center group-hover:shadow-glow">
                    <i className="fas fa-phone text-primary-foreground"></i>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">Call Us</p>
                    <p className="font-accent font-semibold text-foreground">+256 786021431</p>
                  </div>
                </a>

                <a
                  href="mailto:wambogohassan63@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full gradient-emerald flex items-center justify-center group-hover:shadow-glow">
                    <i className="fas fa-envelope text-secondary-foreground"></i>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">Email Us</p>
                    <p className="font-accent font-semibold text-foreground">wambogohassan63@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/256786021431"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-accent/10 hover:bg-accent/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center group-hover:shadow-glow">
                    <i className="fab fa-whatsapp text-2xl text-white"></i>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-body">WhatsApp</p>
                    <p className="font-accent font-semibold text-foreground">Chat with us</p>
                  </div>
                </a>
              </div>
            </Card>

            {/* Office Hours */}
            <Card className="p-8">
              <h3 className="font-heading text-2xl font-bold mb-6">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-body text-muted-foreground">Monday - Friday</span>
                  <span className="font-accent font-semibold text-foreground">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body text-muted-foreground">Saturday</span>
                  <span className="font-accent font-semibold text-foreground">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-body text-muted-foreground">Sunday</span>
                  <span className="font-accent font-semibold text-foreground">By Appointment</span>
                </div>
              </div>
              <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-primary/20">
                <p className="text-sm font-body text-center text-primary">
                  <i className="fas fa-info-circle mr-2"></i>
                  24/7 Emergency Support Available
                </p>
              </div>
            </Card>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              {[
                { icon: "fab fa-facebook", link: "#", color: "hover:bg-blue-600" },
                { icon: "fab fa-instagram", link: "#", color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500" },
                { icon: "fab fa-youtube", link: "#", color: "hover:bg-red-600" },
                { icon: "fab fa-twitter", link: "#", color: "hover:bg-blue-400" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  className={`w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center transition-all duration-300 hover:text-white ${social.color} hover:border-transparent hover:shadow-lg`}
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;