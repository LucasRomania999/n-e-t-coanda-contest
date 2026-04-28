import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileText, ClipboardCheck, Handshake, Printer } from "lucide-react";

const Resources = () => {
  return (
    <div className="min-h-screen pt-24 pb-16 container max-w-5xl">
      <div className="mb-10">
        <p className="font-mono-display text-xs uppercase tracking-widest text-primary mb-2">
          // Resources
        </p>
        <h1 className="font-mono-display text-4xl md:text-5xl font-bold mb-3">
          3D Printing & Partnership
        </h1>
        <p className="text-muted-foreground max-w-2xl">
          Official documents for the practical 3D printing challenge and the
          partnership agreement for participating institutions.
        </p>
      </div>

      <Tabs defaultValue="criteria" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="criteria" className="font-mono-display text-xs uppercase tracking-wider">
            <ClipboardCheck className="h-4 w-4 mr-2" />
            Criteria
          </TabsTrigger>
          <TabsTrigger value="task" className="font-mono-display text-xs uppercase tracking-wider">
            <Printer className="h-4 w-4 mr-2" />
            Task Sheet
          </TabsTrigger>
          <TabsTrigger value="partnership" className="font-mono-display text-xs uppercase tracking-wider">
            <Handshake className="h-4 w-4 mr-2" />
            Partnership
          </TabsTrigger>
        </TabsList>

        {/* CRITERIA */}
        <TabsContent value="criteria">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <CardTitle className="font-mono-display text-2xl">
                    Grila de Evaluare: Proba de Printare 3D
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1 font-mono-display">
                    14:00 – 16:00 · Total: 100 puncte
                  </p>
                </div>
                <a href="/downloads/Criterii_de_evaluare_3D.docx" download>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    .docx
                  </Button>
                </a>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              <section>
                <h3 className="font-mono-display text-lg font-bold text-primary mb-3">
                  1. Validarea Tehnică a Modelului <span className="text-muted-foreground">(30 pct)</span>
                </h3>
                <ul className="space-y-2 list-disc list-outside pl-6 text-sm">
                  <li><strong>Acuratețea dimensională:</strong> respectarea cotelor și a proporțiilor solicitate. <em className="text-primary">(10 pct)</em></li>
                  <li><strong>Printabilitate:</strong> absența erorilor de geometrie (non-manifold) și orientarea corectă pe platformă. <em className="text-primary">(10 pct)</em></li>
                  <li><strong>Integritate structurală:</strong> setări corecte de <code className="text-primary">infill</code> și pereți exteriori. <em className="text-primary">(10 pct)</em></li>
                </ul>
              </section>

              <section>
                <h3 className="font-mono-display text-lg font-bold text-primary mb-3">
                  2. Configurare și Slicing <span className="text-muted-foreground">(25 pct)</span>
                </h3>
                <ul className="space-y-2 list-disc list-outside pl-6 text-sm">
                  <li><strong>Gestionarea suporturilor:</strong> plasare eficientă pentru overhangs, minimizând materialul. <em className="text-primary">(10 pct)</em></li>
                  <li><strong>Parametri de printare:</strong> temperatură, viteză și layer height corecte pentru PLA/PETG. <em className="text-primary">(10 pct)</em></li>
                  <li><strong>Estimarea timpului:</strong> încadrarea procesului în timpul alocat. <em className="text-primary">(5 pct)</em></li>
                </ul>
              </section>

              <section>
                <h3 className="font-mono-display text-lg font-bold text-primary mb-3">
                  3. Calitatea Execuției și Post-Procesare <span className="text-muted-foreground">(25 pct)</span>
                </h3>
                <ul className="space-y-2 list-disc list-outside pl-6 text-sm">
                  <li><strong>Aderență la pat și finisaj:</strong> calitatea primului strat, fără stringing sau warping. <em className="text-primary">(15 pct)</em></li>
                  <li><strong>Post-procesare:</strong> îndepărtarea curată a suporturilor fără a deteriora detaliile. <em className="text-primary">(10 pct)</em></li>
                </ul>
              </section>

              <section>
                <h3 className="font-mono-display text-lg font-bold text-primary mb-3">
                  4. Inovație și Justificare Tehnică în Limba Engleză <span className="text-muted-foreground">(20 pct)</span>
                </h3>
                <ul className="space-y-2 list-disc list-outside pl-6 text-sm">
                  <li><strong>Creativitatea designului:</strong> elemente originale care îmbunătățesc funcționalitatea sau estetica. <em className="text-primary">(10 pct)</em></li>
                  <li><strong>Mini-raport tehnic:</strong> 50–100 cuvinte în engleză despre setările alese și provocări. <em className="text-primary">(10 pct)</em></li>
                </ul>
              </section>

              <div className="border-t border-border/50 pt-4 text-xs text-muted-foreground font-mono-display">
                Coordonată de echipa tehnică: Ing. Brebenel Daniel, Ing. Coconețu Ion Cosmin & echipa UPT.
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* TASK SHEET */}
        <TabsContent value="task">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <CardTitle className="font-mono-display text-2xl">
                    N.E.T. 2026 – 3D Printing Task Sheet
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1 font-mono-display">
                    Theme: Engineering Solutions for Sustainable Cities · 120 min
                  </p>
                </div>
                <a href="/downloads/Fisa_de_lucru_imprimare_3D_elevi.docx" download>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    .docx
                  </Button>
                </a>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 text-sm">
              <section>
                <h3 className="font-mono-display text-lg font-bold text-primary mb-2">1. The Design Challenge</h3>
                <p>
                  Optimize and prepare for printing a <strong>structural bracket</strong> or
                  a <strong>modular connector</strong> (base STL provided). The object
                  must support a specific load while minimizing material weight.
                </p>
              </section>

              <section>
                <h3 className="font-mono-display text-lg font-bold text-primary mb-2">2. Technical Requirements (Slicing)</h3>
                <ul className="space-y-2 list-disc list-outside pl-6">
                  <li><strong>Layer Height:</strong> 0.15mm – 0.25mm.</li>
                  <li><strong>Infill Pattern:</strong> Gyroid or Honeycomb for best integrity.</li>
                  <li><strong>Support Material:</strong> only where overhangs &gt; 45°.</li>
                  <li><strong>Wall Count:</strong> minimum 3 perimeters.</li>
                </ul>
              </section>

              <section>
                <h3 className="font-mono-display text-lg font-bold text-primary mb-2">3. Practical Printing Execution</h3>
                <ul className="space-y-2 list-disc list-outside pl-6">
                  <li><strong>Bed Adhesion:</strong> clean surface, use Brim/Raft if needed.</li>
                  <li><strong>Monitoring:</strong> watch the first 3 layers to prevent warping.</li>
                  <li><strong>Post-processing:</strong> remove supports carefully.</li>
                </ul>
              </section>

              <section>
                <h3 className="font-mono-display text-lg font-bold text-primary mb-2">4. Written Technical Justification (English, max. 100 words)</h3>
                <ol className="space-y-2 list-decimal list-outside pl-6">
                  <li>Why did you choose this specific <strong>Infill Density</strong>?</li>
                  <li>How did you optimize the <strong>Print Orientation</strong> to reduce support waste?</li>
                  <li>Describe one challenge you encountered and how you solved it.</li>
                </ol>
              </section>

              <section className="border-t border-border/50 pt-4">
                <h3 className="font-mono-display text-sm font-bold text-muted-foreground uppercase tracking-widest mb-2">
                  Supervisor Checklist
                </h3>
                <ul className="space-y-1 list-disc list-outside pl-6 text-muted-foreground">
                  <li>File Readiness — G-code optimized for the printer model.</li>
                  <li>Resource Management — minimal filament waste.</li>
                  <li>Safety Protocols — laboratory rules followed.</li>
                </ul>
              </section>
            </CardContent>
          </Card>
        </TabsContent>

        {/* PARTNERSHIP */}
        <TabsContent value="partnership">
          <Card className="border-primary/20">
            <CardHeader>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <CardTitle className="font-mono-display text-2xl">
                    Acord de parteneriat N.E.T. 2026
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1 font-mono-display">
                    National English Technology · Ediția a IV-a, 2025–2026
                  </p>
                </div>
                <a href="/downloads/Acord_de_parteneriat_NET_2026.docx" download>
                  <Button variant="hero" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Download .docx
                  </Button>
                </a>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p>
                Acordul de parteneriat formalizează colaborarea dintre{" "}
                <strong>Colegiul Tehnic „Henri Coandă” Timișoara</strong> și
                instituțiile partenere pentru organizarea proiectului{" "}
                <strong>N.E.T. – National English Technology</strong>, inclus în
                calendarul ISJ Timiș, CPEERJ 2026, poziția 37, în parteneriat cu{" "}
                <strong>Universitatea Politehnică Timișoara, Facultatea de Mecanică</strong>.
              </p>

              <div className="grid md:grid-cols-2 gap-4 pt-2">
                <div className="border border-border/50 rounded-md p-4">
                  <h4 className="font-mono-display text-xs uppercase tracking-widest text-primary mb-2">
                    Organizatorul se obligă
                  </h4>
                  <ul className="space-y-1 list-disc list-outside pl-5">
                    <li>Să informeze în timp util instituțiile partenere.</li>
                    <li>Să respecte termenele de desfășurare a concursului.</li>
                    <li>Să distribuie diplomele și programul concursului.</li>
                  </ul>
                </div>
                <div className="border border-border/50 rounded-md p-4">
                  <h4 className="font-mono-display text-xs uppercase tracking-widest text-primary mb-2">
                    Partenerul se obligă
                  </h4>
                  <ul className="space-y-1 list-disc list-outside pl-5">
                    <li>Să mediatizeze schimbul de experiență în instituția sa.</li>
                    <li>Să respecte regulamentul schimbului de experiență.</li>
                    <li>Să colaboreze pe toată durata proiectului.</li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-md p-4 flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">
                  Descărcați documentul .docx, completați datele instituției și
                  trimiteți-l semnat și ștampilat către organizatori. Acordul se
                  încheie în 2 exemplare, câte unul pentru fiecare parte.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Resources;
