import { useState } from "react";
import { Link } from "react-router-dom";
import { Images, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TOTAL = 95;

const images = Array.from({ length: TOTAL }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  return {
    src: `/gallery/net26-${n}.jpg`,
    alt: `NET'26 contest moment ${i + 1}`,
  };
});

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox((i) => (i === null ? null : (i - 1 + TOTAL) % TOTAL));
  const next = () => setLightbox((i) => (i === null ? null : (i + 1) % TOTAL));

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container">
        <div className="flex items-center gap-3 mb-2">
          <Images className="h-8 w-8 text-primary" />
          <h1 className="font-mono-display text-3xl md:text-4xl font-bold text-primary glow-text">
            NET'26 Gallery
          </h1>
        </div>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Moments from the National English Technology Contest 2026 — 25 April 2026,
          Mechanical Faculty, Timișoara.
        </p>

        <div className="flex gap-3 mb-8">
          <Link to="/">
            <Button variant="ghost">← Back to Home</Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative overflow-hidden rounded-lg border border-border aspect-square bg-card"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2">
                <span className="font-mono-display text-xs text-primary">#{i + 1}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 text-foreground hover:text-primary transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 text-foreground hover:text-primary transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          <div className="max-w-5xl max-h-[85vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-center font-mono-display text-sm text-muted-foreground mt-3">
              #{lightbox + 1} / {TOTAL}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
