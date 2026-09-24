"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    img: "/images/testimonial-1.png",
    name: "Rachel Adams",
    role: "Homeowner, Maple Grove",
    text: "We had put off the kitchen for years because we thought it would eat our savings. Woodora drew a plan that kept the sink and the stove where they were, and that one change cut the cost right down. The fitters were polite, quiet, and gone in six days. I keep opening drawers just for the fun of it.",
  },
  {
    img: "/images/testimonial-2.png",
    name: "Tom Bennett",
    role: "Father of three, Oakfield",
    text: "Three kids destroy kitchens. Ours has taken two years of cereal, paint and science experiments and still looks new. The designer talked us out of a white worktop on day one and she was right. The quote never moved from the number we agreed, which after stories from friends felt like a miracle.",
  },
  {
    img: "/images/testimonial-3.png",
    name: "Laura Nguyen",
    role: "Bakery Owner, Cedar Court",
    text: "They fit our shop kitchen around trading hours, working overnight so we never closed a single day. The storage plan they drew means two people can work back to back without tripping over each other. Smart Care came out last month, tightened a hinge, charged us nothing.",
  },
];

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  return (
    <div className="max-w-3xl mx-auto text-center px-4">
      <Quote size={44} className="text-[#c6904f] mx-auto mb-8" strokeWidth={1.4} />
      <div key={index}>
        <p className="text-xl lg:text-2xl font-heading font-normal text-ink leading-relaxed">
          “{t.text}”
        </p>
        <div className="mt-9 flex items-center justify-center gap-4">
          <img
            src={t.img}
            alt={t.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-[#c6904f]/40"
          />
          <div className="text-left">
            <p className="font-heading font-semibold text-ink">{t.name}</p>
            <p className="text-sm text-body-text">{t.role}</p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          aria-label="Previous testimonial"
          onClick={() => setIndex((index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
          className="w-11 h-11 rounded-full border border-[#d9d2c0] flex items-center justify-center text-forest hover:bg-[#c6904f] hover:border-[#c6904f] hover:text-white transition-all"
        >
          <ArrowLeft size={16} />
        </button>
        <div className="flex gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-7 bg-[#c6904f]" : "w-2 bg-[#d9d2c0]"
              }`}
            />
          ))}
        </div>
        <button
          aria-label="Next testimonial"
          onClick={() => setIndex((index + 1) % TESTIMONIALS.length)}
          className="w-11 h-11 rounded-full border border-[#d9d2c0] flex items-center justify-center text-forest hover:bg-[#c6904f] hover:border-[#c6904f] hover:text-white transition-all"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
