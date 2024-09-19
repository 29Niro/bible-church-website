'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerOpacity, setHeaderOpacity] = useState('bg-blue-800');
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHeaderOpacity('bg-blue-800/80');
        setShowScrollToTop(true);
      } else {
        setHeaderOpacity('bg-blue-800');
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 py-4 z-40 transition-opacity duration-300 text-white ${headerOpacity}`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Meedpar Aalayam</h1>
          <button
            className="block md:hidden px-2 py-1 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
          <nav
            className={`fixed top-0 right-0 w-3/4 h-full bg-blue-800/90 text-white z-30 transition-transform transform ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            } md:static md:flex md:items-center md:space-x-6 md:w-auto md:bg-transparent md:translate-x-0`}
          >
            <div className="md:hidden flex justify-end p-4">
              <button
                className="text-white"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-4 px-6 py-16 md:py-0">
              <li>
                <a
                  href="#hero"
                  className="hover:underline"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document
                      .querySelector('#hero')
                      .scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:underline"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document
                      .querySelector('#about')
                      .scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="hover:underline"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document
                      .querySelector('#programs')
                      .scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:underline"
                  onClick={() => {
                    setIsMenuOpen(false);
                    document
                      .querySelector('#contact')
                      .scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {showScrollToTop && (
        <button
          className="fixed bottom-4 right-4 z-50 bg-blue-800 text-white p-3 rounded-full border border-white shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 15l7-7 7 7"
            ></path>
          </svg>
        </button>
      )}
    </>
  );
}
