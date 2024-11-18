import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fi' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="text-cafe-brown/80 hover:text-cafe-brown"
    >
      {i18n.language === 'en' ? 'FI' : 'EN'}
    </Button>
  );
};

export default LanguageSwitcher;