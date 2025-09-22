import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    question: "How far in advance should I book a tent?",
    answer: "We recommend booking at least 2-4 weeks in advance, especially during peak seasons (wedding season, holidays). However, we do accommodate last-minute requests based on availability."
  },
  {
    question: "What's included in the tent rental price?",
    answer: "Our rental price includes the tent, professional setup and removal, and basic lighting. Additional services like decorations, climate control, flooring, and furniture are available at extra cost."
  },
  {
    question: "Do you provide delivery and setup services?",
    answer: "Yes! We provide free delivery and professional setup within 50km of our location. For distances beyond 50km, a small transportation fee applies. Our team ensures everything is perfectly installed."
  },
  {
    question: "What happens if there's bad weather?",
    answer: "All our tents are weather-resistant and designed to withstand rain and moderate winds. We also offer sidewalls and climate control options for additional protection and comfort."
  },
  {
    question: "Can I customize the tent layout and decorations?",
    answer: "Absolutely! We work with you to create custom layouts that suit your event. Our decoration team can also provide themed setups, lighting arrangements, and color coordination."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, bank transfers, mobile money (MTN and Airtel), and credit cards. A 30% deposit is required to confirm your booking, with the balance due before the event."
  },
  {
    question: "Do you offer packages for multiple events?",
    answer: "Yes, we offer special rates for clients booking multiple events or long-term rentals. Contact us for customized corporate packages and bulk discounts."
  },
  {
    question: "What's your cancellation policy?",
    answer: "Cancellations made 7+ days before the event receive a full refund minus a small processing fee. Cancellations within 7 days receive a 50% refund. We also offer free rescheduling once per booking."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 border border-primary/20 mb-4">
            <i className="fas fa-question-circle text-primary mr-2"></i>
            <span className="text-sm font-body">FAQs</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our tent rental services
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="font-heading text-lg font-semibold hover:text-primary transition-colors">
                <div className="flex items-center gap-3 text-left">
                  <i className="fas fa-plus-circle text-primary"></i>
                  {faq.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
          <h3 className="font-heading text-2xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="font-body text-muted-foreground mb-6">
            Our team is here to help you plan the perfect event
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+256786021431"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg gradient-gold text-primary-foreground hover:shadow-glow font-accent font-semibold transition-all"
            >
              <i className="fas fa-phone mr-2"></i>
              Call Us Now
            </a>
            <a
              href="https://wa.me/256786021431"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-green-500 text-white hover:bg-green-600 font-accent font-semibold transition-all"
            >
              <i className="fab fa-whatsapp mr-2"></i>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;