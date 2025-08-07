'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Logo = () => (
    <div className="flex items-center space-x-3 text-primary">
        <div className="p-1 rounded-lg">
            <svg width="40" height="40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: 'hsl(var(--primary))', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: 'hsl(var(--accent))', stopOpacity: 1}} />
                    </linearGradient>
                </defs>
                <rect width="200" height="200" rx="30" fill="url(#logoGradient)"/>
                <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontSize="90" fontWeight="bold" fill="hsl(var(--primary-foreground))" className="font-headline">
                    RD
                </text>
            </svg>
        </div>
        <div className="flex flex-col">
            <span className="font-headline font-bold text-lg leading-tight">Ricelli Daumas</span>
            <span className="text-sm text-primary/90 leading-tight">Corretora de Seguros</span>
        </div>
    </div>
);


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'bg-white/90 shadow-md backdrop-blur-sm'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="transition-transform hover:scale-105">
          <Logo />
        </Link>
        <nav className="flex items-center gap-4">
            <Button asChild variant="ghost" className="hidden md:flex text-lg">
                <Link href="/#inicio">Início</Link>
            </Button>
            <Button asChild variant="ghost" className="hidden md:flex text-lg">
                <Link href="/#sobre">Sobre mim</Link>
            </Button>
            <Button asChild variant="ghost" className="hidden md:flex text-lg">
                <Link href="/#planos">Planos</Link>
            </Button>
            <Button asChild variant="ghost" className="hidden md:flex text-lg">
                <Link href="/#diferenciais">Diferenciais</Link>
            </Button>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 shadow-lg transition-transform hover:scale-105">
                <Link href="/#simulacao">Simule agora</Link>
            </Button>
        </nav>
      </div>
    </header>
  );
}
