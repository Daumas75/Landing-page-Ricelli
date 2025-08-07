
import Header from '@/components/landing-page/header';
import Footer from '@/components/landing-page/footer';

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg">
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-8 text-center">📄 Termos de Serviço</h1>
            <div className="prose prose-lg text-primary/80 max-w-none space-y-6 text-justify">
              <p>
                Estes Termos de Serviço regulam o uso do site de Ricelli Daumas, corretora de planos de saúde, odontológicos e seguros. Ao acessar este site, você concorda com as condições aqui estabelecidas. Caso não concorde com algum dos termos, recomendamos que não utilize nossos serviços.
              </p>
              
              <h2 className="text-2xl font-headline font-bold text-primary mt-8">1. Objetivo do Site</h2>
              <p>
                O site tem como finalidade principal oferecer informações, simulações e contato direto com a corretora para serviços relacionados a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Planos de saúde</li>
                <li>Planos odontológicos</li>
                <li>Seguros diversos</li>
              </ul>
              <p>
                Todas as informações disponibilizadas são de caráter informativo e não constituem proposta ou contrato vinculativo.
              </p>

              <h2 className="text-2xl font-headline font-bold text-primary mt-8">2. Uso do Site</h2>
              <p>
                Ao utilizar este site, você se compromete a:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fornecer informações verdadeiras e completas ao preencher qualquer formulário</li>
                <li>Utilizar os recursos do site de forma ética e legal</li>
                <li>Não utilizar os serviços com fins fraudulentos, maliciosos ou prejudiciais a terceiros</li>
              </ul>

              <h2 className="text-2xl font-headline font-bold text-primary mt-8">3. Simulações e Contato</h2>
              <p>
                As simulações de planos e seguros disponibilizadas por meio do site têm caráter informativo e não garantem aprovação, valores fixos ou contratação imediata. Todas as cotações estão sujeitas à análise das operadoras ou seguradoras parceiras e podem variar de acordo com dados fornecidos, localização, idade e perfil do cliente.
              </p>

              <h2 className="text-2xl font-headline font-bold text-primary mt-8">4. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo do site (textos, imagens, vídeos, identidade visual) é de propriedade de Ricelli Daumas, salvo quando indicado o contrário. É proibida a reprodução, distribuição ou modificação de qualquer material sem autorização expressa.
              </p>

              <h2 className="text-2xl font-headline font-bold text-primary mt-8">5. Isenção de Responsabilidade</h2>
              <p>
                Embora nos esforcemos para manter as informações do site sempre atualizadas e corretas, não nos responsabilizamos por:
              </p>
               <ul className="list-disc pl-6 space-y-2">
                <li>Eventuais erros tipográficos ou omissões</li>
                <li>Decisões tomadas com base nas informações disponibilizadas</li>
                <li>Links externos que não estão sob nosso controle</li>
              </ul>

              <h2 className="text-2xl font-headline font-bold text-primary mt-8">6. Alterações nos Termos</h2>
              <p>
                Reservamo-nos o direito de alterar estes Termos de Serviço a qualquer momento, sem aviso prévio. Recomenda-se que o usuário revise periodicamente esta página para estar ciente de quaisquer modificações. O uso contínuo do site após atualizações constitui aceitação dos novos termos.
              </p>

              <h2 className="text-2xl font-headline font-bold text-primary mt-8">7. Contato</h2>
              <p>
                Para dúvidas, sugestões ou informações adicionais, entre em contato pelos canais disponíveis neste site ou via WhatsApp: (21) 99487-8791.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
