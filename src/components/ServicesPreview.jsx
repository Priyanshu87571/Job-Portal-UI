function ServicesPreview() {
  const services = [
    {
      title: "IT Staffing Solutions",
      desc: "Hire qualified software developers, testers, analysts, and technical professionals."
    },
    {
      title: "Permanent Hiring",
      desc: "Build strong long-term teams with carefully screened IT candidates."
    },
    {
      title: "Contract Staffing",
      desc: "Flexible staffing solutions for short-term projects and urgent technical requirements."
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Our Staffing Services</h2>
        <p className="text-slate-600 mt-3">Professional recruitment support for employers and job seekers.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-slate-800">{service.title}</h3>
            <p className="text-slate-600 mt-3 leading-7">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesPreview;