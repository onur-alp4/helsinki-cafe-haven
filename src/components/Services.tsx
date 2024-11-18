import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      title: t('services.cafe.title'),
      description: t('services.cafe.description'),
      image: "/placeholder.svg"
    },
    {
      title: t('services.catering.title'),
      description: t('services.catering.description'),
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-cafe-brown text-center mb-12">{t('services.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-light text-cafe-brown mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;