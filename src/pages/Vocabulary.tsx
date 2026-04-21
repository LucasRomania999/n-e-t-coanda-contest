import { useState, useMemo } from "react";
import { vocabularyList, type VocabWord } from "@/data/vocabulary";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, BookOpen, Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const categories = ["All", "3D Printing", "Engineering", "Technology", "Materials", "Computing"] as const;

const Vocabulary = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [learned, setLearned] = useState<Set<number>>(new Set());

  const filtered = useMemo(() => {
    return vocabularyList.filter((w) => {
      const matchesSearch =
        w.word.toLowerCase().includes(search.toLowerCase()) ||
        w.definition.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || w.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const toggleLearned = (id: number) => {
    setLearned((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const progress = Math.round((learned.size / vocabularyList.length) * 100);

  return (
    <div className="min-h-screen pt-16">
      <div className="container py-12">
        <div className="mb-8">
          <h1 className="font-mono-display text-3xl font-bold mb-2">
            <BookOpen className="inline h-8 w-8 text-primary mr-2" />
            Vocabulary Preparation
          </h1>
          <p className="text-muted-foreground">
            Master these 50 technical English terms before the contest.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8 rounded-lg border border-border bg-card p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono-display text-sm text-muted-foreground uppercase tracking-wider">
              Progress
            </span>
            <span className="font-mono-display text-sm text-primary">
              {learned.size}/{vocabularyList.length} — {progress}%
            </span>
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search words or definitions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 bg-card border-border"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "px-3 py-1.5 rounded-md text-xs font-mono-display uppercase tracking-wider border transition-all",
                  category === cat
                    ? "bg-primary/10 border-primary/50 text-primary"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/30"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Word List */}
        <div className="grid gap-3">
          {filtered.map((word, i) => (
            <WordCard
              key={word.id}
              word={word}
              index={i}
              isLearned={learned.has(word.id)}
              onToggle={() => toggleLearned(word.id)}
            />
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground font-mono-display">
              No words match your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const WordCard = ({
  word,
  index,
  isLearned,
  onToggle,
}: {
  word: VocabWord;
  index: number;
  isLearned: boolean;
  onToggle: () => void;
}) => (
  <div
    className={cn(
      "flex items-start gap-4 rounded-lg border bg-card p-4 transition-all duration-300",
      isLearned ? "border-primary/40 bg-primary/5" : "border-border hover:border-border/80"
    )}
    style={{ animationDelay: `${index * 30}ms` }}
  >
    <button
      onClick={onToggle}
      className={cn(
        "mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded border transition-all",
        isLearned
          ? "bg-primary border-primary text-primary-foreground"
          : "border-muted-foreground/40 hover:border-primary"
      )}
    >
      {isLearned && <Check className="h-4 w-4" />}
    </button>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-2 flex-wrap">
        <h3 className="font-mono-display font-semibold">{word.word}</h3>
        <Badge variant="outline" className="text-xs font-mono-display border-border text-muted-foreground">
          {word.category}
        </Badge>
      </div>
      <p className="text-sm text-muted-foreground mt-1">{word.definition}</p>
    </div>
    <span className="font-mono-display text-xs text-muted-foreground/50 shrink-0">
      #{word.id.toString().padStart(2, "0")}
    </span>
  </div>
);

export default Vocabulary;
