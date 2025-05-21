'use client';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} Bible College Church. All rights
          reserved.
        </p>
        <p className="text-sm mb-2">123 Church Road, City Name, Country</p>
        <p className="text-sm mb-2">
          <a href="mailto:contact@biblecollegechurch.com" className="underline">
            29niro@gmail.com
          </a>
        </p>
        <p className="text-sm">
          <a href="tel:+94775139934" className="underline">
            +94 775139934
          </a>
        </p>
      </div>
    </footer>
  );
}
