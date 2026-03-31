import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { UserPlus, CheckCircle } from "lucide-react";
import { z } from "zod";

const enrollSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  school: z.string().trim().min(2, "School name is required").max(200),
  grade: z.string().trim().min(1, "Grade is required").max(20),
  category: z.enum(["theoretical", "practical", "both"], { required_error: "Select a category" }),
});

type EnrollData = z.infer<typeof enrollSchema>;

const Enroll = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof EnrollData, string>>>({});
  const [form, setForm] = useState<Partial<EnrollData>>({
    fullName: "",
    email: "",
    school: "",
    grade: "",
    category: undefined,
  });

  const update = (field: keyof EnrollData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = enrollSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as string;
        fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
    toast.success("Registration submitted successfully!");
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center space-y-4 animate-slide-up">
          <CheckCircle className="h-16 w-16 text-primary mx-auto" />
          <h2 className="font-mono-display text-2xl font-bold">Enrollment Complete</h2>
          <p className="text-muted-foreground max-w-md">
            Your registration for NET'26 has been received. Check your email for confirmation details.
          </p>
          <Button variant="hero-outline" onClick={() => { setSubmitted(false); setForm({ fullName: "", email: "", school: "", grade: "", category: undefined }); }}>
            Register Another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="container py-12 max-w-lg">
        <div className="mb-8">
          <h1 className="font-mono-display text-3xl font-bold mb-2">
            <UserPlus className="inline h-8 w-8 text-primary mr-2" />
            Contest Enrollment
          </h1>
          <p className="text-muted-foreground">
            Register for the National English Technology Contest — 24 April 2026.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 rounded-lg border border-border bg-card p-6">
          <Field label="Full Name" error={errors.fullName}>
            <Input
              placeholder="Ion Popescu"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              className="bg-background border-border"
            />
          </Field>

          <Field label="Email Address" error={errors.email}>
            <Input
              type="email"
              placeholder="ion@example.com"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              className="bg-background border-border"
            />
          </Field>

          <Field label="School / Institution" error={errors.school}>
            <Input
              placeholder="Henri Coandă Technical College"
              value={form.school}
              onChange={(e) => update("school", e.target.value)}
              className="bg-background border-border"
            />
          </Field>

          <Field label="Grade / Year" error={errors.grade}>
            <Input
              placeholder="11th Grade"
              value={form.grade}
              onChange={(e) => update("grade", e.target.value)}
              className="bg-background border-border"
            />
          </Field>

          <Field label="Contest Category" error={errors.category}>
            <div className="grid grid-cols-3 gap-2">
              {([
                { value: "theoretical", label: "Written Exam" },
                { value: "practical", label: "3D Printing" },
                { value: "both", label: "Both" },
              ] as const).map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => update("category", opt.value)}
                  className={`rounded-md border px-3 py-2 text-sm font-mono-display transition-all ${
                    form.category === opt.value
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-foreground/30"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </Field>

          <Button type="submit" variant="hero" className="w-full" size="lg">
            Submit Registration
          </Button>
        </form>
      </div>
    </div>
  );
};

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <div className="space-y-1.5">
    <Label className="font-mono-display text-xs uppercase tracking-wider text-muted-foreground">{label}</Label>
    {children}
    {error && <p className="text-xs text-destructive font-mono-display">{error}</p>}
  </div>
);

export default Enroll;
