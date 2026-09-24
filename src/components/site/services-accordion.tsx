"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const SERVICES = [
  {
    num: "01",
    title: "Kitchen Design",
    body: "Sit down with one of our designers and plan the whole room on paper first. We draw the layout, pick the cabinets and finishes with you, and hand you a realistic 3D view before anything gets ordered. You get one clear price for the full design, and it is knocked off the bill if we build it.",
  },
  {
    num: "02",
    title: "Kitchen Planning",
    body: "Good kitchens fail on planning more than on looks. We measure the room properly, map the plumbing and electrics, and plan the work triangle so cooking stops feeling like an obstacle course. You also get a fixed timeline so you know exactly when the old kitchen comes out and the new one goes in.",
  },
  {
    num: "03",
    title: "Kitchen Installation",
    body: "Our own fitters do the work, not a rotating list of subcontractors. Cabinets go in level, worktops get sealed properly, and we test every door and drawer before we hand over the keys. Most installations take five to eight working days, and we clear up behind ourselves every evening.",
  },
  {
    num: "04",
    title: "Smart Care",
    body: "Every kitchen leaves with a two year service plan. Hinges get retuned, drawer runners get adjusted, and if a cabinet door warps or a hinge gives up, we come back and sort it at no cost. If you ever sell the house, the plan passes to the new owner.",
  },
];

export default function ServicesAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-none">
      {SERVICES.map((s, i) => {
        const isOpen = open === i;
        return (
          <div key={s.num} className="acc-item" data-open={isOpen}>
            <button
              className="acc-head"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              <span className="acc-num">{s.num}.</span>
              <span className="acc-title">{s.title}</span>
              <span
                className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all ${
                  isOpen
                    ? "bg-[#c6904f] border-[#c6904f] text-white"
                    : "border-[#d9d2c0] text-forest"
                }`}
              >
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>
            <div
              className="acc-body"
              style={{ maxHeight: isOpen ? 260 : 0 }}
            >
              <p className="pb-6 pl-[58px] pr-4 text-[0.9375rem] leading-relaxed text-body-text">
                {s.body}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
