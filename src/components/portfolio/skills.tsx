import { Section } from "./section";
import { skillsData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <p className="text-center text-muted-foreground mb-12 -mt-4">
        Here are some of my skills on which I have been working on for the past 2 years.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(skillsData).map(([category, skills]) => (
          <Card key={category} className="bg-card border shadow-lg flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-primary">{category}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex items-center justify-center">
              <div className="flex flex-wrap gap-4 justify-center">
                {skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <Icon className="size-5" />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
