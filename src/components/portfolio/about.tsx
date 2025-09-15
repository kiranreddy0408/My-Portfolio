import { portfolioData, sectionIcons } from "@/lib/data";
import { Section } from "./section";

export function About() {
  const { description, stats, services } = portfolioData.about;

  return (
    <Section id="about" title="About Me">
      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-1 space-y-6">
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
        <div className="md:col-span-2 space-y-6">
          <p className="text-muted-foreground text-lg">{description}</p>
          <div className="flex flex-wrap gap-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
