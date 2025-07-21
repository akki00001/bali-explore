import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaStar, FaPhoneAlt } from 'react-icons/fa';
import Modal from './Modal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const familyDeals = [
  {
    image: '/images/family/c1-1.avif',
    title: 'Bali Family Explorer | Temples, Markets & Beaches',
    duration: '6 days & 5 nights',
    itinerary: '3D Kuta • 3D Ubud',
    oldPrice: '₹52,800',
    newPrice: '₹38,600',
    save: '₹14,200',
    rating: 4.8,
    reviews: '694',
  },
  {
    image: '/images/family/c2-1.avif',
    title: 'Fun-Filled Family Trip To Bali | Dolphin Watching & Island Hopping',
    duration: '7 days & 6 nights',
    itinerary: '3D Ubud • 3D Lovina • 1D Sanur',
    oldPrice: '₹59,900',
    newPrice: '₹43,800',
    save: '₹16,100',
    rating: 4.9,
    reviews: '812',
  },
  {
    image: '/images/family/c3-1.avif',
    title: 'Magical Bali With Family | Explore, Eat & Enjoy Together',
    duration: '5 days & 4 nights',
    itinerary: '2D Kuta • 3D Ubud',
    oldPrice: '₹48,500',
    newPrice: '₹35,000',
    save: '₹13,500',
    rating: 4.7,
    reviews: '628',
  },
];

const FamilyToursSlider: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDeal, setSelectedDeal] = useState<typeof familyDeals[0] | null>(null);

  const openModal = (deal: typeof familyDeals[0]) => {
    setSelectedDeal(deal);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedDeal(null);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('Thank you for your request! We will contact you soon.');
    closeModal();
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-yellow-50">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Family Favourite Tours 👨‍👩‍👧‍👦</h2>

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
        {familyDeals.map((deal, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-md">
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.title}
                  className="w-full h-52 object-cover"
                />
                <div className="absolute top-2 left-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded font-semibold">
                  Family Favourite
                </div>
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-500 mb-1">{deal.duration}</p>
                <h3 className="font-semibold text-gray-800 text-base leading-snug mb-1">
                  {deal.title}
                </h3>
                <p className="text-sm text-gray-700 mb-2">{deal.itinerary}</p>

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
                  className="w-full flex items-center justify-center gap-2 bg-yellow-500 text-white py-3 rounded-lg text-sm font-medium hover:bg-yellow-600 transition"
                >
                  <FaPhoneAlt /> Request Callback
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
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
              className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </section>
  );
};

export default FamilyToursSlider;
