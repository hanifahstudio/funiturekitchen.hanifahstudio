import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PageHeader({
  title,
  crumb,
}: {
  title: string;
  crumb: string;
}) {
  return (
    <section
      className="page-header"
      style={{ backgroundImage: "url(/images/page-title.jpg)" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-forest-deep/85 via-forest-deep/60 to-forest-deep/25" />
      <div className="relative container-x py-24 lg:py-28">
        <h1 className="text-white text-4xl lg:text-[3.4rem] font-semibold">
          {title}
        </h1>
        <nav
          className="mt-4 flex items-center gap-2 text-white/75 text-sm"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[#c6904f] transition-colors">
            Home
          </Link>
          <ChevronRight size={14} className="text-[#c6904f]" />
          <span className="text-[#c6904f]">{crumb}</span>
        </nav>
      </div>
    </section>
  );
}
