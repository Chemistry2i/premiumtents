import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const galleryCategories = ["All", "Weddings", "Corporate", "Traditional", "Parties", "Exhibitions"];

const galleryImages = [
  {
    id: 1,
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
    title: "Romantic Garden Wedding",
    date: "June 2024"
  },
  {
    id: 2,
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012",
    title: "Annual Corporate Gala",
    date: "May 2024"
  },
  {
    id: 3,
    category: "Traditional",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=2070",
    title: "Cultural Heritage Festival",
    date: "April 2024"
  },
  {
    id: 4,
    category: "Parties",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070",
    title: "Birthday Celebration",
    date: "July 2024"
  },
  {
    id: 5,
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070",
    title: "Lakeside Wedding Reception",
    date: "August 2024"
  },
  {
    id: 6,
    category: "Exhibitions",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070",
    title: "Tech Expo 2024",
    date: "March 2024"
  },
  {
    id: 7,
    category: "Corporate",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069",
    title: "Product Launch Event",
    date: "September 2024"
  },
  {
    id: 8,
    category: "Weddings",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070",
    title: "Sunset Beach Wedding",
    date: "October 2024"
  }
];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 border border-primary/20 mb-4">
            <i className="fas fa-camera text-primary mr-2"></i>
            <span className="text-sm font-body">Portfolio</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our <span className="text-gradient">Event Gallery</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of successful events and get inspired for your celebration
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {galleryCategories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "gradient-gold text-primary-foreground font-accent" 
                : "border-border hover:border-primary font-accent"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <Card
              key={image.id}
              className="group relative overflow-hidden cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {image.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">{image.date}</p>
                    <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs bg-primary/20 text-primary font-accent">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="gradient-emerald text-secondary-foreground hover:shadow-glow font-accent font-semibold"
          >
            <i className="fas fa-images mr-2"></i>
            View Full Portfolio
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full animate-scale-in">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="font-heading text-2xl font-bold text-foreground">
                {selectedImage.title}
              </h3>
              <p className="text-muted-foreground font-body">{selectedImage.date}</p>
            </div>
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <i className="fas fa-times text-foreground"></i>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;