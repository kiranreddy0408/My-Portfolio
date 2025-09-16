'use client';
import React from 'react';
import { skillsData } from '@/lib/data';
import { cn } from '@/lib/utils';


const allSkills = Object.values(skillsData).flat();

export function SkillsMarquee() {
  const MarqueeItem = ({ skill }) => {
    const Icon = skill.icon;
    return (
      <div className="flex items-center gap-4 mx-4 p-3 bg-card border border-border rounded-lg flex-shrink-0 text-foreground">
        <Icon className="size-8 text-primary" />
        <span className="text-lg font-semibold">{skill.name}</span>
      </div>
    );
  };

  return (
    <div className="py-8 bg-background/50 overflow-hidden relative group w-full">
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
