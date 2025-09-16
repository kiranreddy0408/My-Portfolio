'use client';

import Marquee from "react-fast-marquee";
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
    <div className="py-2 bg-card/50">
      <Marquee pauseOnHover={true} speed={40}>
        {allSkills.map((skill, index) => (
          <MarqueeItem key={index} skill={skill} />
        ))}
      </Marquee>
    </div>
  );
}
