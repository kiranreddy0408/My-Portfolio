import { portfolioData } from "@/lib/data.tsx";
import { Section } from "./section";

export function About() {
  const { description, stats, services } = portfolioData.about;

  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <p className="text-muted-foreground text-lg text-center md:text-left">{description}</p>
          <div className="flex flex-wrap gap-8 justify-center md:justify-start">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6 flex flex-col items-center md:items-start">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="flex items-center gap-4">
                <div className="p-3 bg-card rounded-md border border-border">
                  <Icon className="size-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
