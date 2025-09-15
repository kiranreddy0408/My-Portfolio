import { portfolioData, sectionIcons } from "@/lib/data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Section } from "./section";

export function Projects() {
  return (
    <Section id="projects" title="Projects" Icon={sectionIcons.projects}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.projects.map((project, index) => (
          <Card key={index} className="flex flex-col bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 size-4" />
                  View on GitHub
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Section>
  );
}
