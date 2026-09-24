import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import PageHeader from "@/components/site/page-header";
import Reveal from "@/components/site/reveal";

const PROJECTS = [
  { img: "/images/project-32.jpg", title: "Oak & Stone Family Kitchen", place: "Maple Grove" },
  { img: "/images/project-33.jpg", title: "Sage Green Shaker Kitchen", place: "Oakfield" },
  { img: "/images/project-34.jpg", title: "Blue Island Open Plan", place: "Riverside" },
  { img: "/images/project-35.jpg", title: "Compact City Flat Kitchen", place: "Downtown" },
  { img: "/images/project-36.jpg", title: "Warm Timber Galley", place: "Cedar Court" },
  { img: "/images/project-37.jpg", title: "Marble Top Entertainer", place: "Hillcrest" },
  { img: "/images/project-38.jpg", title: "Minimal White Studio Kitchen", place: "Park West" },
  { img: "/images/project-39.jpg", title: "Classic Wood & Brass", place: "Old Town" },
  { img: "/images/project-1.jpg", title: "Sage Green Shaker II", place: "Maple Grove" },
  { img: "/images/project-2.jpg", title: "Terrace House Refit", place: "Eastgate" },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader title="Our Projects" crumb="Projects" />

        <section className="py-20 lg:py-28 bg-white">
          <div className="container-x">
            <Reveal className="max-w-2xl mb-14">
              <span className="sec-label mb-5">Our Work</span>
              <h2 className="text-3xl lg:text-[2.6rem] font-medium mb-5">
                Explore Recent Projects
              </h2>
              <p className="leading-relaxed">
                Ten kitchens from the past year, photographed the day the
                fitters handed over the keys. Ask us about any of them and we
                will happily walk you through what the job cost and how long it
                took.
              </p>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROJECTS.map((p, i) => (
                <Reveal key={p.img + p.title} delay={(i % 4) * 90}>
                  <div className="group relative overflow-hidden zoom-frame">
                    <img
                      src={p.img}
                      alt={`${p.title}, ${p.place}, by Woodora Kitchens`}
                      className="w-full h-[300px] object-cover"
                    />
                    <div className="absolute inset-0 bg-forest-deep/0 group-hover:bg-forest-deep/60 transition-colors duration-500" />
                    <div className="absolute inset-x-0 bottom-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-[#e9c99b] text-xs font-heading tracking-widest uppercase">
                        {p.place}
                      </p>
                      <h3 className="text-white text-lg leading-snug mt-1">
                        {p.title}
                      </h3>
                    </div>
                  </div>
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
