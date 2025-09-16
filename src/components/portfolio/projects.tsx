'use client';

import { useState } from "react";
import { portfolioData } from "@/lib/data";
import { placeholderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section } from "./section";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ProjectDetails } from "./project-details";

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<(typeof portfolioData.projects)[0] | null>(null);

  return (
    <Section id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioData.projects.map((project, index) => {
          const placeholder = placeholderImages.find(p => p.id === project.id);
          return (
            <Card 
              key={index} 
              className="flex flex-col bg-card border shadow-lg hover:transform hover:-translate-y-2 transition-transform duration-300 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <CardHeader>
                {placeholder && (
                  <div className="relative h-48 w-full mb-4 rounded-t-lg overflow-hidden">
                    <Image
                      src={placeholder.imageUrl}
                      alt={`Screenshot of ${project.title}`}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full"
                      data-ai-hint={placeholder.imageHint}
                    />
                  </div>
                )}
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
              </CardFooter>
            </Card>
          )
        })}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}>
        <DialogContent className="max-w-3xl">
          {selectedProject && <ProjectDetails project={selectedProject} />}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
