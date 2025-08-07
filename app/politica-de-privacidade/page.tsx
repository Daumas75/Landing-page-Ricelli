import Header from '@/components/landing-page/header';
import Footer from '@/components/landing-page/footer';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg">
            <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-8 text-center">🔒 Política de Privacidade</h1>
            <div className="prose prose-lg text-primary/80 max-w-none space-y-6 text-justify">
              <p>
                A sua privacidade é uma prioridade para nós. Esta Política de Privacidade descreve como coletamos, utilizamos e protegemos os seus dados pessoais no site de Ricelli Daumas, corretora de planos de saúde, odontológicos e seguros.
              </p>
              
              <h2 className="text-2xl font-headline font-bold text-primary mt-8">1. Coleta de Informações</h2>
              <p>
                Coletamos informações pessoais apenas quando necessário para fornecer nossos serviços, sempre com o seu conhecimento e consentimento. As informações solicitadas em nosso formulário de contato — como nome, e-mail e telefone — são utilizadas exclusivamente para:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Entrar em contato com você</li>
                <li>Enviar cotações e simulações de planos de saúde, odontológicos ou seguros</li>
                <li>Oferecer um atendimento personalizado</li>
              </ul>
              <p>
                Sempre informamos o motivo da coleta e garantimos transparência no uso dos dados.
              </p>

              <h2 className="text-2xl font-headline font-bold text-primary mt-8">2. Uso e Armazenamento dos Dados</h2>
              <p>
                Mantemos os dados pessoais apenas pelo tempo necessário para cumprir os objetivos mencionados nesta política. Durante esse período, adotamos medidas técnicas e administrativas adequadas para proteger suas informações contra acessos não autorizados, perdas ou vazamentos.
              </p>
              <p>
                Seus dados podem ser armazenados de forma segura em serviços como Google Sheets, utilizados exclusivamente para fins operacionais internos.
              </p>

              <h2 className="text-2xl font-headline font-bold text-primary mt-8">3. Compartilhamento de Informações</h2>
              <p>
                Não compartilhamos suas informações pessoais com terceiros, exceto nos seguintes casos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Quando exigido por lei ou ordem judicial</li>
                <li>Com sua autorização expressa</li>
              </ul>
              <p>
                Prezamos pela confidencialidade e segurança dos seus dados em todas as etapas do processo.
              </p>

              <h2 className="text-2xl font-headline font-bold text-primary mt-8">4. Links para Sites de Terceiros</h2>
              <p>
                Nosso site pode conter links para páginas externas, sobre as quais não temos controle. Não nos responsabilizamos pelas políticas de privacidade ou práticas de terceiros. Recomendamos que você leia as políticas de privacidade desses sites ao acessá-los.
              </p>

              <h2 className="text-2xl font-headline font-bold text-primary mt-8">5. Seus Direitos</h2>
              <p>
                Você tem o direito de:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Solicitar a exclusão dos seus dados</li>
                <li>Revogar o consentimento a qualquer momento</li>
                <li>Obter informações sobre o uso dos seus dados</li>
              </ul>
              <p>
                O fornecimento de dados pessoais é opcional, mas necessário para o envio de simulações e propostas. Ao continuar navegando em nosso site, entendemos que você concorda com os termos desta política.
              </p>

              <h2 className="text-2xl font-headline font-bold text-primary mt-8">6. Contato</h2>
              <p>
                Se tiver dúvidas ou solicitações relacionadas à sua privacidade ou ao uso dos seus dados, entre em contato conosco pelos canais disponíveis neste site ou através do WhatsApp: (21) 99487-8791.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}