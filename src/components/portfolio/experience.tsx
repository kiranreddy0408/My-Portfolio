import { portfolioData, sectionIcons } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" title="Experience" Icon={sectionIcons.experience}>
      <div className="space-y-6">
        {portfolioData.experience.map((exp, index) => (
          <Card key={index} className="bg-card/50 border-border/50">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                  <CardDescription className="text-base">{exp.company}</CardDescription>
                </div>
                <div className="text-left sm:text-right text-sm text-muted-foreground mt-2 sm:mt-0">
                  <p>{exp.duration}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
