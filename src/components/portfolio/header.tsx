import Image from 'next/image';
import { portfolioData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Header() {
  return (
    <section id="home" className="container mx-auto max-w-6xl pt-16 md:pt-24 relative">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 z-10">
          <h1 className="font-headline text-5xl md:text-6xl font-bold">
            Hello<span className="text-primary">.</span><br />
            I&apos;m {portfolioData.name.split(' ')[0]}
          </h1>
          <h2 className="text-4xl md:text-5xl font-semibold text-primary-foreground/90">{portfolioData.title}</h2>
          <div className="flex items-center gap-4 pt-4">
            <Button asChild size="lg">
              <a href="mailto:kiranreddy.b0408@gmail.com">Get a project?</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="/Kiran_Reddy_Boojala_Resume.pdf" download>My resume</a>
            </Button>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[600px] mt-[-100px] md:mt-0">
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border-4 border-primary/20" />
            <div className="absolute w-[250px] h-[250px] md:w-[450px] md:h-[450px] rounded-full" style={{backgroundImage: 'radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, hsl(var(--background)) 70%)'}} />
             <ChevronLeft className="absolute top-1/3 left-4 md:left-16 text-primary/30 size-16 md:size-24 transform -translate-y-1/2" strokeWidth={1} />
            <ChevronRight className="absolute bottom-1/3 right-4 md:right-16 text-primary/30 size-16 md:size-24 transform translate-y-1/2" strokeWidth={1} />
          </div>
          <div className="absolute inset-0 flex justify-center items-end">
            <Image
              src="/pfp4.png"
              alt="Portrait of Kiran Reddy Boojala"
              width={500}
              height={550}
              className="object-contain object-bottom w-[80%] h-full"
              priority
              data-ai-hint="man portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
