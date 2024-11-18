import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-cafe-beige">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-50" />
      <div className="relative z-10 text-center space-y-6 animate-fade-up">
        <h1 className="text-6xl font-light text-cafe-brown">Café Helena</h1>
        <p className="text-xl text-cafe-brown/80 max-w-lg mx-auto">
          A cozy corner in Helsinki serving artisanal coffee and Nordic-inspired cuisine
        </p>
        <Button 
          className="bg-cafe-sage hover:bg-cafe-sage/90 text-white px-8 py-6 text-lg"
          onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View Menu
        </Button>
      </div>
    </div>
  );
};

export default Hero;