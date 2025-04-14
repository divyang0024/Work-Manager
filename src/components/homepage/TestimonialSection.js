"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO, ABC Inc.",
    message:
      "This app transformed how I manage my tasks, making everything seamless and intuitive.",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Manager, XYZ Corp.",
    message:
      "The task categorization feature keeps my projects organized and stress-free.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "CTO, PQR Ltd.",
    message:
      "Due date reminders ensure I never miss a deadline. Highly recommend this app!",
  },
];

const TestimonialSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
          }
          50% {
            box-shadow: 0 0 8px 3px rgba(255, 255, 255, 0.6);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
          }
        }
        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
        .animate-pulse-glow:hover {
          animation: pulseGlow 1.2s ease-in-out infinite;
        }
      `}</style>
      <div className="bg-black py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.15),transparent_60%)] opacity-50 animate-pulse"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-white mb-10 sm:mb-12 animate-slide-in">
            What Our Users Say
          </h2>
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-4 group">
      <div className="bg-blue-600 rounded-xl p-6 sm:p-8 flex flex-col h-full border border-blue-500 hover:bg-blue-700 hover:scale-105 transition-all duration-300 animate-pulse-glow cursor-pointer animate-slide-in">
        <p className="text-sm sm:text-base text-white/80 mb-4 flex-grow">
          {testimonial.message}
        </p>
        <div className="flex items-center mt-4">
          <div className="mr-4">
            <div className="h-12 w-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold group-hover:scale-110 transition-transform duration-300">
              {testimonial.name.charAt(0)}
            </div>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              {testimonial.name}
            </h3>
            <p className="text-sm sm:text-base text-white/70">
              {testimonial.designation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
