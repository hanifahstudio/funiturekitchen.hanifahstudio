import Link from "next/link";
import { Phone, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Logo from "./logo";
import NewsletterForm from "./newsletter-form";

const COMPANY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/projects", label: "Our Projects" },
  { href: "/blog", label: "News & Articles" },
  { href: "/services", label: "Our Services" },
  { href: "/contact", label: "Contact Us" },
];

const SERVICE_LINKS = [
  { href: "/services", label: "Kitchen Design" },
  { href: "/services", label: "Kitchen Planning" },
  { href: "/services", label: "Kitchen Installation" },
  { href: "/services", label: "Kitchen Remodeling" },
  { href: "/services", label: "Kitchen Cabinets" },
  { href: "/services", label: "Smart Storage" },
];

export default function Footer() {
  return (
    <footer className="mt-auto bg-forest text-white">
      {/* newsletter strip */}
      <div className="border-b border-white/10">
        <div className="container-x py-12 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
          <div className="lg:max-w-md">
            <h3 className="text-white text-2xl font-medium mb-2">
              Newsletter Subscription
            </h3>
            <p className="text-white/60 text-[0.9375rem]">
              One short email a month. New kitchen ideas, project photos and
              studio offers. No spam, ever.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      {/* main footer */}
      <div className="container-x py-16 lg:py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo light />
          <p className="text-white/60 mt-6 max-w-sm text-[0.9375rem] leading-relaxed">
            We design and fit modular kitchens for real homes and real budgets.
            From the first sketch to the last handle, our own team handles every
            step of the job.
          </p>
          <div className="mt-8 space-y-5">
            <div>
              <p className="text-white/40 text-sm mb-1">Call Us</p>
              <a
                href="tel:+18005702288"
                className="flex items-center gap-2.5 text-white font-heading font-medium text-lg hover:text-[#c6904f] transition-colors"
              >
                <Phone size={17} className="text-[#c6904f]" />
                +1 (800) 570 2288
              </a>
            </div>
            <div>
              <p className="text-white/40 text-sm mb-1">Send a message</p>
              <a
                href="mailto:hello@woodorakitchens.com"
                className="flex items-center gap-2.5 text-white font-heading font-medium text-lg hover:text-[#c6904f] transition-colors"
              >
                <Mail size={17} className="text-[#c6904f]" />
                hello@woodorakitchens.com
              </a>
            </div>
          </div>
          <div className="flex gap-3 mt-8">
            {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:bg-[#c6904f] hover:border-[#c6904f] hover:text-white transition-all"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Company">
          <h4 className="text-white text-lg font-medium mb-6 relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-8 after:h-[2px] after:bg-[#c6904f]">
            Company
          </h4>
          <ul className="space-y-3.5">
            {COMPANY_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="f-link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Services">
          <h4 className="text-white text-lg font-medium mb-6 relative pb-3 after:absolute after:left-0 after:bottom-0 after:w-8 after:h-[2px] after:bg-[#c6904f]">
            Services
          </h4>
          <ul className="space-y-3.5">
            {SERVICE_LINKS.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="f-link">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-white/50">
            © Copyright Woodora {new Date().getFullYear()} . All rights reserved.
          </p>
          <p className="text-white/50">
            Designed By{" "}
            <a
              href="https://preview-chat-8dbaa95e-ab4d-48e2-9030-1e7c59b14b99.space-z.ai/website-offer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#c6904f] transition-colors"
            >
              hanifah Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
