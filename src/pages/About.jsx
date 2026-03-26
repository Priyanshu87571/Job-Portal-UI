function About() {
  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          About JP IT STAFFING
        </span>

        <h1 className="text-5xl font-bold text-slate-900">
          Your Trusted Partner in <span className="text-blue-600">IT Recruitment</span>
        </h1>

        <p className="text-slate-600 text-lg mt-6 max-w-3xl mx-auto leading-8">
          JP IT STAFFING is a professional staffing and recruitment company focused on connecting
          skilled IT professionals with leading companies. We help businesses hire faster and
          support job seekers in finding the right opportunities.
        </p>
      </section>

      {/* Mission / Vision */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-md">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-600 leading-8">
              To simplify the hiring process for employers and create meaningful career opportunities
              for IT professionals by delivering quality staffing solutions with trust and efficiency.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-md">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
            <p className="text-slate-600 leading-8">
              To become a reliable and recognized IT staffing partner for companies across industries,
              helping them build strong technical teams and empowering candidates to grow their careers.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-blue-600 rounded-3xl p-10 md:p-14 text-white">
          <h2 className="text-4xl font-bold mb-8 text-center">Why Companies Choose Us</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">Specialized IT Hiring</h3>
              <p className="leading-7">
                We focus on technology roles including developers, analysts, designers, testers, and support engineers.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">Faster Recruitment</h3>
              <p className="leading-7">
                Our structured screening process helps employers reduce hiring time and shortlist quality candidates.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">Candidate-Centric Approach</h3>
              <p className="leading-7">
                We guide professionals toward opportunities that align with their skills, experience, and career goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;