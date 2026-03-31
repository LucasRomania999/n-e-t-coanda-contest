import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Trophy, BookOpen, ClipboardList, Printer } from "lucide-react";

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

const Home = () => {
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
