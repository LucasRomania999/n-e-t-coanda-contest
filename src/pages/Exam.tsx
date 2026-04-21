import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FileText, Printer, Lock, Calendar } from "lucide-react";

const Exam = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container py-12 max-w-2xl">
        <div className="mb-8">
          <h1 className="font-mono-display text-3xl font-bold mb-2">
            <FileText className="inline h-8 w-8 text-primary mr-2" />
            Exam Interface
          </h1>
          <p className="text-muted-foreground">
            The contest examination system for NET'26.
          </p>
        </div>

        <div className="grid gap-6">
          {/* Theoretical Exam */}
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FileText className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h2 className="font-mono-display text-xl font-semibold mb-1">Written Theoretical Exam</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Test your knowledge of technical English vocabulary, comprehension, and engineering concepts.
                  Duration: 90 minutes. Multiple choice and open-ended questions.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span className="font-mono-display">Available: 24 April 2026, 09:00 - 10:30</span>
                </div>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://bit.ly/3QpeNHo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="hero-outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Practice Exam
                    </Button>
                  </a>
                  <a href="#" className="block" aria-disabled="true">
                    <Button variant="outline" className="w-full justify-start" disabled>
                      <Lock className="h-4 w-4 mr-2" />
                      Official Exam — opens on contest day
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Practical */}
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Printer className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h2 className="font-mono-display text-xl font-semibold mb-1">3D Printing Practical Contest</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  Design and print a functional component based on the provided brief. Judged on accuracy, 
                  creativity, print quality, and English presentation of your design rationale.
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span className="font-mono-display">Available: 24 April 2026, 11:00 - 14:00</span>
                </div>
                <div className="flex items-center gap-2 rounded-md border border-warning/30 bg-warning/5 px-3 py-2 text-sm">
                  <Lock className="h-4 w-4 text-warning" />
                  <span className="text-warning font-mono-display text-xs uppercase tracking-wider">
                    Access locked — opens on contest day
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground text-sm mb-4">
            Not registered yet? Enroll now to participate on contest day.
          </p>
          <Link to="/enroll">
            <Button variant="hero-outline">Enroll Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Exam;
