import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'Quais documentos são necessários para a contratação?',
    answer:
      'Geralmente, são necessários RG, CPF, comprovante de residência e, para planos familiares, certidão de casamento ou nascimento. Para planos empresariais, a documentação da empresa também é exigida.',
  },
  {
    question: 'Como funciona o reajuste dos planos?',
    answer:
      'Os reajustes anuais são regulados pela ANS (Agência Nacional de Saúde Suplementar) e ocorrem na data de aniversário do contrato. Também pode haver reajuste por faixa etária.',
  },
  {
    question: 'Posso incluir meus dependentes no plano?',
    answer:
      'Sim, a maioria dos planos permite a inclusão de dependentes diretos, como cônjuges e filhos. Alguns planos também aceitam outros graus de parentesco, mediante análise.',
  },
  {
    question: 'O que é carência em um plano de saúde?',
    answer:
      'Carência é o período que você precisa esperar após a contratação para poder utilizar determinados serviços do plano. Esse tempo varia conforme o procedimento e a operadora.',
  },
   {
    question: 'É possível fazer portabilidade de carências?',
    answer:
      'Sim, se você já possui um plano de saúde, é possível mudar para outro sem cumprir novas carências, desde que siga as regras de portabilidade estabelecidas pela ANS.',
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-primary/70 max-w-2xl mx-auto">
            Tire suas dúvidas mais comuns sobre planos de saúde e seguros.
          </p>
        </div>
        <div className="max-w-3xl mx-auto animate-fade-in-up [animation-delay:200ms]">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-xl shadow-md px-6 border-l-4 border-accent transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
                <AccordionTrigger className="text-lg font-semibold text-primary text-left hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-primary/80 pt-2 text-justify">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
