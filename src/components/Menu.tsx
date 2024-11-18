import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();

  const menuItems = [
    {
      category: t('menu.breakfast'),
      items: [
        { name: "Nordic Breakfast Bowl", price: "€12", description: "Organic oats, forest berries, honey" },
        { name: "Smoked Salmon Toast", price: "€14", description: "Rye bread, dill cream cheese" },
      ]
    },
    {
      category: t('menu.lunch'),
      items: [
        { name: "Forest Mushroom Soup", price: "€10", description: "Wild mushrooms, herbs, cream" },
        { name: "Open-Faced Shrimp", price: "€16", description: "Hand-peeled shrimp, egg, mayonnaise" },
      ]
    }
  ];

  return (
    <section className="py-20 bg-cafe-beige" id="menu">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-cafe-brown text-center mb-12">{t('menu.title')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {menuItems.map((category) => (
            <Card key={category.category} className="p-6 bg-white/80 backdrop-blur">
              <h3 className="text-2xl font-light text-cafe-brown mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-medium text-cafe-brown">{item.name}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                    <span className="text-cafe-rust font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;