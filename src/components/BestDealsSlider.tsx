// BestDealsSlider component code here
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaStar, FaPhoneAlt } from 'react-icons/fa';
import Modal from './Modal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Deal {
  image: string;
  title: string;
  duration: string;
  itinerary: string;
  oldPrice: string;
  newPrice: string;
  save: string;
  rating: number;
  reviews: string;
}

const deals: Deal[] = [
  {
    image: '/images/deals/c1-2.avif',
    title: 'Ultimate Bali Adventure | From Sun-Kissed Shores To Rugged Peaks',
    duration: '7 days & 6 nights',
    itinerary: '2D Kuta • 5D Ubud',
    oldPrice: '₹54,862',
    newPrice: '₹41,250',
    save: '₹13,612',
    rating: 4.8,
    reviews: '878',
  },
  {
    image: '/images/deals/c1.avif',
    title: 'Eternal Bali | Discovering Seashore Temples & Island Wonders',
    duration: '8 days & 7 nights',
    itinerary: '3D Ubud • 5D Kuta',
    oldPrice: '₹64,462',
    newPrice: '₹47,750',
    save: '₹16,712',
    rating: 4.7,
    reviews: '1K',
  },
  {
    image: '/images/deals/c3-2.avif',
    title: 'Bali Retreat | Round Trip Flight Inclusive Deal From Delhi',
    duration: '7 days & 6 nights',
    itinerary: '3D Ubud • 3D Kuta • 1D Denpasar',
    oldPrice: '₹85,400',
    newPrice: '₹65,000',
    save: '₹20,400',
    rating: 4.7,
    reviews: '1.2K',
  },
];

const BestDealsSlider: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState<Deal | null>(null);

  const openModal = (deal: Deal) => {
    setSelectedDeal(deal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDeal(null);
  };

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    closeModal();
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Best Deals</h2>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
        navigation
        pagination={{ clickable: true }}
        className="pb-10"
      >
        {deals.map((deal, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded font-semibold">
                  Save {deal.save}
                </div>
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{deal.duration}</p>
                <h3 className="font-semibold text-gray-800 text-base leading-snug mb-1">
                  {deal.title}
                </h3>
                <p className="text-sm text-gray-700 mb-2">{deal.itinerary}</p>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full font-semibold">
                    🌈 MONSOON SALE
                  </span>
                </div>

                <div className="text-sm mb-1">
                  <span className="line-through text-gray-400 mr-2">{deal.oldPrice}</span>
                  <span className="text-lg font-bold text-green-600">{deal.newPrice}</span>{' '}
                  <span className="text-xs text-gray-500">/Adult</span>
                </div>

                <div className="flex items-center text-sm text-green-600 mt-1 mb-4">
                  <FaStar className="mr-1" /> {deal.rating} ({deal.reviews})
                </div>

                <button
                  onClick={() => openModal(deal)}
                  className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white py-3 rounded-lg text-sm font-medium hover:bg-orange-600 transition"
                >
                  <FaPhoneAlt /> Request Callback
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal isOpen={isModalOpen} onClose={handleClose}>
        {!isSubmitted ? (
          <>
            <h3 className="text-xl font-semibold mb-4">Request Callback</h3>
            {selectedDeal && (
              <p className="mb-4">
                You are requesting a callback for: <strong>{selectedDeal.title}</strong>
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
              onClick={handleClose}
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

export default BestDealsSlider;
