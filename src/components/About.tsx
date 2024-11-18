import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="/placeholder.svg" 
              alt="Helena in her café" 
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-light text-cafe-brown">{t('about.title')}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('about.description2')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;