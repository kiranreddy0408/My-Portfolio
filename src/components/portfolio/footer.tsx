import { portfolioData, contactIcons } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Footer() {
  const socialLinks = [
    { name: "linkedin", href: portfolioData.contact.social.linkedin },
    { name: "github", href: portfolioData.contact.social.github },
  ];

  return (
    <footer className="bg-card py-8">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <div className="space-y-1">
          <h3 className="text-2xl font-bold">{portfolioData.name}</h3>
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()}. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = contactIcons[social.name];
            return (
              <Button asChild variant="ghost" size="icon" key={social.name}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                  <Icon className="size-6" />
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
