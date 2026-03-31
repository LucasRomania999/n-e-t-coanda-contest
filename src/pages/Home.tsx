import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Trophy, BookOpen, ClipboardList, Printer, History, Images, X } from "lucide-react";

import gallery3dPrinting from "@/assets/gallery-3d-printing.jpg";
import galleryExam from "@/assets/gallery-exam.jpg";
import galleryAwards from "@/assets/gallery-awards.jpg";
import galleryTeamwork from "@/assets/gallery-teamwork.jpg";
import galleryParts from "@/assets/gallery-parts.jpg";
import galleryVenue from "@/assets/gallery-venue.jpg";

const features = [
  {
    icon: BookOpen,
    title: "Vocabulary Prep",
    description: "Master 50 essential technical English terms with definitions and category filters.",
    link: "/vocabulary",
  },
  {
    icon: ClipboardList,
    title: "Contest Enrollment",
    description: "Register securely for the theoretical exam and practical 3D printing challenge.",
    link: "/enroll",
  },
  {
    icon: Printer,
    title: "Exam Interface",
    description: "Access the written exam and 3D printing contest management on competition day.",
    link: "/exam",
  },
];

const timeline = [
  { year: "2018", title: "Founding Edition", description: "Henri Coandă Technical College launched the first National English Technology contest with 12 participating schools from the Timișoara region." },
  { year: "2019", title: "Going National", description: "The contest expanded to include schools from across Romania, introducing the 3D printing practical component alongside the written exam." },
  { year: "2020", title: "Virtual Adaptation", description: "Adapted to an online format during the pandemic, reaching a record 35 schools and proving the contest's resilience." },
  { year: "2021", title: "Hybrid Format", description: "Introduced a hybrid model combining online theoretical exams with in-person practical sessions at the Mechanical Faculty." },
  { year: "2022", title: "International Guests", description: "Welcomed observer delegations from Hungary and Serbia, setting the stage for future cross-border collaboration." },
  { year: "2023", title: "Advanced 3D Challenges", description: "Introduced multi-material printing challenges and real-world engineering briefs from industry partners." },
  { year: "2024", title: "Record Participation", description: "Over 50 schools and 200 contestants participated, with live-streamed award ceremonies and industry sponsorships." },
  { year: "2025", title: "Digital Platform Launch", description: "Launched the first dedicated online preparation and registration platform, streamlining the contest experience." },
  { year: "2026", title: "NET'26 — Current Edition", description: "The most ambitious edition yet, held at the Mechanical Faculty in Timișoara on 24 April 2026." },
];

const galleryImages = [
  { src: gallery3dPrinting, alt: "Students working with 3D printers during the practical contest", caption: "3D Printing Workshop" },
  { src: galleryExam, alt: "Contestants taking the written theoretical exam", caption: "Theoretical Exam" },
  { src: galleryAwards, alt: "Award ceremony with winners receiving trophies", caption: "Award Ceremony" },
  { src: galleryTeamwork, alt: "Students collaborating on engineering prototypes", caption: "Team Collaboration" },
  { src: galleryParts, alt: "3D printed mechanical parts and prototypes", caption: "3D Printed Prototypes" },
  { src: galleryVenue, alt: "The Mechanical Faculty venue in Timișoara", caption: "Contest Venue" },
];

const Home = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative grid-blueprint min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-sm text-primary font-mono-display">
              <Trophy className="h-4 w-4" />
              National English Technology Contest 2026
            </div>
            <h1 className="font-mono-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-primary glow-text">NET</span>
              <span className="text-foreground">'26</span>
              <br />
              <span className="text-foreground/80 text-2xl sm:text-3xl md:text-4xl">
                Where Language Meets Engineering
              </span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl">
              Compete in the National English Technology contest — demonstrate your mastery of technical 
              English through a written exam and a hands-on 3D printing challenge.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/enroll">
                <Button variant="hero" size="lg">Register Now</Button>
              </Link>
              <Link to="/vocabulary">
                <Button variant="hero-outline" size="lg">Start Preparing</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="container py-20">
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
          <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-mono-display uppercase tracking-wider">Date</p>
              <p className="text-lg font-semibold">24 April 2026</p>
            </div>
          </div>
          <div className="flex items-center gap-4 rounded-lg border border-border bg-card p-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground font-mono-display uppercase tracking-wider">Location</p>
              <p className="text-lg font-semibold">Mechanical Faculty, Timișoara</p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="container pb-20">
        <h2 className="font-mono-display text-2xl font-bold mb-10 text-primary">
          <History className="inline h-7 w-7 mr-2" />
          // Contest History
        </h2>
        <div className="relative pl-8 border-l-2 border-border ml-4 space-y-8">
          {timeline.map((item) => (
            <div key={item.year} className="relative">
              {/* Dot */}
              <div className="absolute -left-[calc(2rem+5px)] w-3 h-3 rounded-full bg-primary border-2 border-background top-1.5" />
              
              <div className="rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30 max-w-xl">
                <span className="font-mono-display text-primary text-sm font-bold">{item.year}</span>
                <h3 className="font-mono-display font-semibold mt-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="container pb-20">
        <h2 className="font-mono-display text-2xl font-bold mb-8 text-primary">
          <Images className="inline h-7 w-7 mr-2" />
          // Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className="group relative overflow-hidden rounded-lg border border-border aspect-square"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={640}
                height={640}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-mono-display text-sm text-primary">{img.caption}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
          <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors">
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-3xl max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
            />
            <p className="text-center font-mono-display text-sm text-muted-foreground mt-3">
              {galleryImages[lightbox].caption}
            </p>
          </div>
        </div>
      )}

      {/* Features */}
      <section className="container pb-20">
        <h2 className="font-mono-display text-2xl font-bold mb-8 text-primary">
          // Platform Features
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <Link key={f.title} to={f.link} className="group">
              <div className="h-full rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:glow-border hover:border-primary/50">
                <f.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-mono-display text-lg font-semibold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container text-center text-sm text-muted-foreground font-mono-display">
          © 2026 Henri Coandă Technical College, Timișoara — National English Technology Contest
        </div>
      </footer>
    </div>
  );
};

export default Home;
