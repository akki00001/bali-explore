// src/components/HeroSlider.tsx
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Modal from './Modal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    title: 'Bali Retreat | Round Trip Flight Inclusive Deal From Delhi',
    subtitle: '7 days & 6 nights | 3D Ubud • 3D Kuta • 1D Denpasar',
    oldPrice: '85,400',
    newPrice: '65,000',
    bgImage: '/images/hero/01.webp',
    badge: 'Monsoon Sale',
  },
  {
    title: 'Bali Retreat | Round Trip Flight Inclusive Deal From Delhi',
    subtitle: '7 days & 6 nights | 3D Ubud • 3D Kuta • 1D Denpasar',
    oldPrice: '85,400',
    newPrice: '65,000',
    bgImage: '/images/hero/02.webp',
    badge: 'Monsoon Sale',
  },
  {
    title: 'Bali Retreat | Round Trip Flight Inclusive Deal From Delhi',
    subtitle: '7 days & 6 nights | 3D Ubud • 3D Kuta • 1D Denpasar',
    oldPrice: '85,400',
    newPrice: '65,000',
    bgImage: '/images/hero/03.webp',
    badge: 'Monsoon Sale',
  },
];

const HeroSlider: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlide, setSelectedSlide] = useState<typeof slides[0] | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = (slide: typeof slides[0]) => {
    setSelectedSlide(slide);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSlide(null);
    setIsSubmitted(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="relative">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
        pagination={{ clickable: true }}
        loop
        className="h-screen"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            >
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">
                <h1 className="text-3xl md:text-5xl font-bold text-white max-w-4xl">{slide.title}</h1>
                <p className="text-lg text-white mt-4">{slide.subtitle}</p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
                  <div className="text-white text-lg">
                    <span className="line-through opacity-60 mr-2">INR {slide.oldPrice}</span>
                    <span className="text-2xl font-bold text-yellow-400">INR {slide.newPrice}</span>{' '}
                    <span className="text-sm">/Adult</span>
                  </div>
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    🌈 {slide.badge}
                  </span>
                </div>
                <button
                  onClick={() => openModal(slide)}
                  className="mt-6 bg-orange-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition"
                >
                  Connect With An Expert
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev text-white text-2xl absolute top-1/2 left-4 z-10 cursor-pointer">
          <HiOutlineArrowNarrowLeft />
        </div>
        <div className="swiper-button-next text-white text-2xl absolute top-1/2 right-4 z-10 cursor-pointer">
          <HiOutlineArrowNarrowRight />
        </div>
      </Swiper>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {!isSubmitted ? (
          <>
            <h3 className="text-xl font-semibold mb-4">Connect With An Expert</h3>
            {selectedSlide && (
              <p className="mb-4">
                You are requesting to connect for: <strong>{selectedSlide.title}</strong>
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

export default HeroSlider;

