import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "Café Dining",
      description: "Join us for breakfast, lunch, or coffee and pastries in our cozy café space.",
      image: "/placeholder.svg"
    },
    {
      title: "Catering Services",
      description: "Let us bring our Nordic flavors to your special events and corporate functions.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-cafe-brown text-center mb-12">Our Services</h2>
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