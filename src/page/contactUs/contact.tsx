import Header from "../../app/_layout";
import HeroSection from "../../components/HeroSection";
import ChaptersSection from '../../components/ChaptersSection';
import LearnJapaneseSection from "../../components/LearnJapaneseSection";
import ContactForm from "../../components/ContactForm";
import WhatsAppBanner from "../../components/WhatsAppBanner";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ChaptersSection />
        <LearnJapaneseSection />
        <ContactForm />
        <WhatsAppBanner />
      </main>
    </div>
  );
};

export default Index;
