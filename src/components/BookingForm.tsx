import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from "react-i18next";

const BookingForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    guests: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: t('booking.form.success'),
      description: t('booking.form.successMessage'),
    });
    setFormData({ name: "", email: "", date: "", guests: "", message: "" });
  };

  return (
    <section className="py-20 bg-white" id="booking">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-4xl font-light text-cafe-brown text-center mb-12">{t('booking.title')}</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              placeholder={t('booking.form.name')}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              type="email"
              placeholder={t('booking.form.email')}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <Input
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
            <Input
              type="number"
              placeholder={t('booking.form.guests')}
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              required
            />
          </div>
          <Textarea
            placeholder={t('booking.form.message')}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="h-32"
            required
          />
          <Button 
            type="submit"
            className="w-full bg-cafe-sage hover:bg-cafe-sage/90 text-white py-6 text-lg"
          >
            {t('booking.form.submit')}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;