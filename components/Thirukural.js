// components/ThirukkuralQuote.js
'use client';

import { useEffect, useState } from 'react';

export default function ThirukkuralQuote() {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://thurukural.edustutor.com/quote-of-the-day')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch quote');
        }
        return res.json();
      })
      .then((data) => setQuote(data))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!quote) return <p>Loading...</p>;

  return (
    <section>
      {console.log(quote)}
      <h2>திருக்குறள் - இன்றைய குறள்</h2>
      <p>
        <strong>குறள்:</strong> {quote.quote}
      </p>
      <p>
        <strong>English:</strong> {quote.meaning}
      </p>
    </section>
  );
}
