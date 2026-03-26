function StatsSection() {
  const stats = [
    { number: "500+", label: "IT Roles Filled" },
    { number: "150+", label: "Hiring Partners" },
    { number: "2K+", label: "Candidates Placed" },
    { number: "95%", label: "Client Satisfaction" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-md text-center">
            <h3 className="text-3xl font-bold text-blue-600">{item.number}</h3>
            <p className="text-slate-600 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsSection;