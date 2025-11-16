import React from "react";
import { assets } from "../assets/assets"; // Assets are correctly imported

const testimonials = [
  {
    id: 1,
    name: "Aisha Sharma", // Young Adult Woman
    // ---------------------------------------------
    // Using the imported image asset: assets.aisha
    image: assets.aisha,
    // ---------------------------------------------
    rating: 4,
    // Feedback in Nepali
    feedback:
    "The booking experience was seamless! The venue options were elegant and well-organized, making it easy to find exactly what I needed for our event.",
  },
  {
    id: 2,
    name: "Ramesh Thapa", // Older Man
    // ---------------------------------------------
    // Using the imported image asset: assets.ramesh
    image: assets.ramesh,
    // ---------------------------------------------
    rating: 4,
    // Feedback in English
    feedback:
      "मैले धेरै बुकिंग प्लेटफर्महरू प्रयोग गरेको छु, तर यस साइटले प्रदान गर्ने व्यक्तिगत अनुभव र विवरणमा ध्यान अरु कुनैसँग तुलना गर्न सकिँदैन। तिनीहरूको छानिएका स्थलहरूको चयन अतुलनीय छ।",
  },
  {
    id: 3,
    name: "Pooja Karki", // Young Woman
    // ---------------------------------------------
    // Using the imported image asset: assets.pooja
    image: assets.pooja,
    // ---------------------------------------------
    rating: 5,
    // Feedback in Nepali
    feedback:
      "हामीले बुक गरेको स्थल मन पर्यो! टोली एकदमै व्यावसायिक थियो, र सम्पूर्ण प्रक्रिया सरल र तनावमुक्त भयो।",
  },
  {
    id: 4,
    name: "Sandeep Gurung", // Gen Z Man
    // ---------------------------------------------
    // Using the imported image asset: assets.sandeep
    image: assets.sandeep,
    // ---------------------------------------------
    rating: 5,
    // Feedback in English
    feedback:
      "A wonderful experience from start to finish. I highly recommend using this platform for any special occasion or celebration in Nepal.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-[#F8F8F5]">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-[#2C2C2C]">
          What Our Guests Say
        </h2>
        <p className="text-[#6B6B6B] mt-3 max-w-2xl mx-auto">
          Discover why our clients consistently choose us for their exclusive
          and luxurious celebrations across **Pokhara**.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-[#B9AFA1] rounded-2xl shadow-sm p-6 flex flex-col gap-4 hover:shadow-lg transition-all duration-300"
          >
            {/* Person Info */}
            <div className="flex items-center gap-4">
              {/* Image source now uses the specific asset */}
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg text-[#2C2C2C]">
                  {item.name}
                </h3>
                {/* Rating Stars */}
                <div className="flex gap-1 mt-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      className={`text-lg ${
                        i < item.rating ? "text-[#D4AF37]" : "text-gray-300"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Feedback */}
            <p className="text-[#4B4B4B] leading-relaxed">{item.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;