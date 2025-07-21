import React from 'react';

const PromoBanner: React.FC = () => {
  return (
    <section className="px-4 md:px-20 py-8">
      <div className="bg-gray-100 rounded-xl px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between text-gray-800 shadow-sm">
        <div>
          <h3 className="text-lg md:text-xl font-semibold mb-1">
            Bali Tour Packages | Upto 40% Off
          </h3>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl truncate">
            Looking for the ultimate tropical adventure? Thrillophilia invites you to explore the ‘Island of Gods’ with our exclusive Bali packages. At...
          </p>
        </div>
        <a
          href="#"
          className="mt-4 md:mt-0 font-semibold text-sm text-gray-700 hover:text-blue-600 transition whitespace-nowrap"
        >
          Read More
        </a>
      </div>
    </section>
  );
};

export default PromoBanner;
