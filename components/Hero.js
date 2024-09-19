'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://res.cloudinary.com/dregpcfhh/image/upload/v1726721108/bible-church-website/church-1.jpg',
    'https://res.cloudinary.com/dregpcfhh/image/upload/v1726721108/bible-church-website/bible.jpg',
    'https://res.cloudinary.com/dregpcfhh/image/upload/v1726721108/bible-church-website/church-2.jpg',
    'https://res.cloudinary.com/dregpcfhh/image/upload/v1726721108/bible-church-website/hand.jpg',
    
  ];

  useEffect(() => {
    AOS.init({ duration: 1200 });

    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="hero"
      data-aos="fade-up"
      className="hero h-screen flex flex-col justify-center items-center bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        transition: 'background-image 1s ease-in-out',
      }}
    >
      <div className="bg-black/50 p-6 rounded-md text-center w-full max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4" data-aos="fade-up">
          Welcome to Meedpar Aalayam
        </h1>
        <p
          className="text-md md:text-lg mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Join us for worship, study, and community service.
        </p>
        <a
          href="#about"
          className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
