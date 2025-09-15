import { portfolioData, contactIcons } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Header() {
  const socialLinks = [
    { name: "linkedin", href: portfolioData.contact.social.linkedin },
    { name: "github", href: portfolioData.contact.social.github },
  ];
  const contactDetails = [
    { name: "email", value: portfolioData.contact.email, href: `mailto:${portfolioData.contact.email}` },
    { name: "phone", value: portfolioData.contact.phone, href: `tel:${portfolioData.contact.phone}` },
    { name: "location", value: portfolioData.contact.location, href: "#" },
  ];

  return (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div className="space-y-1">
        <h1 className="text-4xl font-headline font-bold text-primary">{portfolioData.name}</h1>
        <p className="text-lg text-muted-foreground">{portfolioData.title}</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
          {contactDetails.map((detail) => {
            const Icon = contactIcons[detail.name];
            const isLink = detail.href !== '#';
            const Wrapper = isLink ? 'a' : 'div';
            return (
              <Wrapper
                key={detail.name}
                href={isLink ? detail.href : undefined}
                target={isLink ? "_blank" : undefined}
                rel={isLink ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon className="size-4 text-accent" />
                <span>{detail.value}</span>
              </Wrapper>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-2">
        {socialLinks.map((social) => {
          const Icon = contactIcons[social.name];
          return (
            <Button asChild variant="outline" size="icon" key={social.name}>
              <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                <Icon className="size-5" />
              </a>
            </Button>
          );
        })}
      </div>
    </header>
  );
}
