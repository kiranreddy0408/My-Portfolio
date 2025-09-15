import React from 'react';

// --- Mock Data and Components (for standalone demonstration) ---
// You can replace these with your actual data and component imports.
const portfolioData = {
  name: 'Kiran Reddy',
  title: 'Software Developer',
};

const Button = ({ children, asChild, variant = 'default', size = 'default', className = '' }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  
  const sizeStyles = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
  };

  const variantStyles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  };

  const Tag = asChild ? 'span' : 'button';

  return (
    <Tag className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </Tag>
  );
};
// --- End of Mock Data and Components ---


export function Header() {
  return (
    // The main section with a dark background color
    <section id="home" className="relative bg-[#121212] text-white overflow-hidden">
        {/* Background Radial Gradient for the subtle lighting effect */}
        <div 
            className="absolute inset-0 z-0" 
            style={{
                backgroundImage: 'radial-gradient(ellipse at center, rgba(38, 38, 38, 1) 0%, rgba(18, 18, 18, 1) 100%)'
            }}
        />

      <div className="container mx-auto max-w-6xl px-4 pt-16 md:pt-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side: Text content */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold">
              Hello<span className="text-[#E4602F]">.</span><br />
              I&apos;m {portfolioData.name.split(' ')[0]}
            </h1>
            <h2 className="text-4xl md:text-5xl font-semibold text-white/90">{portfolioData.title}</h2>
            <div className="flex items-center gap-4 pt-4">
               {/* Note: Custom styles added to buttons to match the new theme */}
              <Button asChild size="lg" className="bg-[#E4602F] text-white hover:bg-[#d35420]">
                <a href="mailto:kiranreddy.b0408@gmail.com">Get a project?</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#E4602F] text-white hover:bg-[#E4602F]/10">
                <a href="/Kiran_Reddy_Boojala_Resume.pdf" download>My resume</a>
              </Button>
            </div>
          </div>
          
          {/* Right side: Image and decorative elements */}
          <div className="relative h-[400px] md:h-[600px]">
            <div className="absolute inset-0 flex justify-center items-center">
                
              {/* Glowing effect using a radial gradient */}
              <div 
                className="absolute w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full blur-2xl" 
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(228, 96, 47, 0.4) 30%, transparent 70%)'
                }} 
              />
              
              {/* Outer orange ring */}
              <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border-8 border-[#E4602F]/80" />
              
              {/* Chevron icons, styled to match the design */}
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
            
            {/* The main portrait image */}
            <div className="absolute inset-0 flex justify-center items-end">
              <img
                src="/pfp4.png" // Replace with your actual image path like "/pfp4.png"
                alt="Portrait of Kiran Reddy Boojala"
                width={500}
                height={550}
                className="object-contain object-bottom w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
