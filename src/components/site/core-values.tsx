import { Play } from "lucide-react";
import Reveal from "./reveal";

export default function CoreValues() {
  return (
    <section className="relative bg-forest overflow-hidden">
      {/* faint background image */}
      <div
        className="absolute inset-0 opacity-[0.08] bg-cover bg-center"
        style={{ backgroundImage: "url(/images/video-1.jpg)" }}
      />
      <div className="relative container-x py-20 lg:py-28 grid lg:grid-cols-[1.5fr_1fr] gap-14 items-center">
        <Reveal>
          <h2 className="text-white text-3xl lg:text-[2.75rem] font-medium leading-snug max-w-2xl">
            Our core values keep us honest and our designs fresh.
          </h2>
          <a
            href="#work-progress"
            className="inline-block mt-4 text-[#e9c99b] font-heading text-xl lg:text-2xl underline underline-offset-8 decoration-[#c6904f] hover:text-[#c6904f] transition-colors"
          >
            Feel good experience from design to installation
          </a>
          <p className="text-white/60 mt-6 max-w-xl leading-relaxed">
            One team handles your job from the studio visit to the final door
            adjustment. The designer who draws your kitchen follows it through
            the workshop and stands next to the fitters on install day.
          </p>
          <a href="#work-progress" className="btn-outline-light mt-9">
            Checkout Videos
          </a>
        </Reveal>

        <Reveal delay={150} className="flex justify-center lg:justify-end">
          <button
            aria-label="Play studio video"
            className="relative w-40 h-40 flex items-center justify-center"
          >
            <span className="absolute inset-0 rounded-full border border-white/30 ring-pulse" />
            <span
              className="absolute inset-0 rounded-full border border-white/20 ring-pulse"
              style={{ animationDelay: "0.7s" }}
            />
            <span
              className="absolute inset-0 rounded-full border border-white/15 ring-pulse"
              style={{ animationDelay: "1.4s" }}
            />
            <span className="w-24 h-24 rounded-full bg-[#c6904f] flex items-center justify-center text-white hover:bg-[#a9763c] transition-colors">
              <Play size={26} fill="currentColor" className="ml-1" />
            </span>
          </button>
        </Reveal>
      </div>
    </section>
  );
}
