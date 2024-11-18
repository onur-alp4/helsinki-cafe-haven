const Contact = () => {
  return (
    <section className="py-20 bg-cafe-beige" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-light text-cafe-brown text-center mb-12">Visit Us</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-cafe-brown mb-2">Address</h3>
              <p className="text-gray-600">Helsinkinkatu 123<br />00100 Helsinki</p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-cafe-brown mb-2">Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 8:00 - 18:00<br />
                Saturday: 9:00 - 17:00<br />
                Sunday: 10:00 - 16:00
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium text-cafe-brown mb-2">Contact</h3>
              <p className="text-gray-600">
                Phone: +358 40 123 4567<br />
                Email: info@cafehelena.fi
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