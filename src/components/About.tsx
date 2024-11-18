import { Card } from "@/components/ui/card";

const About = () => {
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
            <h2 className="text-4xl font-light text-cafe-brown">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to Café Helena, where Nordic traditions meet modern gastronomy. Founded by Helena Virtanen in 2020, 
              our café has become a beloved spot in Helsinki's vibrant food scene.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We take pride in sourcing local ingredients and creating seasonal menus that reflect the pure flavors of Finnish cuisine.
              Whether you're joining us for a morning coffee or planning a catered event, we bring the same dedication to quality and service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;