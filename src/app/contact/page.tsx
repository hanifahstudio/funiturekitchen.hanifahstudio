import { MapPin, Phone, Mail } from "lucide-react";
import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import PageHeader from "@/components/site/page-header";
import ContactForm from "@/components/site/contact-form";
import Reveal from "@/components/site/reveal";

export const metadata = {
  title: "Contact Us | Woodora Kitchens",
  description:
    "Book a free design consultation or ask us anything about your kitchen project.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader title="Contact Us" crumb="Contact Us" />

        <section className="py-20 lg:py-28 bg-white">
          <div className="container-x">
            <Reveal className="max-w-2xl mb-14">
              <span className="sec-label mb-5">Get In Touch</span>
              <h2 className="text-3xl lg:text-[2.6rem] font-medium mb-5">
                We Love to Hear From You
              </h2>
              <p className="leading-relaxed">
                Tell us about the room, the budget you have in mind and when you
                want the work done. We reply to every message within one working
                day.
              </p>
            </Reveal>

            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-14 lg:gap-20">
              <Reveal>
                <ContactForm />
              </Reveal>

              <Reveal delay={120}>
                <h3 className="text-2xl font-medium mb-4">Our Address</h3>
                <p className="leading-relaxed mb-9">
                  Visit the studio to see cabinet finishes, worktop samples and
                  working drawer systems you can pull open. Parking is free and
                  the kettle is always on.
                </p>

                <ul className="space-y-8">
                  <li className="flex gap-5">
                    <span className="w-12 h-12 shrink-0 rounded-full bg-cream flex items-center justify-center text-[#c6904f]">
                      <MapPin size={20} />
                    </span>
                    <div>
                      <h4 className="font-heading font-medium text-lg text-ink">
                        Address :
                      </h4>
                      <p className="text-[0.9375rem] mt-1">
                        48 Rosewood Avenue, Suite 12,
                        <br />
                        Austin, TX 78702
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <span className="w-12 h-12 shrink-0 rounded-full bg-cream flex items-center justify-center text-[#c6904f]">
                      <Phone size={20} />
                    </span>
                    <div>
                      <h4 className="font-heading font-medium text-lg text-ink">
                        Phone :
                      </h4>
                      <p className="text-[0.9375rem] mt-1">
                        +1 (800) 570 2288 / +1 (512) 994 3654
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-5">
                    <span className="w-12 h-12 shrink-0 rounded-full bg-cream flex items-center justify-center text-[#c6904f]">
                      <Mail size={20} />
                    </span>
                    <div>
                      <h4 className="font-heading font-medium text-lg text-ink">
                        Email:
                      </h4>
                      <p className="text-[0.9375rem] mt-1">
                        hello@woodorakitchens.com
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-10 bg-cream p-7">
                  <h4 className="font-heading font-medium text-lg text-ink mb-2">
                    Working Hours
                  </h4>
                  <p className="text-[0.9375rem]">
                    Monday to Friday, 9.30am to 6.30pm
                    <br />
                    Saturday, 10am to 2pm
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
