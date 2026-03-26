function Testimonials() {
  const testimonials = [
    {
      name: "Sakshi Tiwari",
      role: "Frontend Developer",
      text: "JP IT STAFFING helped me secure a great opportunity in a product-based company. The process was smooth and professional."
    },
    {
      name: "Ritika Sharma",
      role: "HR Executive",
      text: "We were able to hire strong technical candidates quickly. Their screening and support were impressive."
    },
    {
      name: "Priyanshu Raj",
      role: "Software Engineer",
      text: "A reliable platform for both employers and job seekers. The team was responsive and helpful throughout."
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900">Client & Candidate Feedback</h2>
        <p className="text-slate-600 mt-3">What people say about our staffing support.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-md">
            <p className="text-slate-600 leading-7">“{item.text}”</p>
            <div className="mt-6">
              <h4 className="font-semibold text-slate-900">{item.name}</h4>
              <p className="text-sm text-slate-500">{item.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;