import { Header } from "@/components/portfolio/header";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { SkillsAndEducation } from "@/components/portfolio/skills-education";
import { ResumeSummaryGenerator } from "@/components/portfolio/resume-summary";
import { Separator } from "@/components/ui/separator";

export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <div className="container mx-auto max-w-5xl p-4 sm:p-6 lg:p-8 space-y-12 md:space-y-16 animate-in fade-in-0 duration-500">
        <Header />
        <main className="space-y-12 md:space-y-16">
          <Experience />
          <Separator className="bg-border/50" />
          <Projects />
          <Separator className="bg-border/50" />
          <SkillsAndEducation />
          <Separator className="bg-border/50" />
          <ResumeSummaryGenerator />
        </main>
      </div>
    </div>
  );
}
