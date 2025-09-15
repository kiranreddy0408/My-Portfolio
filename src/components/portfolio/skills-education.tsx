import { portfolioData, sectionIcons } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "./section";

export function SkillsAndEducation() {
  return (
    <div className="grid md:grid-cols-2 gap-16">
      <Section id="skills" title="Technical Skills" Icon={sectionIcons.skills}>
        <Card className="bg-card/50 border-none">
          <CardContent className="p-6">
            <div className="space-y-6">
              {Object.entries(portfolioData.skills).map(([category, skills]) => (
                <div key={category}>
                  <h3 className="font-semibold text-lg mb-3 text-primary">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <Badge key={skill} variant="secondary">{skill}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </Section>
      
      <Section id="education" title="Education" Icon={sectionIcons.education}>
        <div className="space-y-6">
          {portfolioData.education.map((edu, index) => (
            <Card key={index} className="bg-card/50 border-none">
              <CardHeader>
                <div className="flex flex-col sm:flex-row justify-between items-start">
                  <div>
                    <CardTitle className="text-lg font-semibold">{edu.institution}</CardTitle>
                    <p className="text-muted-foreground">{edu.degree}</p>
                  </div>
                  <div className="text-left sm:text-right text-sm text-muted-foreground mt-2 sm:mt-0">
                    <p>{edu.duration}</p>
                    <p>{edu.grade}</p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}