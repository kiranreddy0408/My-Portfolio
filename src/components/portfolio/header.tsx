import { portfolioData, contactIcons } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { TypingEffect } from "./typing-effect";

export function Header() {
  const headlines = ["Software Engineer", "Building AI Agents", "Programmer"];
  const socialLinks = [
    { name: "linkedin", href: portfolioData.contact.social.linkedin },
    { name: "github", href: portfolioData.contact.social.github },
  ];

  return (
    <section id="home" className="relative bg-background text-white overflow-hidden">
       <div 
          className="absolute inset-0 z-0" 
          style={{
              backgroundImage: 'radial-gradient(ellipse at center, rgba(30, 30, 30, 1) 0%, rgba(18, 18, 18, 1) 100%)'
          }}
      />
      <div className="container mx-auto max-w-6xl px-4 pt-24 md:pt-28 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hello<span className="text-primary">.</span><br />
              I&apos;m {portfolioData.name.split(' ')[0]}
            </h1>
            <TypingEffect headlines={headlines} className="text-3xl md:text-5xl font-semibold text-white/90" />
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <Button asChild size="lg">
                <a href="mailto:kiranreddy.b0408@gmail.com">Let's Collaborate</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/kiranreddy_resume.pdf" target="_blank" rel="noopener noreferrer">My resume</a>
              </Button>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 pt-4">
              {socialLinks.map((social) => {
                const Icon = contactIcons[social.name];
                return (
                  <Button asChild variant="ghost" size="icon" key={social.name} className="text-white hover:bg-white/10 hover:text-primary">
                    <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                      <Icon className="size-6" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
          
          <div className="relative h-[300px] md:h-[450px]">
            <div className="absolute inset-0 flex justify-center items-center">
              <div 
                className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full blur-2xl" 
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(228, 96, 47, 0.3) 30%, transparent 70%)'
                }} 
              />
              
              <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full border-4 border-primary/80" />
              
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5"
                className="absolute top-1/4 left-0 text-primary/80 size-16 md:size-24 transform -translate-y-1/2"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
             <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                strokeWidth="1.5" 
                className="absolute bottom-1/4 right-0 text-primary/80 size-16 md:size-24 transform translate-y-1/2"
              >
                <path d="m9 6 6 6-6 6" />
              </svg>

            </div>
            
            <div className="absolute inset-0 flex justify-center items-end">
              <img
                src="/pfp4.png"
                alt="Portrait of Kiran Reddy Boojala"
                width={500}
                height={550}
                className="object-contain object-bottom w-4/5 h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
