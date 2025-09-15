import { portfolioData } from "@/lib/data.tsx";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { Section } from "./section";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => (
          <Card key={index} className="flex flex-col bg-card border shadow-lg hover:transform hover:-translate-y-2 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="text-xl font-bold">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex-col items-start gap-4">
               <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="secondary">{tech}</Badge>
                ))}
              </div>
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
