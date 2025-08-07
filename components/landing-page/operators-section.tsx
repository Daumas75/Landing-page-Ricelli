'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const operators = [
  { name: 'Sulamérica', logo: 'https://i.imgur.com/kqgscFO.png', hint: 'Sulamerica logo' },
  { name: 'Bradesco Saúde', logo: 'https://i.imgur.com/wBcISq1.png', hint: 'Bradesco Saude logo' },
  { name: 'Qualicorp', logo: 'https://i.imgur.com/h9JmVUj.png', hint: 'Qualicorp logo' },
  { name: 'Seguros Unimed', logo: 'https://i.imgur.com/plaQx75.png', hint: 'Seguros Unimed logo' },
  { name: 'Amil', logo: 'https://i.imgur.com/MaRr9wG.png', hint: 'Amil logo' },
  { name: 'NotreDame Intermédica', logo: 'https://i.imgur.com/pYxjf4E.png', hint: 'NotreDame Intermedica logo' },
  { name: 'Assim Saúde', logo: 'https://i.imgur.com/3KsyNmQ.png', hint: 'Assim Saude logo' },
  { name: 'Unimed Leste Fluminense', logo: 'https://i.imgur.com/LBsKKce.png', hint: 'Unimed Leste Fluminense logo' },
];

const duplicatedOperators = [...operators, ...operators];

export default function OperatorsSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true, stopOnHover: true })
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  
  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  }

  return (
    <section id="operadoras" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            Trabalhamos com as melhores operadoras
          </h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Garantimos parceria com as empresas mais confiáveis e reconhecidas do mercado.
          </p>
        </div>
        <div className="animate-fade-in-up [animation-delay:200ms]">
          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.play}
          >
            <CarouselContent className="-ml-8">
              {duplicatedOperators.map((op, index) => (
                <CarouselItem key={index} className="basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 pl-8">
                  <div className="flex justify-center items-center h-20">
                    <Image
                      src={op.logo}
                      alt={`Logo ${op.name}`}
                      width={180}
                      height={60}
                      data-ai-hint={op.hint}
                      className="object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: operators.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  'h-1.5 w-1.5 rounded-full transition-colors',
                  current === index || (current - operators.length) === index ? 'bg-accent' : 'bg-primary/20 hover:bg-primary/40'
                )}
                aria-label={`Ir para o slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}