import { Link } from "react-router-dom";
import { Trophy, Download, Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { cn } from "@/lib/utils";

type Row = {
  code: string;
  scris: number;
  interviu: number;
  practica: number;
  mediaP2: number;
  mediaFinala: number;
};

const results: Row[] = [
  { code: "TM-NET-01", scris: 86, interviu: 29, practica: 68, mediaP2: 97, mediaFinala: 91.5 },
  { code: "TM-NET-02", scris: 94, interviu: 30, practica: 60, mediaP2: 90, mediaFinala: 92 },
  { code: "TM-NET-03", scris: 92, interviu: 29, practica: 66, mediaP2: 95, mediaFinala: 93.5 },
  { code: "TM-NET-04", scris: 92, interviu: 30, practica: 70, mediaP2: 100, mediaFinala: 96 },
  { code: "TM-NET-05", scris: 84, interviu: 30, practica: 60, mediaP2: 90, mediaFinala: 87 },
  { code: "TM-NET-06", scris: 82, interviu: 30, practica: 64, mediaP2: 94, mediaFinala: 88 },
  { code: "TM-NET-07", scris: 80, interviu: 30, practica: 70, mediaP2: 100, mediaFinala: 90 },
  { code: "TM-NET-08", scris: 86, interviu: 30, practica: 68, mediaP2: 98, mediaFinala: 92 },
];

const ranked = [...results].sort((a, b) => b.mediaFinala - a.mediaFinala);

const medalClass = (i: number) =>
  i === 0
    ? "text-yellow-400"
    : i === 1
    ? "text-slate-300"
    : i === 2
    ? "text-amber-600"
    : "text-muted-foreground";

const Results = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container max-w-5xl">
        <div className="flex items-center gap-3 mb-2">
          <Trophy className="h-8 w-8 text-primary" />
          <h1 className="font-mono-display text-3xl md:text-4xl font-bold text-primary glow-text">
            NET'26 Results
          </h1>
        </div>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Anonymized final results from the National English Technology Contest 2026.
          Participants are identified by their unique contest codes.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <a href="/downloads/Rezultate_NET_2026_anonim.xlsx" download>
            <Button variant="hero-outline">
              <Download className="h-4 w-4 mr-2" />
              Download XLSX
            </Button>
          </a>
          <Link to="/">
            <Button variant="ghost">Back to Home</Button>
          </Link>
        </div>

        <div className="rounded-lg border border-border bg-card overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-primary/5">
                <TableHead className="font-mono-display uppercase text-xs">Rank</TableHead>
                <TableHead className="font-mono-display uppercase text-xs">Code</TableHead>
                <TableHead className="font-mono-display uppercase text-xs text-right">Written</TableHead>
                <TableHead className="font-mono-display uppercase text-xs text-right">Interview</TableHead>
                <TableHead className="font-mono-display uppercase text-xs text-right">Practical</TableHead>
                <TableHead className="font-mono-display uppercase text-xs text-right">Avg. Stage 2</TableHead>
                <TableHead className="font-mono-display uppercase text-xs text-right">Final</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {ranked.map((r, i) => (
                <TableRow key={r.code} className={cn(i < 3 && "bg-primary/5")}>
                  <TableCell>
                    <div className="flex items-center gap-2 font-mono-display">
                      {i < 3 ? <Medal className={cn("h-4 w-4", medalClass(i))} /> : <span className="w-4" />}
                      {i + 1}
                    </div>
                  </TableCell>
                  <TableCell className="font-mono-display">{r.code}</TableCell>
                  <TableCell className="text-right tabular-nums">{r.scris}</TableCell>
                  <TableCell className="text-right tabular-nums">{r.interviu}</TableCell>
                  <TableCell className="text-right tabular-nums">{r.practica}</TableCell>
                  <TableCell className="text-right tabular-nums">{r.mediaP2}</TableCell>
                  <TableCell className="text-right tabular-nums font-bold text-primary">
                    {r.mediaFinala.toFixed(1)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="text-xs text-muted-foreground mt-4 font-mono-display">
          // Scores: Written (max 100) · Interview (max 30) · Practical (max 70) · Final = average of stages
        </p>
      </div>
    </div>
  );
};

export default Results;
