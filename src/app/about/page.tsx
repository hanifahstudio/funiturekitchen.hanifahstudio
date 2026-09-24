import Link from "next/link";
import { ArrowRight, BadgeDollarSign, Users, Lightbulb, Check } from "lucide-react";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import PageHeader from "@/components/site/page-header";
import Counters from "@/components/site/counters";
import CoreValues from "@/components/site/core-values";
import Marquee from "@/components/site/marquee";
import Reveal from "@/components/site/reveal";

const FEATURES = [
  {
    icon: BadgeDollarSign,
    title: "Reasonable Prices",
    text: "We produce furniture to fulfill needs of all people and offer it at affordable and fair prices.",
  },
  {
    icon: Users,
    title: "Professional Team",
    text: "Designers, carpenters and fitters who have been with us for years, not strangers from a call center.",
  },
  {
    icon: Lightbulb,
    title: "Exclusive Design",
    text: "A mixture of imagination, experience and professionalism. The secret of our design.",
  },
];

const TEAM = [
  { img: "/images/team-1.jpg", name: "Amara Cole", role: "Founder & Lead Designer" },
  { img: "/images/team-2.jpg", name: "Michael Turner", role: "Senior Kitchen Designer" },
  { img: "/images/team-3.jpg", name: "Priya Nair", role: "Interior Architect" },
  { img: "/images/team-4.jpg", name: "James Walker", role: "Installation Manager" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader title="About Us" crumb="About Us" />

        {/* VISION */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container-x grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <Reveal>
              <span className="sec-label mb-5">Company Vision</span>
              <h2 className="text-3xl lg:text-[2.5rem] font-medium leading-tight mb-6">
                Our Company Mission & Vision for the Long Term
              </h2>
              <p className="mb-5 leading-relaxed">
                Woodora began in 2011 when two carpenters got tired of watching
                families pay showroom prices for boxes glued together in a
                hurry. We set up our own workshop with one rule, if a cabinet
                would not go into our own homes, it does not go into yours.
              </p>
              <p className="mb-8 leading-relaxed">
                That rule still runs the place. Every cabinet is cut, edged and
                checked in our workshop before it is loaded onto the van, and
                every kitchen is fitted by the same crew from start to finish.
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-10">
                <li>
                  <h4 className="font-heading font-medium text-ink text-lg mb-1.5 flex items-start gap-2.5">
                    <span className="text-[#c6904f] mt-1">
                      <Check size={16} strokeWidth={3} />
                    </span>
                    Solution for Modular Kitchen
                  </h4>
                  <p className="text-[0.9375rem] pl-7">
                    Ready to fit cabinet systems built to the millimetre of your
                    room.
                  </p>
                </li>
                <li>
                  <h4 className="font-heading font-medium text-ink text-lg mb-1.5 flex items-start gap-2.5">
                    <span className="text-[#c6904f] mt-1">
                      <Check size={16} strokeWidth={3} />
                    </span>
                    Solution for Kitchen Renovation
                  </h4>
                  <p className="text-[0.9375rem] pl-7">
                    Full strip out, plumbing, electrics and a brand new kitchen
                    under one contract.
                  </p>
                </li>
              </ul>
              <Link href="/contact" className="btn-forest">
                Contact Us <ArrowRight size={16} />
              </Link>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative">
                <div className="zoom-frame overflow-hidden">
                  <img
                    src="/images/about-6.jpg"
                    alt="Dark wood kitchen with warm lighting"
                    className="w-full h-[380px] lg:h-[520px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 left-8 bg-[#c6904f] text-white px-9 py-7 shadow-2xl">
                  <p className="font-heading font-semibold text-4xl leading-none">
                    15
                  </p>
                  <p className="text-sm mt-1.5 leading-snug">
                    years of experience
                    <br />
                    in the field
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FEATURES ROW */}
        <section className="pb-20 lg:pb-24 bg-white">
          <div className="container-x grid md:grid-cols-3 gap-10 border-t border-[#efe9dc] pt-16">
            {FEATURES.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className="flex gap-5">
                  <span className="w-14 h-14 shrink-0 border border-[#e4ddcd] flex items-center justify-center text-[#c6904f]">
                    <f.icon size={26} strokeWidth={1.5} />
                  </span>
                  <div>
                    <h4 className="font-heading font-medium text-lg text-ink mb-2">
                      {f.title}
                    </h4>
                    <p className="text-[0.9375rem] leading-relaxed">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-cream py-20 lg:py-24">
          <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
            <Reveal>
              <h2 className="text-3xl lg:text-[2.6rem] font-medium leading-tight mb-4">
                We can build your kitchen of your dream
              </h2>
              <p className="font-heading text-lg text-[#c6904f] mb-6">
                You dream it, we design it.
              </p>
              <p className="mb-9 leading-relaxed max-w-xl">
                Bring the room measurements or just bring photos of kitchens you
                like. We plan together so you leave with a design that fits your
                home, not a package deal that fits everyone.
              </p>
              <Link href="/contact" className="btn-forest">
                Schedule a Consultation <ArrowRight size={16} />
              </Link>
            </Reveal>
            <Reveal delay={120}>
              <div className="zoom-frame overflow-hidden">
                <img
                  src="/images/consultation-1.jpg"
                  alt="Designers reviewing kitchen plans with a client"
                  className="w-full h-[360px] lg:h-[440px] object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* COUNTERS */}
        <Counters />

        {/* CORE VALUES */}
        <CoreValues />

        {/* TEAM */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="container-x">
            <Reveal className="text-center max-w-2xl mx-auto mb-14">
              <span className="sec-label center mb-5">Certified Professionals</span>
              <h2 className="text-3xl lg:text-[2.6rem] font-medium">
                Our Dedicated Team
              </h2>
              <p className="mt-5 leading-relaxed">
                The people you meet at the studio are the people who build your
                kitchen. No handoffs, no call centers.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEAM.map((m, i) => (
                <Reveal key={m.name} delay={i * 100}>
                  <div className="group">
                    <div className="overflow-hidden zoom-frame">
                      <img
                        src={m.img}
                        alt={`${m.name}, ${m.role} at Woodora Kitchens`}
                        className="w-full h-[330px] object-cover"
                      />
                    </div>
                    <div className="bg-cream px-6 py-5 text-center group-hover:bg-forest transition-colors duration-500">
                      <h3 className="text-lg group-hover:text-white transition-colors duration-500">
                        {m.name}
                      </h3>
                      <p className="text-sm text-body-text group-hover:text-white/60 transition-colors duration-500">
                        {m.role}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Marquee />
      </main>
      <Footer />
    </div>
  );
}
