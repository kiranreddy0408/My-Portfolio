import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  Icon: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, Icon, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("space-y-6", className)}>
      <div className="flex items-center gap-3">
        <Icon className="size-8 text-accent" />
        <h2 className="text-3xl font-headline font-semibold">{title}</h2>
      </div>
      {children}
    </section>
  );
}
