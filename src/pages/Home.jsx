import SearchBar from "../components/SearchBar";
import StatsSection from "../components/StatsSection";
import CompaniesSection from "../components/CompaniesSection";
import ServicesPreview from "../components/ServicesPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import CTASection from "../components/CTASection";

function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-slate-100">
      
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          IT Staffing • Recruitment • Talent Solutions
        </span>

        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
          Connecting <span className="text-blue-600">Top IT Talent</span> with Leading Companies
        </h1>

        <p className="text-slate-600 text-lg mt-6 max-w-3xl mx-auto">
          JP IT STAFFING helps businesses hire skilled professionals and supports candidates in finding the right technology opportunities.
        </p>

        <div className="mt-10 flex justify-center">
          <SearchBar />
        </div>
      </section>

      <StatsSection />
      <CompaniesSection />
      <ServicesPreview />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </div>
  );
}

export default Home;