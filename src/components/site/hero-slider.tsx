"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SLIDES = [
  {
    img: "/images/banner-1.jpg",
    alt: "Dark green modular kitchen with brass pendant lights",
    heading: ["Design Your Kitchen", "With Our Experts"],
    text: "Tell us how you cook, where you gather and what drives you crazy about the current kitchen. Our designers turn that into a modular kitchen that fits your room and your budget, from the first sketch to the final fitting.",
  },
  {
    img: "/images/project-36.jpg",
    alt: "Warm wooden kitchen with open shelving",
    heading: ["Smart Storage In", "Every Spare Corner"],
    text: "Deep drawers instead of dark cupboards. Pull out pantries that use every inch. We plan storage around your pots, your appliances and the way your family actually moves through the room.",
  },
  {
    img: "/images/project-33.jpg",
    alt: "Modern kitchen with green cabinets and wooden worktop",
    heading: ["From First Sketch", "To Final Fitting"],
    text: "No subcontractors, no surprises. Our own designers, carpenters and fitters handle the whole job, so the kitchen we promised at the studio is the kitchen you cook in at the end.",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i + dir + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    timer.current = setInterval(() => go(1), 7000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [go, index]);

  const slide = SLIDES[index];

  return (
    <section className="relative bg-forest overflow-hidden">
      {/* decorative arc */}
      <div className="hidden lg:block absolute -left-40 top-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full border-[50px] border-white/[0.04] pointer-events-none" />
      <div className="hidden lg:block absolute right-1/3 -bottom-56 w-[380px] h-[380px] rounded-full border-[40px] border-white/[0.03] pointer-events-none" />

      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-16 pb-20 lg:py-28">
        {/* text */}
        <div key={index} className="relative z-10">
          <span className="sec-label light mb-6">Modular Kitchen Studio</span>
          <h1 className="text-white text-4xl sm:text-5xl xl:text-[3.9rem] font-semibold leading-[1.12]">
            {slide.heading[0]}
            <br />
            <span className="text-[#e9c99b]">{slide.heading[1]}</span>
          </h1>
          <p className="text-white/65 mt-7 max-w-xl text-[1.0625rem] leading-relaxed">
            {slide.text}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link href="/services" className="btn-brass">
              Discover More <ArrowRight size={16} />
            </Link>
            <Link
              href="/projects"
              className="text-white font-heading font-medium text-sm tracking-[0.16em] uppercase border-b border-[#c6904f] pb-1 hover:text-[#c6904f] transition-colors"
            >
              View Our Work
            </Link>
          </div>

          {/* controls */}
          <div className="mt-14 flex items-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="w-12 h-12 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-[#c6904f] hover:border-[#c6904f] transition-all"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next slide"
              className="w-12 h-12 rounded-full border border-white/25 flex items-center justify-center text-white hover:bg-[#c6904f] hover:border-[#c6904f] transition-all"
            >
              <ArrowRight size={18} />
            </button>
            <div className="ml-3 flex gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-[#c6904f]" : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* image */}
        <div className="relative">
          <div className="relative overflow-hidden">
            <img
              key={slide.img}
              src={slide.img}
              alt={slide.alt}
              className="w-full h-[340px] sm:h-[460px] lg:h-[560px] object-cover hero-img-zoom"
            />
          </div>
          {/* est badge */}
          <div className="absolute -bottom-9 right-8 w-32 h-32 rounded-full bg-forest-deep border border-white/10 flex flex-col items-center justify-center text-center shadow-2xl">
            <span className="text-[#c6904f] font-heading font-semibold text-2xl leading-none">
              Est.
            </span>
            <span className="text-white font-heading font-semibold text-3xl leading-tight">
              2011
            </span>
          </div>
          {/* corner frame */}
          <div className="hidden sm:block absolute -top-4 -right-4 w-28 h-28 border-t-2 border-r-2 border-[#c6904f] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
