
'use client';

import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const LogoFooter = () => (
    <div className="flex items-center space-x-3 text-primary-foreground">
        <div className="p-1 rounded-lg">
           <svg width="40" height="40" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <defs>
                    <linearGradient id="logoGradientFooter" x1="0%" y1="0%" x2="100%" y2="100%">
                         <stop offset="0%" style={{stopColor: '#E8F0FE', stopOpacity: 1}} />
                        <stop offset="100%" style={{stopColor: '#30A688', stopOpacity: 1}} />
                    </linearGradient>
                </defs>
                <rect width="200" height="200" rx="30" fill="url(#logoGradientFooter)"/>
                <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fontSize="90" fontWeight="bold" fill="hsl(var(--primary))" className="font-headline">
                    RD
                </text>
            </svg>
        </div>
        <div className="flex flex-col">
            <span className="font-headline font-bold text-lg leading-tight">Ricelli Daumas</span>
            <span className="text-sm text-primary-foreground/90 leading-tight">Corretora de Seguros</span>
        </div>
    </div>
);


export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-black text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <LogoFooter />
            <p className="text-primary-foreground/70 max-w-[250px]">
              Sua parceira para um futuro mais seguro e tranquilo.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li className="flex items-center justify-center md:justify-start gap-2 hover:text-accent transition-colors">
                 <a href="https://wa.me/5521994878791" target="_blank" rel="noopener noreferrer" className="flex items-center">
                   <Phone className="mr-2 h-5 w-5"/>
                  (21) 99487-8791
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 hover:text-accent transition-colors">
                <a href="mailto:ricellidaumascs@gmail.com"  className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  ricellidaumascs@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Úteis</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li><Link href="/#sobre" className="hover:text-accent transition-colors">Sobre mim</Link></li>
              <li><Link href="/#planos" className="hover:text-accent transition-colors">Planos</Link></li>
              <li><Link href="/#simulacao" className="hover:text-accent transition-colors">Simulação Gratuita</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-primary-foreground/60 text-sm">
          <p>&copy; {currentYear} Ricelli Daumas. Todos os direitos reservados.</p>
          <p className="mt-2">
            Este é um site pessoal de consultoria. Atuação pela <a href="https://jcluz.com.br/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-foreground/90 uppercase hover:underline">JC LUZ CORRETORA DE SEGUROS</a>.
          </p>
          <div className="mt-2 space-x-4">
            <Link href="/termos-de-servico" className="hover:underline">Termos de Serviço</Link>
            <span>|</span>
            <Link href="/politica-de-privacidade" className="hover:underline">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
