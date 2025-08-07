import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartHandshake, ShieldCheck, Smartphone, UsersRound } from 'lucide-react';
import React from 'react';

const differentials = [
  {
    icon: <HeartHandshake className="h-10 w-10 text-accent" />,
    title: 'Suporte Personalizado',
    description: 'Análise completa do seu perfil para encontrar a solução ideal, com um atendimento que entende você.',
  },
  {
    icon: <Smartphone className="h-10 w-10 text-accent" />,
    title: 'Atendimento Rápido',
    description: 'Conte com agilidade e praticidade para tirar suas dúvidas e resolver tudo pelo WhatsApp, sem burocracia.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-accent" />,
    title: 'Operadoras de Confiança',
    description: 'Trabalho apenas com as melhores e mais seguras operadoras de saúde e seguradoras do mercado.',
  },
  {
    icon: <UsersRound className="h-10 w-10 text-accent" />,
    title: 'Assistência Completa',
    description: 'Apoio total desde a cotação até o pós-venda, garantindo que você tenha a melhor experiência.',
  },
];

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            Por que escolher meus serviços?
          </h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Meu compromisso é com a sua tranquilidade. Veja como posso fazer a diferença.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up [animation-delay:200ms]">
          {differentials.map((item, index) => (
            <Card key={index} className="text-center rounded-2xl shadow-lg border-0 transition-transform hover:-translate-y-2">
              <CardHeader className="items-center">
                <div className="bg-accent/10 p-4 rounded-full mb-4">
                    {item.icon}
                </div>
                <CardTitle className="text-xl font-headline">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary/80">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
