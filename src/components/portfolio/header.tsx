import { portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <section id="home" className="relative bg-[#121212] text-white overflow-hidden pb-20">
      <div 
          className="absolute inset-0 z-0" 
          style={{
              backgroundImage: 'radial-gradient(ellipse at center, rgba(38, 38, 38, 1) 0%, rgba(18, 18, 18, 1) 100%)'
          }}
      />

      <div className="container mx-auto max-w-6xl px-4 pt-16 md:pt-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">
              Hello<span className="text-[#E4602F]">.</span><br />
              I&apos;m {portfolioData.name.split(' ')[0]}
            </h1>
            <h2 className="text-4xl md:text-5xl font-semibold text-white/90">{portfolioData.title}</h2>
            <div className="flex items-center gap-4 pt-4">
              <Button asChild size="lg" className="bg-[#E4602F] text-white hover:bg-[#d35420]">
                <a href="mailto:kiranreddy.b0408@gmail.com">Let's Collaborate</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#E4602F] text-white hover:bg-[#E4602F]/10">
                <a href="/Kiran_Reddy_Boojala_Resume.pdf" download>My resume</a>
              </Button>
            </div>
          </div>
          
          <div className="relative h-[400px] md:h-[600px]">
            <div className="absolute inset-0 flex justify-center items-center">
              <div 
                className="absolute w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full blur-2xl" 
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(228, 96, 47, 0.4) 30%, transparent 70%)'
                }} 
              />
              
              <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border-8 border-[#E4602F]/80" />
              
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5"
                className="absolute top-1/3 left-0 md:left-8 text-[#E4602F]/80 size-24 md:size-32 transform -translate-y-1/2"
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
                className="absolute bottom-1/3 right-0 md:right-8 text-[#E4602F]/80 size-24 md:size-32 transform translate-y-1/2"
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
