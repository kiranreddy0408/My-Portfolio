import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  title: string;
  Icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, Icon, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("space-y-8", className)}>
      <div className="relative">
        <h2 className="text-4xl font-headline font-bold text-center">{title}</h2>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary"></div>
      </div>
      {children}
    </section>
  );
}
