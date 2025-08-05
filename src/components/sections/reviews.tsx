import React from 'react';
import { Star } from 'lucide-react';

const Reviews = () => {
  return (
    <section id="reviews" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <br />
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Reviews</h2>
          <p className="text-xl text-gray-600">What our satisfied clients say about us</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
            I have been in O beauty nails couple of times for designed gel nails. I am so happy with the quality of their work. I can highly recommend.            </p>
            <div className="font-semibold text-gray-900">- Ozde Sueslue</div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
            The best Manicure, Pedicure and Lashes in whole zurich! The whole team is very kind and friendly. I will never change the Studio ❤️.
            </p>
            <div className="font-semibold text-gray-900">- Giulia Del Grosso</div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-100">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="text-gray-600 mb-4">
            Great pedicures; it was a relaxing “me time” with a massage chair. I also liked the fact that they offer coffee or soft drink to customers. Next time will try also their manicures.
            </p>
            <div className="font-semibold text-gray-900">- Tugce Z. Ragazzini</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews; 