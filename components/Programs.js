'use client';

import { FaBible, FaUsers, FaHandsHelping } from 'react-icons/fa'; // Importing icons

export default function Programs() {
  return (
    <section id="programs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl font-bold mb-12 text-center text-gray-800"
          data-aos="fade-left"
        >
          Programs & Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Bible Study Program */}
          <div
            className="p-8 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105"
            data-aos="zoom-in"
          >
            <div className="flex justify-center mb-4">
              <FaBible className="text-4xl text-blue-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Bible Study
            </h3>
            <p className="text-gray-600 text-center">
              Join our weekly Bible study sessions to dive deeper into the Word
              of God.
            </p>
          </div>

          {/* Leadership Training Program */}
          <div
            className="p-8 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="flex justify-center mb-4">
              <FaUsers className="text-4xl text-green-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Leadership Training
            </h3>
            <p className="text-gray-600 text-center">
              We offer courses to train the next generation of church leaders.
            </p>
          </div>

          {/* Community Outreach Program */}
          <div
            className="p-8 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="flex justify-center mb-4">
              <FaHandsHelping className="text-4xl text-red-600" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Community Outreach
            </h3>
            <p className="text-gray-600 text-center">
              Be part of our outreach programs and make a difference in the
              community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
