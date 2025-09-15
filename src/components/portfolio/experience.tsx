import { portfolioData } from "@/lib/data.tsx";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-8">
        {portfolioData.experience.map((exp, index) => (
          <Card key={index} className="bg-card border shadow-lg">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-bold text-primary-foreground">{exp.role}</CardTitle>
                  <CardDescription className="text-lg text-primary">{exp.company}</CardDescription>
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
