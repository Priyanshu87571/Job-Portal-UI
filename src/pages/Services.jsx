function Services() {
  const services = [
    {
      title: "IT Staffing Solutions",
      desc: "We provide staffing support for companies looking to hire qualified software developers, QA engineers, support professionals, analysts, and technical specialists.",
    },
    {
      title: "Permanent Hiring",
      desc: "Build strong long-term teams by hiring full-time IT professionals who match your business goals and technical requirements.",
    },
    {
      title: "Contract Staffing",
      desc: "Flexible staffing for short-term projects, urgent hiring needs, and temporary technical roles without long-term commitments.",
    },
    {
      title: "Resume Screening",
      desc: "We help employers save time by reviewing and shortlisting candidates based on technical skills, experience, and role fit.",
    },
    {
      title: "Talent Acquisition Support",
      desc: "End-to-end hiring assistance including sourcing, screening, coordination, and recruitment process support.",
    },
    {
      title: "Candidate Placement Assistance",
      desc: "We support job seekers in finding relevant opportunities and connecting with companies that align with their career path.",
    },
  ];

  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          Our Services
        </span>

        <h1 className="text-5xl font-bold text-slate-900">
          IT Staffing & <span className="text-blue-600">Recruitment Solutions</span>
        </h1>

        <p className="text-slate-600 text-lg mt-6 max-w-3xl mx-auto leading-8">
          JP IT STAFFING offers professional hiring and staffing solutions for businesses and job seekers
          in the technology space.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition"
            >
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">{service.title}</h2>
              <p className="text-slate-600 leading-8">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-slate-900 rounded-3xl p-10 md:p-14 text-center text-white">
          <h2 className="text-4xl font-bold">Need Hiring Support?</h2>
          <p className="text-slate-300 mt-4 text-lg max-w-2xl mx-auto">
            Whether you’re hiring for one role or building an entire team, JP IT STAFFING can help.
          </p>

          <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-medium">
            Contact Our Team
          </button>
        </div>
      </section>
    </div>
  );
}

export default Services;