import { Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  rating: number;
  comment: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria Anderson",
    role: "Event Manager",
    company: "Nordic Events Oy",
    companyLogo: "/placeholder.svg",
    rating: 5,
    comment: "The catering service exceeded our expectations. The attention to detail and Nordic-inspired dishes were perfect for our corporate event.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Mikko Virtanen",
    role: "CEO",
    company: "Tech Startup Helsinki",
    companyLogo: "/placeholder.svg",
    rating: 5,
    comment: "Regular customer for our office meetings. The quality is consistently excellent, and the service is always professional.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Sofia Korhonen",
    role: "Wedding Planner",
    company: "Dream Weddings Finland",
    companyLogo: "/placeholder.svg",
    rating: 5,
    comment: "Their catering made our wedding events truly special. The presentation was beautiful and the taste was extraordinary.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${
            index < rating ? "fill-cafe-brown text-cafe-brown" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-cafe-beige">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-light text-cafe-brown text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white/80 backdrop-blur animate-fade-up">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-cafe-brown">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <StarRating rating={testimonial.rating} />
                <p className="mt-4 text-gray-700">{testimonial.comment}</p>
                <div className="mt-6 flex items-center space-x-3">
                  <img
                    src={testimonial.companyLogo}
                    alt={testimonial.company}
                    className="h-8 w-8 object-contain"
                  />
                  <span className="text-sm text-gray-600">{testimonial.company}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;