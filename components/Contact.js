'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center" data-aos="fade-up">
          Contact Us
        </h2>
        <div className="text-center mb-8">
          <p data-aos="fade-up" data-aos-delay="200">
            123 Church Road, City Name, Country
          </p>
          <p data-aos="fade-up" data-aos-delay="400">
            Email: contact@biblecollegechurch.com
          </p>
          <p data-aos="fade-up" data-aos-delay="600">
            Phone: +123 456 7890
          </p>
        </div>
        <div
          className="w-full h-80 md:h-96 rounded-lg overflow-hidden"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.892442926493!2d79.89961161569292!3d8.980937656119073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afdd9ebdac62f1d%3A0xea64e2bdcac7774b!2sEmil%20Nager%2C%20Mannar!5e0!3m2!1sen!2slk!4v1726717132900!5m2!1sen!2slk"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
