import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/placeholder.svg" alt="Café Helena" className="h-8 w-8" />
            <span className="text-xl font-light text-cafe-brown">Café Helena</span>
          </Link>
          
          <NavigationMenu>
            <NavigationMenuList className="hidden md:flex space-x-8 items-center">
              <NavigationMenuItem>
                <Link 
                  to="/#about" 
                  className="text-cafe-brown/80 hover:text-cafe-brown transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t('nav.about')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                  to="/#contact" 
                  className="text-cafe-brown/80 hover:text-cafe-brown transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {t('nav.contact')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <LanguageSwitcher />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;