import Image from 'next/image';
import { portfolioData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-images';

export function Header() {
  const profileImage = placeholderImages.find(img => img.id === 'profile-picture');

  return (
    <section id="home" className="grid md:grid-cols-2 gap-12 items-center pt-16 md:pt-24">
      <div className="space-y-4 md:order-1">
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
      <div className="relative flex justify-center items-center md:order-2">
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-primary/20 blur-3xl"></div>
        {profileImage && (
          <Image
            src={profileImage.imageUrl}
            alt="Portrait of Kiran Reddy Boojala"
            width={400}
            height={400}
            className="rounded-full object-cover w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 z-10"
            priority
            data-ai-hint={profileImage.imageHint}
          />
        )}
      </div>
    </section>
  );
}
