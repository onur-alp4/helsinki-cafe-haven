import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  
  return (
    <div className="relative h-screen flex items-center justify-center bg-cafe-beige">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-50" />
      <div className="relative z-10 text-center space-y-6 animate-fade-up">
        <h1 className="text-6xl font-light text-cafe-brown">{t('hero.title')}</h1>
        <p className="text-xl text-cafe-brown/80 max-w-lg mx-auto">
          {t('hero.subtitle')}
        </p>
        <Button 
          className="bg-cafe-sage hover:bg-cafe-sage/90 text-white px-8 py-6 text-lg"
          onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {t('hero.cta')}
        </Button>
      </div>
    </div>
  );
};

export default Hero;