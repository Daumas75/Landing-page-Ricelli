import Image from 'next/image';
import { Card } from '@/components/ui/card';
import Link from 'next/link';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-4 animate-fade-in-up">
            <Card className="rounded-2xl shadow-xl overflow-hidden border-0 max-w-xs mx-auto">
                <Image
                  src="https://i.imgur.com/P1EXXzs.png"
                  alt="Ricelli Daumas"
                  width={300}
                  height={400}
                  className="object-cover w-full h-full"
                />
            </Card>
          </div>
          <div className="md:col-span-8 space-y-6 animate-fade-in-up [animation-delay:200ms]">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
              Quem é Ricelli Daumas?
            </h2>
            <div className="prose prose-lg text-primary/80 max-w-none">
                <p>
                    Olá! Sou Ricelli Daumas, especialista em encontrar o plano de saúde, odontológico ou seguro ideal para as suas necessidades. Com anos de experiência no mercado e atuando pela <a href="https://jcluz.com.br/" target="_blank" rel="noopener noreferrer" className="text-accent uppercase font-bold hover:underline">JC LUZ CORRETORA DE SEGUROS</a>, minha missão é oferecer um atendimento humano, transparente e totalmente focado em garantir sua tranquilidade.
                </p>
                <p>
                    Acredito que a confiança é a base de tudo. Por isso, dedico meu tempo a entender sua realidade para oferecer soluções que realmente façam a diferença na sua vida e no seu bolso. Mais que uma corretora, sou sua parceira na busca por mais segurança e bem-estar.
                </p>
                <p>
                    Vamos conversar? Estou aqui para ajudar você a fazer a melhor escolha.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
