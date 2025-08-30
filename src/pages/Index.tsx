import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Differentials from '@/components/Differentials';
import Team from '@/components/Team';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { BackToTop } from '@/components/BackToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-background custom-scrollbar">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Team />
        <FAQ />
        <Contact />
        <MapSection />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
