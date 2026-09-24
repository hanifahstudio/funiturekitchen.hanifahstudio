"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const POSTS = [
  {
    img: "/images/news-7.jpg",
    date: { day: "31", month: "Oct" },
    title: "Modern lighting ideas to brighten your kitchen",
    text: "One ceiling light is never enough in a working kitchen. We explain the three layer trick, task lights under the cabinets, a warm wash over the table and a soft glow over the worktop, and why it changes everything after dark.",
    author: "admin",
    category: "Kitchen Design",
  },
  {
    img: "/images/news-9.jpg",
    date: { day: "24", month: "Oct" },
    title: "Kitchen layouts that make the most of your space",
    text: "Galley, L shape, or island? The right layout depends on how many cooks fight over the stove. Here is how we match a layout to a room, with real measurements from jobs we finished this year.",
    author: "admin",
    category: "Kitchen Design",
  },
  {
    img: "/images/news-10.jpg",
    date: { day: "17", month: "Oct" },
    title: "Creating functionality in a modern kitchen",
    text: "A kitchen can look sharp in photos and still be a nightmare to cook in. This piece covers the small decisions that add up, drawer widths, bin placement, and the height of your dishwasher.",
    author: "admin",
    category: "Remodeling",
  },
  {
    img: "/images/news-11.jpg",
    date: { day: "10", month: "Oct" },
    title: "Top trends in modern kitchen decor",
    text: "Deep greens, fluted panels and brass everywhere. We look at which trends from this year are worth your money and which ones you will regret in three years.",
    author: "admin",
    category: "Kitchen Design",
  },
  {
    img: "/images/news-12.jpg",
    date: { day: "03", month: "Oct" },
    title: "Minimalist kitchens: how to achieve the look",
    text: "Handleless cabinets and empty worktops look effortless and take real planning to pull off. Where does the toaster go? We design minimalist kitchens that still hold the mess of a real family.",
    author: "admin",
    category: "Kitchen Design",
  },
  {
    img: "/images/news-13.jpg",
    date: { day: "14", month: "Aug" },
    title: "Five fixes for a cramped kitchen",
    text: "Most cramped kitchens do not need an extension. Swapping the upper cabinets for open shelves and pulling the counters back a hand width can open the room up more than you would think.",
    author: "admin",
    category: "Remodeling",
  },
  {
    img: "/images/news-14.jpg",
    date: { day: "21", month: "Aug" },
    title: "Choosing worktops that take a beating",
    text: "A worktop should survive hot pans, chopped lemons and school project paint. We break down what solid timber, quartz and laminate each cost, and which one suits the way you actually cook.",
    author: "admin",
    category: "Storage Ideas",
  },
  {
    img: "/images/news-15.jpg",
    date: { day: "28", month: "Aug" },
    title: "Why dark cabinets are back in style",
    text: "Deep green and charcoal cabinets took over this year's studio orders. Here is how to keep a dark kitchen feeling warm, from brass handles to the flooring that works underneath it.",
    author: "admin",
    category: "Kitchen Design",
  },
];

const PER_PAGE = 6;

export default function BlogList() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(POSTS.length / PER_PAGE);
  const visible = POSTS.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-14">
        {visible.map((p) => (
          <article key={p.title} className="group">
            <div className="relative overflow-hidden zoom-frame">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-[280px] object-cover"
              />
              <div className="absolute left-5 bottom-5 bg-white text-center px-3.5 py-2.5 shadow-lg">
                <p className="font-heading font-semibold text-xl text-forest leading-none">
                  {p.date.day}
                </p>
                <p className="text-[0.68rem] tracking-widest uppercase text-[#c6904f] mt-1">
                  {p.date.month}
                </p>
              </div>
            </div>
            <p className="mt-6 text-xs text-body-text flex items-center gap-2">
              By: <span className="text-[#c6904f]">{p.author}</span>
              <span className="text-[#d9d2c0]">/</span>
              {p.category}
            </p>
            <h2 className="text-2xl leading-snug mt-3 group-hover:text-[#c6904f] transition-colors">
              {p.title}
            </h2>
            <p className="mt-3 text-[0.9375rem] leading-relaxed">{p.text}</p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase bg-forest text-white px-6 py-3.5 hover:bg-[#c6904f] transition-colors"
            >
              Read More <ArrowRight size={14} />
            </Link>
          </article>
        ))}
      </div>

      {/* pagination */}
      {totalPages > 1 && (
        <nav
          className="mt-16 flex items-center justify-center gap-3"
          aria-label="Blog pages"
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => {
                setPage(n);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-current={n === page ? "page" : undefined}
              className={`w-11 h-11 font-heading font-medium text-sm flex items-center justify-center transition-colors ${
                n === page
                  ? "bg-forest text-white"
                  : "bg-white text-forest border border-[#e4ddcd] hover:bg-[#c6904f] hover:border-[#c6904f] hover:text-white"
              }`}
            >
              {n}
            </button>
          ))}
        </nav>
      )}
    </div>
  );
}
