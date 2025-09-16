'use client';

import { skillsData } from "@/lib/data";

const allSkills = Object.values(skillsData).flat();

export function SkillsMarquee() {
  const MarqueeItem = ({ skill }: { skill: (typeof allSkills)[0] }) => {
    const Icon = skill.icon;
    return (
      <div className="flex items-center gap-2 md:gap-4 mx-2 md:mx-4 p-2 md:p-3 bg-card rounded-lg border border-border flex-shrink-0">
        <Icon className="size-5 md:size-6 text-primary" />
        <span className="text-sm md:text-base font-semibold">{skill.name}</span>
      </div>
    );
  };

  return (
    <div className="py-2 bg-card/50 w-full overflow-hidden">
      <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap">
          <div className="flex flex-shrink-0">
            {allSkills.map((skill, index) => (
              <MarqueeItem key={`marquee1-${index}`} skill={skill} />
            ))}
          </div>
          <div className="flex flex-shrink-0">
            {allSkills.map((skill, index) => (
              <MarqueeItem key={`marquee2-${index}`} skill={skill} />
            ))}
          </div>
      </div>
    </div>
  );
}
