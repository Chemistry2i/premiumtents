import { useState, useEffect } from "react";

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "256786021431";
  const message = "Hello! I'm interested in renting tents for my event.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="relative">
          {/* Pulse Animation */}
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          
          {/* Button */}
          <div className="relative w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transform hover:scale-110 transition-all duration-300">
            <i className="fab fa-whatsapp text-white text-2xl"></i>
          </div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-background/95 backdrop-blur-sm text-foreground rounded-lg shadow-lg whitespace-nowrap opacity-0 hover:opacity-100 pointer-events-none transition-opacity duration-300">
            <p className="text-sm font-body">Chat with us!</p>
            <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-background/95"></div>
          </div>
        </div>
      </a>

      {/* Mobile Bottom Bar (Always Visible on Mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-lg border-t border-border z-40 lg:hidden">
        <div className="grid grid-cols-3 gap-1 p-2">
          <a
            href="tel:+256786021431"
            className="flex flex-col items-center justify-center py-2 hover:bg-accent/10 rounded-lg transition-colors"
          >
            <i className="fas fa-phone text-primary mb-1"></i>
            <span className="text-xs font-body">Call</span>
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 bg-green-500/10 hover:bg-green-500/20 rounded-lg transition-colors"
          >
            <i className="fab fa-whatsapp text-green-500 mb-1"></i>
            <span className="text-xs font-body">WhatsApp</span>
          </a>
          <a
            href="#contact"
            className="flex flex-col items-center justify-center py-2 hover:bg-accent/10 rounded-lg transition-colors"
          >
            <i className="fas fa-envelope text-primary mb-1"></i>
            <span className="text-xs font-body">Email</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default WhatsAppButton;