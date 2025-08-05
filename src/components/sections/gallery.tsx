import React from 'react';

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <br />
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <p className="text-xl text-gray-600 mb-8">Coming soon - showcase of our beautiful work for now at:</p>
          <br />
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://www.instagram.com/fancyobeauty.nails?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-pink-200 bg-white hover:bg-pink-50 transition text-gray-700 hover:underline focus:underline outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-pink-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm9.75 2.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 8.25A3.75 3.75 0 1 0 12 15.75 3.75 3.75 0 0 0 12 8.25z" />
              </svg>
              <span>@fancyobeauty.nails</span>
            </a>
            <a
              href="https://www.instagram.com/obeauty.nails?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-lg border border-purple-200 bg-white hover:bg-purple-50 transition text-gray-700 hover:underline focus:underline outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-purple-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3h9A4.5 4.5 0 0 1 21 7.5v9A4.5 4.5 0 0 1 16.5 21h-9A4.5 4.5 0 0 1 3 16.5v-9A4.5 4.5 0 0 1 7.5 3zm9.75 2.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM12 8.25A3.75 3.75 0 1 0 12 15.75 3.75 3.75 0 0 0 12 8.25z" />
              </svg>
              <span>@obeauty.nails</span>
            </a>
          </div>
            <br />
        </div>
      </div>
    </section>
  );
};

export default Gallery; 