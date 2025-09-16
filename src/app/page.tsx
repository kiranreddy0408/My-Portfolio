import { Header } from "@/components/portfolio/header";
import { Experience } from "@/components/portfolio/experience";
import { Projects } from "@/components/portfolio/projects";
import { Skills } from "@/components/portfolio/skills";
import { About } from "@/components/portfolio/about";
import { Navbar } from "@/components/portfolio/navbar";
import { Footer } from "@/components/portfolio/footer";
import { SkillsMarquee } from "@/components/portfolio/skills-marquee";

export default function PortfolioPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Navbar />
      <Header />
      <SkillsMarquee />
      <main className="flex-grow container mx-auto max-w-6xl p-4 sm:p-6 lg:p-8 space-y-20 md:space-y-28">
        <About />
        <Projects />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
