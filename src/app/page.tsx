import { Header } from "@/components/portfolio/header";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { SkillsAndEducation } from "@/components/portfolio/skills-education";
import { About } from "@/components/portfolio/about";
import { Navbar } from "@/components/portfolio/navbar";
import { SkillsMarquee } from "@/components/portfolio/skills-marquee";
import { Footer } from "@/components/portfolio/footer";

export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <Header />
      <SkillsMarquee />
      <main className="flex-grow container mx-auto max-w-6xl p-4 sm:p-6 lg:p-8 space-y-20 md:space-y-28">
        <Projects />
        <SkillsAndEducation />
        <About />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
