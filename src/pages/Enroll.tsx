const Enroll = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container py-12 max-w-lg">
        <div className="mb-8">
          <h1 className="font-mono-display text-3xl font-bold mb-2">Session expired</h1>
          <p className="text-muted-foreground">Enrollment is closed because the registration period has ended.</p>
        </div>

        <div className="rounded-lg border border-border bg-card p-6 text-center">
          <p className="font-mono-display text-lg text-primary">Session expired</p>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
