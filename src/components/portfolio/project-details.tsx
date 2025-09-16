import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { placeholderImages } from "@/lib/placeholder-images";
import { DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectDetailsProps {
  project: (typeof portfolioData.projects)[0];
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const placeholder = placeholderImages.find(p => p.id === project.id);

  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-2xl mb-4">{project.title}</DialogTitle>
        {placeholder && (
          <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
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
        <div className="flex flex-wrap gap-2 my-4">
          {project.tech.map((tech, i) => (
            <Badge key={i} variant="secondary">{tech}</Badge>
          ))}
        </div>
        <DialogDescription className="text-left text-base text-muted-foreground">
          {project.description}
        </DialogDescription>
      </DialogHeader>
      <DialogFooter className="mt-6 sm:justify-start">
        <Button asChild variant="outline">
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 size-4" />
            View Code
          </a>
        </Button>
        <Button asChild>
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 size-4" />
            View Live
          </a>
        </Button>
      </DialogFooter>
    </>
  );
}
