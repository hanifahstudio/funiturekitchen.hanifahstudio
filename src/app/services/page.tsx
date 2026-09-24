import Link from "next/link";
import {
  ArrowRight,
  Ruler,
  DraftingCompass,
  Wrench,
  Hammer,
  DoorClosed,
  PackageCheck,
  BadgeDollarSign,
  Users,
  Lightbulb,
} from "lucide-react";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import PageHeader from "@/components/site/page-header";
import CoreValues from "@/components/site/core-values";
import Reveal from "@/components/site/reveal";

const SERVICES = [
  {
    icon: DraftingCompass,
    title: "Kitchen Design",
    text: "A full design service that ends with a 3D view of your finished kitchen and a price sheet you can actually read. One flat fee, credited back when we build.",
  },
  {
    icon: Ruler,
    title: "Kitchen Planner",
    text: "Layout planning that fixes the daily annoyances, the door that hits the table, the bin nobody can reach, the corner cabinet things disappear into.",
  },
  {
    icon: Wrench,
    title: "Kitchen Installation",
    text: "Our own fitters, five to eight working days, everything tested before we leave. Plumbing and electrics handled by certified trades under the same contract.",
  },
  {
    icon: Hammer,
    title: "Kitchen Remodeling",
    text: "Keep the bones you love and replace the rest. New doors, worktops and storage that drop onto a sound existing kitchen, at a fraction of a full refit.",
  },
  {
    icon: DoorClosed,
    title: "Kitchen Cabinets",
    text: "Cabinets cut and edged in our own workshop from properly dried timber. Shaker, slab or handleless, in any paint colour you can bring us a sample of.",
  },
  {
    icon: PackageCheck,
    title: "Smart Storage",
    text: "Pull out pantries, deep drawers, hidden bins and carousel corners. Storage planned around what you own, not what a catalogue says you should own.",
  },
];

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

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader title="Our Services" crumb="Services" />

        {/* WHAT WE DO */}
        <section className="py-20 lg:py-28 bg-cream">
          <div className="container-x">
            <Reveal className="max-w-2xl mb-14">
              <span className="sec-label mb-5">Our Services</span>
              <h2 className="text-3xl lg:text-[2.6rem] font-medium mb-5">
                What We Do
              </h2>
              <p className="leading-relaxed">
                If you need to repair or replace your kitchen, call today and
                talk to one of our kitchen specialists. They will answer all
                your questions and arrange an appointment at your convenience.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERVICES.slice(0, 4).map((s, i) => (
                <Reveal key={s.title} delay={i * 100}>
                  <div className="group bg-white h-full flex flex-col">
                    <div className="p-8 flex-1">
                      <span className="inline-flex w-16 h-16 items-center justify-center text-[#c6904f] mb-7">
                        <s.icon size={44} strokeWidth={1.1} />
                      </span>
                      <h3 className="text-xl mb-3">{s.title}</h3>
                      <p className="text-[0.9375rem] leading-relaxed">
                        {s.text}
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="border-t border-[#efe9dc] px-8 py-5 flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-forest group-hover:text-[#c6904f] transition-colors"
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {SERVICES.slice(4).map((s, i) => (
                <Reveal key={s.title} delay={i * 100}>
                  <div className="group bg-white h-full flex flex-col">
                    <div className="p-8 flex-1">
                      <span className="inline-flex w-16 h-16 items-center justify-center text-[#c6904f] mb-7">
                        <s.icon size={44} strokeWidth={1.1} />
                      </span>
                      <h3 className="text-xl mb-3">{s.title}</h3>
                      <p className="text-[0.9375rem] leading-relaxed">
                        {s.text}
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="border-t border-[#efe9dc] px-8 py-5 flex items-center gap-2 font-heading text-xs tracking-[0.2em] uppercase text-forest group-hover:text-[#c6904f] transition-colors"
                    >
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* features row */}
            <div className="grid md:grid-cols-3 gap-10 border-t border-[#e4ddcd] mt-20 pt-16">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={i * 100}>
                  <div className="flex gap-5">
                    <span className="w-14 h-14 shrink-0 border border-[#e4ddcd] bg-white flex items-center justify-center text-[#c6904f]">
                      <f.icon size={26} strokeWidth={1.5} />
                    </span>
                    <div>
                      <h4 className="font-heading font-medium text-lg text-ink mb-2">
                        {f.title}
                      </h4>
                      <p className="text-[0.9375rem] leading-relaxed">
                        {f.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <CoreValues />
      </main>
      <Footer />
    </div>
  );
}
