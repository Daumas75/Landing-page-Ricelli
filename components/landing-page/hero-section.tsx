
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section id="inicio" className="relative pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden text-center text-primary-foreground">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://i.imgur.com/FgsTcXb.png"
          alt="Família feliz aproveitando o dia"
          layout="fill"
          objectFit="cover"
          data-ai-hint="happy family"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-headline font-bold leading-tight tracking-tighter text-shadow-lg">
              <span className="text-white inline-block animate-float">Sua Saúde e Segurança</span> <br /> 
              <span className="typing-animation text-accent">Começam Aqui!</span>
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-shadow-md text-white">
              Planos de Saúde, Odontológicos e Seguros com atendimento personalizado para você e sua família.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="rounded-full px-8 py-6 text-lg shadow-lg bg-accent hover:bg-accent/90 transition-transform hover:scale-105">
                <Link href="https://wa.me/5521994878791" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Fale no WhatsApp
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg shadow-lg bg-white/20 border-white text-white hover:bg-white/90 hover:text-primary transition-transform hover:scale-105 backdrop-blur-sm">
                <Link href="#simulacao">
                  Simule agora <MoveRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
