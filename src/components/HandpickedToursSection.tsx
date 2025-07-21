import React, { useState } from 'react';
import { FaStar, FaPhoneAlt } from 'react-icons/fa';
import Modal from './Modal';

const tourPackages = [
  {
    id: 1,
    title: 'Escape To Bali | Round Trip Flight Inclusive Deal From Delhi',
    duration: '6 days & 5 nights',
    rating: 4.8,
    reviews: 925,
    itinerary: '2D Ubud • 4D Kuta',
    oldPrice: '₹1,10,000',
    newPrice: '₹77,000',
    save: '₹33,000',
    tag: 'Flights Included',
    imageAvif: '/images/packages/c1-1.avif',
    imageWebp: '/images/packages/c1-1.webp',
    imageFallback: '/images/packages/c1-1.jpg',
  },
  {
    id: 2,
    title: 'Bali Couple Special | From Sacred Temples To Serene Shores',
    duration: '5 days & 4 nights',
    rating: 4.8,
    reviews: 742,
    itinerary: '2D Ubud • 2D Kuta • 1D Ubud',
    oldPrice: '₹41,700',
    newPrice: '₹27,800',
    save: '₹13,900',
    tag: '',
    imageAvif: '/images/packages/c1-2.avif',
    imageWebp: '/images/packages/c1-2.webp',
    imageFallback: '/images/packages/c1-2.jpg',
  },
  {
    id: 3,
    title: 'Romantic Escape To Bali | From Hills To Horizon',
    duration: '6 days & 5 nights',
    rating: 4.7,
    reviews: 906,
    itinerary: '2D Ubud • 4D Kuta',
    oldPrice: '₹46,575',
    newPrice: '₹34,500',
    save: '₹12,075',
    tag: '216 booked in last 1 week',
    imageAvif: '/images/packages/c1-3.avif',
    imageWebp: '/images/packages/c1-3.webp',
    imageFallback: '/images/packages/c1-3.jpg',
  },
];

const HandpickedToursSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<typeof tourPackages[0] | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = (pkg: typeof tourPackages[0]) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
    setIsSubmitted(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Staff <span className="text-orange-500">Handpicked ✨</span>
        </h2>
        <p className="text-gray-500 mt-2">Curated with expertise</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tourPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="rounded-2xl overflow-hidden shadow-lg relative"
          >
            <picture>
              <source srcSet={pkg.imageAvif} type="image/avif" />
              <source srcSet={pkg.imageWebp} type="image/webp" />
              <img
                src={pkg.imageFallback}
                alt={pkg.title}
                className="w-full h-64 object-cover rounded-2xl"
              />
            </picture>

            {/* Overlay */}
            <div className="bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 h-full flex flex-col justify-end text-white absolute inset-0 rounded-2xl">
              {pkg.tag && (
                <div className="absolute top-3 right-3 bg-orange-500 text-xs font-semibold px-3 py-1 rounded-full">
                  {pkg.tag}
                </div>
              )}

              <div className="text-sm mb-1 flex justify-between">
                <span>{pkg.duration}</span>
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" /> {pkg.rating} ({pkg.reviews})
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-1">{pkg.title}</h3>
              <p className="text-xs text-white/90 mb-2">{pkg.itinerary}</p>

              <div className="flex items-center flex-wrap gap-2 text-sm">
                <span className="text-xl font-bold text-white">{pkg.newPrice}</span>
                <span className="line-through opacity-70">{pkg.oldPrice}</span>
                <span className="bg-white text-gray-800 text-xs px-2 py-1 rounded font-semibold">
                  SAVE {pkg.save}
                </span>
              </div>

              <div className="mt-4 bg-white rounded-md overflow-hidden flex items-center text-black">
                <div className="bg-white px-4 py-3 border-r">
                  <FaPhoneAlt className="text-purple-600" />
                </div>
                <button
                  onClick={() => openModal(pkg)}
                  className="flex-1 py-3 px-4 text-sm font-medium hover:bg-gray-100"
                >
                  Request Callback
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {!isSubmitted ? (
          <>
            <h3 className="text-xl font-semibold mb-4">Request Callback</h3>
            {selectedPackage && (
              <p className="mb-4">
                You are requesting a callback for: <strong>{selectedPackage.title}</strong>
              </p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </>
        ) : (
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Thank You!</h3>
            <p className="mb-4">Your request has been received. We will contact you shortly.</p>
            <div className="animate-pulse p-4 bg-white rounded-lg shadow-inner border border-gray-300">
              <svg
                className="mx-auto mb-2 h-12 w-12 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
              </svg>
              <p className="text-green-600 font-semibold">Submission Successful</p>
            </div>
            <button
              onClick={closeModal}
              className="mt-6 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              Close
            </button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default HandpickedToursSection;
