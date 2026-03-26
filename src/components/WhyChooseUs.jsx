function WhyChooseUs() {
  const points = [
    "Access to skilled and job-ready IT professionals",
    "Faster hiring process for technical roles",
    "Reliable support for employers and candidates",
    "Focused recruitment for software and technology domains",
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-blue-600 rounded-3xl p-10 md:p-14 text-white">
        <h2 className="text-3xl font-bold mb-6">Why Choose JP IT STAFFING?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <div key={index} className="bg-white/10 rounded-xl p-5 backdrop-blur-sm">
              <p className="text-lg">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;