'use client';

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            data-aos="fade-right"
          >
            About Us
          </h2>
          <p
            className="text-lg md:text-xl mb-4"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Bible College Church is a place for worship and learning. Our
            mission is to spread the Word and educate the next generation of
            leaders.
          </p>
          <p
            className="text-lg md:text-xl"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            We offer programs that help develop spiritual growth, leadership
            skills, and a deeper understanding of the Bible.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2" data-aos="fade-left">
          <Image
            src="https://res.cloudinary.com/dregpcfhh/image/upload/v1726721108/bible-church-website/bible.jpg"
            alt="Bible Study"
            width={800}
            height={600}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
