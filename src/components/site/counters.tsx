import Counter from "./counter";

const STATS = [
  { target: 850, suffix: "+", label: "Kitchens Delivered" },
  { target: 320, suffix: "+", label: "Interior Designs" },
  { target: 610, suffix: "+", label: "Modular Kitchens" },
  { target: 480, suffix: "+", label: "Happy Clients" },
];

export default function Counters() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
        {STATS.map((s, i) => (
          <div key={i} className="text-center">
            <p className="font-heading font-semibold text-5xl lg:text-[3.4rem] text-forest leading-none">
              <Counter target={s.target} suffix={s.suffix} />
            </p>
            <p className="mt-3 text-body-text text-[0.9375rem]">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
