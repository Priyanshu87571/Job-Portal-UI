function CompaniesSection() {
  const companies = ["TechNova", "CodeSphere", "NextGen Systems", "CloudAxis", "InfiSoft", "DevMatrix"];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold text-slate-900 mb-4">Trusted Hiring Partners</h2>
      <p className="text-slate-600 mb-10">We support growing companies with reliable IT hiring solutions.</p>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        {companies.map((company, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-slate-200 py-6 font-semibold text-slate-700">
            {company}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CompaniesSection;