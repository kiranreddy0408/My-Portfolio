'use client';

import { skillsData } from "@/lib/data";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
    <div className="py-8 bg-card/50 w-full">
       <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-4 p-4 animate-marquee hover:[animation-play-state:paused]">
            {allSkills.map((skill, index) => (
              <MarqueeItem key={`marquee1-${index}`} skill={skill} />
            ))}
            {allSkills.map((skill, index) => (
              <MarqueeItem key={`marquee2-${index}`} skill={skill} />
            ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
