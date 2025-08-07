import Header from '@/components/landing-page/header';
import HeroSection from '@/components/landing-page/hero-section';
import AboutSection from '@/components/landing-page/about-section';
import VideoSection from '@/components/landing-page/video-section';
import PricingSection from '@/components/landing-page/pricing-section';
import DifferentialsSection from '@/components/landing-page/differentials-section';
import OperatorsSection from '@/components/landing-page/operators-section';
import ContactSection from '@/components/landing-page/contact-section';
import Footer from '@/components/landing-page/footer';
import FaqSection from '@/components/landing-page/faq-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <VideoSection />
        <PricingSection />
        <DifferentialsSection />
        <OperatorsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
