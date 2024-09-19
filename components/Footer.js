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
            contact@biblecollegechurch.com
          </a>
        </p>
        <p className="text-sm">
          <a href="tel:+1234567890" className="underline">
            +123 456 7890
          </a>
        </p>
      </div>
    </footer>
  );
}
