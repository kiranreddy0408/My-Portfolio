import { portfolioData } from "@/lib/data";

export function SkillsMarquee() {
  const allSkills = Object.values(portfolioData.skills).flat();
  const skills = [...allSkills, ...allSkills]; // Duplicate for seamless looping

  return (
    <div className="relative w-full overflow-hidden bg-card py-4">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
      <div className="flex animate-marquee hover:animate-pause">
        {skills.map((skill, index) => (
          <div key={index} className="flex-shrink-0 w-48 flex items-center justify-center">
            <span className="text-muted-foreground text-lg font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
