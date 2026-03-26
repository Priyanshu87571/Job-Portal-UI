function CTASection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center text-white">
        <h2 className="text-4xl font-bold">Looking to Hire or Get Hired?</h2>
        <p className="text-slate-300 mt-4 text-lg max-w-2xl mx-auto">
          JP IT STAFFING connects the right people with the right opportunities in the technology space.
        </p>

        <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-medium">
            Explore Jobs
          </button>
          <button className="bg-white text-slate-900 hover:bg-slate-100 px-6 py-3 rounded-xl font-medium">
            Hire Talent
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;