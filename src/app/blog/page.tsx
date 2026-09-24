import Header from "@/components/site/header";
import Footer from "@/components/site/footer";
import PageHeader from "@/components/site/page-header";
import BlogList from "@/components/site/blog-list";

export const metadata = {
  title: "News & Articles | Woodora Kitchens",
  description:
    "Kitchen design ideas, remodeling guides and honest advice from the Woodora studio.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <PageHeader title="News & Articles" crumb="News" />
        <section className="py-20 lg:py-28 bg-white">
          <div className="container-x">
            <BlogList />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
