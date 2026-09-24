import Link from "next/link";
import { ArrowRight, Check, MapPin, Phone } from "lucide-react";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import HeroSlider from "@/components/site/hero-slider";
import ServicesAccordion from "@/components/site/services-accordion";
import TestimonialSlider from "@/components/site/testimonial-slider";
import Counters from "@/components/site/counters";
import CoreValues from "@/components/site/core-values";
import Marquee from "@/components/site/marquee";
import Reveal from "@/components/site/reveal";

const CHECKLIST = [
  "Free home measurement",
  "3D design preview",
  "Fixed quote pricing",
  "Two year service plan",
];

const GALLERY = [
  { img: "/images/project-1.jpg", title: "Sage Green Shaker", place: "Maple Grove" },
  { img: "/images/project-2.jpg", title: "Compact City Flat", place: "Downtown" },
  { img: "/images/project-3.jpg", title: "Island Family Kitchen", place: "Oakfield" },
  { img: "/images/project-4.jpg", title: "Walnut & Stone", place: "Cedar Court" },
];

const STEPS = [
  {
    num: "01",
    title: "Meet Customers",
    text: "We visit your home, measure the room and listen to what bothers you about the current kitchen.",
  },
  {
    num: "02",
    title: "Meeting On Table",
    text: "Back at the studio we lay out cabinet options, finishes and a fixed price you can think over.",
  },
  {
    num: "03",
    title: "Drafting Design",
    text: "You get a 3D drawing of the finished room and we tune every drawer and shelf until it fits.",
  },
  {
    num: "04",
    title: "Implimentation",
    text: "Our own crew removes the old kitchen and fits the new one in five to eight working days.",
  },
];

const POSTS = [
  {
    img: "/images/news-13.jpg",
    date: "14 Aug",
    title: "Five fixes for a cramped kitchen",
    text: "Most cramped kitchens do not need an extension. Swapping the upper cabinets for open shelves and pulling the counters back a hand width can open the room up more than you would think.",
  },
  {
    img: "/images/news-14.jpg",
    date: "21 Aug",
    title: "Choosing worktops that take a beating",
    text: "A worktop should survive hot pans, chopped lemons and school project paint. We break down what solid timber, quartz and laminate each cost, and which one suits the way you actually cook.",
  },
  {
    img: "/images/news-15.jpg",
    date: "28 Aug",
    title: "Why dark cabinets are back in style",
    text: "Deep green and charcoal cabinets took over this year's studio orders. Here is how to keep a dark kitchen feeling warm, from brass handles to the flooring that works underneath it.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* HERO */}
        <HeroSlider />

        {/* ABOUT */}
        <section className="bg-cream py-20 lg:py-28">
          <div className="container-x grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal>
              <div className="relative zoom-frame overflow-hidden">
                <img
                  src="/images/about-1.jpg"
                  alt="Modern kitchen with wooden shelves and coffee station"
                  className="w-full h-[380px] lg:h-[520px] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 hidden sm:block w-40 h-40 border-b-2 border-r-2 border-[#c6904f]" />
                <div className="absolute bottom-6 left-6 bg-white px-6 py-4 shadow-xl">
                  <p className="font-heading font-semibold text-forest text-2xl leading-none">
                    15+
                  </p>
                  <p className="text-xs text-body-text mt-1 uppercase tracking-wider">
                    Years of experience
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <span className="sec-label mb-5">About Our Studio</span>
              <h2 className="text-3xl lg:text-[2.6rem] font-medium leading-tight mb-6">
                Discover a New Look For Your Kitchen
              </h2>
              <p className="mb-5 leading-relaxed">
                Woodora started in a small workshop with two carpenters and one
                van. Fifteen years later we design, build and fit modular
                kitchens across the city, and the workshop is still where every
                cabinet gets cut and finished before it reaches your home.
              </p>
              <p className="mb-8 leading-relaxed">
                We keep the process simple. One designer stays with your job
                from the first home visit to the final door adjustment, and the
                price we quote at the studio is the price you pay at the end.
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-5 mb-10">
                {CHECKLIST.map((c) => (
                  <li key={c} className="tick-item">
                    <span className="tick">
                      <Check size={13} strokeWidth={3} />
                    </span>
                    {c}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-forest">
                Discover More <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container-x grid lg:grid-cols-[1fr_1.3fr] gap-14 lg:gap-20">
            <Reveal>
              <div className="lg:sticky lg:top-36">
                <span className="sec-label mb-5">Our Services</span>
                <h2 className="text-3xl lg:text-[2.6rem] font-medium leading-tight mb-6">
                  We provide all type of modular kitchen services
                </h2>
                <p className="mb-8 leading-relaxed">
                  From the first sketch to the last hinge adjustment, everything
                  happens under one roof. Tap a service to see what you actually
                  get for your money.
                </p>
                <Link href="/services" className="btn-brass">
                  All Services <ArrowRight size={16} />
                </Link>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <ServicesAccordion />
            </Reveal>
          </div>
        </section>

        {/* PROJECT GALLERY */}
        <section className="py-20 lg:py-24 bg-cream">
          <div className="container-x">
            <Reveal className="text-center max-w-2xl mx-auto mb-14">
              <span className="sec-label center mb-5">Project Gallery</span>
              <h2 className="text-3xl lg:text-[2.6rem] font-medium">
                Our Latest Kitchens Design
              </h2>
              <p className="mt-5 leading-relaxed">
                Real kitchens for real families, photographed the week the
                fitters left. Every one of these started as a sketch on our
                studio table.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {GALLERY.map((g, i) => (
                <Reveal key={g.img} delay={i * 100}>
                  <Link
                    href="/projects"
                    className="group relative block overflow-hidden zoom-frame"
                  >
                    <img
                      src={g.img}
                      alt={`${g.title}, ${g.place}`}
                      className="w-full h-[340px] lg:h-[420px] object-cover"
                    />
                    <div className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/55 transition-colors duration-500" />
                    <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-[#e9c99b] font-heading font-medium text-sm tracking-widest uppercase flex items-center gap-2">
                        <MapPin size={13} /> {g.place}
                      </p>
                      <h3 className="text-white text-xl mt-1.5">{g.title}</h3>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* COUNTERS */}
        <Counters />

        {/* TESTIMONIALS */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="container-x">
            <Reveal className="text-center mb-12">
              <span className="sec-label center mb-5">Testimonials</span>
              <h2 className="text-3xl lg:text-[2.6rem] font-medium">
                Feel Good Experience From Design to Installation
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <TestimonialSlider />
            </Reveal>
          </div>
        </section>

        {/* CORE VALUES (dark) */}
        <CoreValues />

        {/* WORK PROGRESS */}
        <section id="work-progress" className="py-20 lg:py-28 bg-cream">
          <div className="container-x">
            <Reveal className="text-center max-w-2xl mx-auto mb-16">
              <span className="sec-label center mb-5">How We Do Work</span>
              <h2 className="text-3xl lg:text-[2.6rem] font-medium">
                Our Work Progress
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
              {STEPS.map((s, i) => (
                <Reveal key={s.num} delay={i * 100}>
                  <div className="relative text-center px-2">
                    <div className="relative mx-auto w-28 h-28 mb-7">
                      <div className="w-28 h-28 rounded-full border border-[#ddd5c2] flex items-center justify-center bg-white">
                        <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#c6904f]/50 flex items-center justify-center">
                          <span className="font-heading font-semibold text-2xl text-forest">
                            {s.num}
                          </span>
                        </div>
                      </div>
                      <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#c6904f] text-white text-xs font-heading font-semibold flex items-center justify-center">
                        {i + 1}
                      </span>
                    </div>
                    <h3 className="text-xl mb-3">{s.title}</h3>
                    <p className="text-[0.9375rem] leading-relaxed">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSFORMING + MARQUEE */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="container-x grid lg:grid-cols-[1.6fr_1fr] gap-12 items-end">
            <Reveal>
              <h2 className="text-4xl sm:text-5xl lg:text-[4rem] font-medium leading-[1.15]">
                Transforming space into{" "}
                <span className="text-[#c6904f]">dream come true</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="leading-relaxed">
                Every project in the gallery below started the same way, a
                homeowner tired of working around a kitchen that fought them
                back. Bring us the room and we will show you what it can
                become.
              </p>
              <a
                href="tel:+18005702288"
                className="mt-6 inline-flex items-center gap-3 font-heading font-semibold text-forest text-lg hover:text-[#c6904f] transition-colors"
              >
                <span className="w-11 h-11 rounded-full bg-cream flex items-center justify-center">
                  <Phone size={17} className="text-[#c6904f]" />
                </span>
                +1 (800) 570 2288
              </a>
            </Reveal>
          </div>
        </section>

        <Marquee />

        {/* BLOG */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="container-x">
            <Reveal className="text-center max-w-2xl mx-auto mb-14">
              <span className="sec-label center mb-5">Our Blogs</span>
              <h2 className="text-3xl lg:text-[2.6rem] font-medium">
                Recent News & Articles
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-8">
              {POSTS.map((p, i) => (
                <Reveal key={p.title} delay={i * 100}>
                  <Link href="/blog" className="group block bg-white">
                    <div className="overflow-hidden zoom-frame">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="w-full h-[240px] object-cover"
                      />
                    </div>
                    <div className="p-7">
                      <p className="text-xs tracking-widest uppercase text-[#c6904f] font-heading font-semibold mb-3">
                        {p.date}
                      </p>
                      <h3 className="text-xl leading-snug group-hover:text-[#c6904f] transition-colors">
                        {p.title}
                      </h3>
                      <p className="mt-3 text-[0.9375rem] leading-relaxed">
                        {p.text}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 font-heading text-xs tracking-[0.18em] uppercase text-forest group-hover:text-[#c6904f] transition-colors">
                        Read More <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
