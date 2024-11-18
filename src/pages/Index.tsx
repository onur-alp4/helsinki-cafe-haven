import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import BookingForm from "@/components/BookingForm";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-cafe-cream">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Services />
      <Contact />
      <BookingForm />
    </div>
  );
};

export default Index;