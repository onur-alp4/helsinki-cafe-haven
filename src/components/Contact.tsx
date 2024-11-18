import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-cafe-beige" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-cafe-brown text-center mb-12">{t('contact.title')}</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-cafe-brown mb-2">{t('contact.address')}</h3>
              <p className="text-gray-600">Helsinkinkatu 123<br />00100 Helsinki</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-cafe-brown mb-2">{t('contact.hours')}</h3>
              <p className="text-gray-600">
                {t('contact.weekdays')}<br />
                {t('contact.saturday')}<br />
                {t('contact.sunday')}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-cafe-brown mb-2">{t('contact.phone')}</h3>
              <p className="text-gray-600">
                {t('contact.phone')}: +358 40 123 4567<br />
                {t('contact.email')}: info@cafehelena.fi
              </p>
            </div>
          </div>
          <div className="h-[400px] bg-gray-200 rounded-lg">
            {/* Map placeholder - would integrate with Google Maps */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;