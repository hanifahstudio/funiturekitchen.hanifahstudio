const ITEMS = [
  "Modular Kitchen",
  "Interior Design",
  "Kitchen Cabinets",
  "Smart Storage",
  "Kitchen Remodeling",
  "Custom Worktops",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden py-10 lg:py-14 border-y border-[#ece5d5] bg-white">
      <div className="marquee-track">
        {row.map((item, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span
              className={`font-heading font-semibold text-5xl lg:text-7xl px-6 ${
                i % 2 === 0 ? "text-[#e8dfcd]" : "text-transparent"
              }`}
              style={
                i % 2 !== 0
                  ? { WebkitTextStroke: "1.5px #d8cfb9" }
                  : undefined
              }
            >
              {item}
            </span>
            <span className="text-[#c6904f] text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
