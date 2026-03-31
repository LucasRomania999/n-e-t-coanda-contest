import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Trophy, BookOpen, ClipboardList, Printer, History, Images, X } from "lucide-react";

import galleryGroupPhoto from "@/assets/gallery-group-photo.jpg";
import galleryLecture from "@/assets/gallery-lecture.jpg";
import galleryWinner1 from "@/assets/gallery-winner1.jpg";
import galleryWinner2 from "@/assets/gallery-winner2.jpg";
import galleryWinner3 from "@/assets/gallery-winner3.jpg";
import galleryWinner4 from "@/assets/gallery-winner4.jpg";
import galleryWinner5 from "@/assets/gallery-winner5.jpg";
import galleryWinner6 from "@/assets/gallery-winner6.jpg";

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
  { year: "2023", title: "1st Edition — The Beginning", description: "Henri Coandă Technical College launched the first National English Technology contest with participants from four counties: Timiș, Arad, Hunedoara, and Caraș-Severin. The format featured a written theoretical exam and an oral exam. 25–40 students from 11th and 12th grades (ages 16–19) competed." },
  { year: "2024", title: "2nd Edition — Growing Strong", description: "The contest returned with growing enthusiasm, maintaining participation from the same four counties. Students demonstrated improving technical English proficiency through the written and oral exam format." },
  { year: "2025", title: "3rd Edition — Established Tradition", description: "By its third year, the contest became a recognized regional event across Timiș, Arad, Hunedoara, and Caraș-Severin counties, with consistent participation of 25–40 contestants per edition." },
  { year: "2026", title: "4th Edition — NET'26", description: "The most exciting edition yet! Gorj county joins the contest for the first time, expanding to five participating counties. The oral exam is replaced by a practical 3D printing challenge, held at the Mechanical Faculty in Timișoara on 24 April 2026." },
];

const galleryImages = [
  { src: galleryGroupPhoto, alt: "All participants and organizers — 3rd Edition 2025", caption: "Group Photo — 2025" },
  { src: galleryLecture, alt: "Opening ceremony at the Mechanical Faculty lecture hall", caption: "Opening Ceremony" },
  { src: galleryWinner1, alt: "Award ceremony — winner receiving diploma and prize", caption: "Award Ceremony" },
  { src: galleryWinner2, alt: "Contestant receiving diploma and backpack prize", caption: "Prize Winner" },
  { src: galleryWinner3, alt: "Student awarded diploma at the 3rd Edition", caption: "Diploma Award" },
  { src: galleryWinner4, alt: "Female contestant receiving recognition and prize", caption: "Recognition" },
  { src: galleryWinner5, alt: "Winner holding diploma alongside organizers", caption: "Winner & Organizers" },
  { src: galleryWinner6, alt: "Contestant with diploma and backpack prize", caption: "Prize Presentation" },
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
              Now in its 4th edition, the National English Technology contest brings together 
              students aged 16–19 from five counties for a written theoretical exam and a hands-on 3D printing challenge.
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
        <div className="space-y-6 max-w-2xl">
          {timeline.map((item) => (
            <div key={item.year} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 rounded-full bg-primary shrink-0 mt-2" />
                <div className="w-px flex-1 bg-border" />
              </div>
              <div className="rounded-lg border border-border bg-card p-4 mb-2 flex-1 transition-all duration-300 hover:border-primary/30">
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
