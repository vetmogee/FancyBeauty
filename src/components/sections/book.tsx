import React from 'react';

const Book = () => {
  return (
    <section id="book" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-pink-100">
          {/* First row: Book with WhatsApp */}
          <div className="grid md:grid-cols-1 gap-8 items-center ">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Book with WhatsApp</h3>
              <p className="text-gray-600 mb-4">Fastest way to book your appointment!</p>
            </div>
          </div>
          {/* Second row: Schlieren and Zurich */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Shlieren */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Schlieren</h3>
              <p className="text-gray-600 mb-4">Book your appointment at our Schlieren location.</p>
              <a
                href="https://wa.me/41779811788"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-10 rounded-full shadow transition text-xl"
              >
                Book Schlieren
              </a>
            </div>
            {/* Zurich */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Zurich</h3>
              <p className="text-gray-600 mb-4">Book your appointment at our Zurich location.</p>
              <a
                href="https://wa.me/41782002699"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-10 rounded-full shadow transition text-xl"
              >
                Book Zurich
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
