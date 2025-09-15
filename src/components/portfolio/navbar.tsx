'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { useScrollTo } from '@/lib/utils';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollTo = useScrollTo();

  const handleLinkClick = (id: string) => {
    scrollTo(id);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl flex items-center justify-between h-20">
        <h1 className="text-2xl font-bold font-headline">
          {portfolioData.name.split(' ')[0]} <span className="text-primary">{portfolioData.name.split(' ')[1]}</span>
        </h1>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Button asChild>
            <a href={`mailto:${portfolioData.contact.email}`}>Contact</a>
          </Button>
        </nav>
        <div className="md:hidden">
          <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon">
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background">
          <nav className="flex flex-col items-center gap-6 py-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-lg text-foreground/80 hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button asChild>
              <a href={`mailto:${portfolioData.contact.email}`}>Contact</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
