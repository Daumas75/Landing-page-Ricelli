
'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const plans = [
  {
    operator: 'Plano Essencial',
    price: 'A partir de R$ 159,90',
    description: 'Ideal para quem busca cobertura completa com o melhor custo-benefício.',
    benefits: [
      'Consultas e exames',
      'Internação em enfermaria',
      'Atendimento de urgência',
      'Ampla rede credenciada',
    ],
    isFeatured: false,
  },
  {
    operator: 'Plano Família Plus',
    price: 'A partir de R$ 289,90',
    description: 'Proteção completa para toda a sua família com benefícios exclusivos.',
    benefits: [
      'Tudo do Plano Essencial',
      'Plano Odontológico incluso',
      'Internação em apartamento',
      'Reembolso rápido',
    ],
    isFeatured: true,
  },
  {
    operator: 'Plano Premium Total',
    price: 'A partir de R$ 499,90',
    description: 'Cobertura premium com acesso aos melhores hospitais e laboratórios.',
    benefits: [
      'Tudo do Família Plus',
      'Rede hospitalar premium',
      'Coleta domiciliar de exames',
      'Assistência viagem internacional',
    ],
    isFeatured: false,
  },
];

export default function PricingSection() {
  return (
    <section id="planos" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            Planos com preços especiais!
          </h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Encontre a opção perfeita que se encaixa no seu orçamento e nas suas necessidades.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto animate-slide-in-left [animation-delay:200ms]">
          {plans.map((plan, index) => (
            <Card key={index} className={`flex flex-col rounded-2xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl ${plan.isFeatured ? 'border-accent border-2 relative' : 'border-gray-200'}`}>
              {plan.isFeatured && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                  Mais Popular
                </div>
              )}
              <CardHeader className="pt-12">
                <CardTitle className="text-2xl font-headline text-primary">{plan.operator}</CardTitle>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-6">
                <p className="text-3xl font-bold text-primary">{plan.price}</p>
                <ul className="space-y-3 text-primary/80">
                  {plan.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className={`w-full rounded-full text-lg shadow-md ${plan.isFeatured ? 'bg-accent hover:bg-accent/90' : 'bg-primary hover:bg-primary/90'}`}>
                  <Link href="#simulacao">Quero este plano</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
