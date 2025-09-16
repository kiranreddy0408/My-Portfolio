'use client';

import { skillsData } from "@/lib/data";

const allSkills = Object.values(skillsData).flat();

export function SkillsMarquee() {
  const MarqueeItem = ({ skill }: { skill: (typeof allSkills)[0] }) => {
    const Icon = skill.icon;
    return (
      <div className="flex items-center gap-4 mx-4 p-3 bg-card rounded-lg border border-border flex-shrink-0">
        <Icon className="size-8 text-primary" />
        <span className="text-lg font-semibold">{skill.name}</span>
      </div>
    );
  };

  return (
    <div className="py-8 bg-card/50 overflow-hidden relative group w-full">
      <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
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
