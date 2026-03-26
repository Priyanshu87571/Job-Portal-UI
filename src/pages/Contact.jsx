function Contact() {
  return (
    <div className="bg-slate-50">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          Contact JP IT STAFFING
        </span>

        <h1 className="text-5xl font-bold text-slate-900">
          Let’s Connect & <span className="text-blue-600">Work Together</span>
        </h1>

        <p className="text-slate-600 text-lg mt-6 max-w-3xl mx-auto leading-8">
          Whether you’re looking to hire skilled IT professionals or searching for your next opportunity,
          our team is here to support you.
        </p>
      </section>

      {/* Contact Content */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Contact Info */}
          <div className="bg-white rounded-3xl p-8 shadow-md">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>

            <div className="space-y-5 text-slate-600 leading-8">
              <p><span className="font-semibold text-slate-900">Email:</span> info@jpitstaffing.com</p>
              <p><span className="font-semibold text-slate-900">Phone:</span> +91 98765 43210</p>
              <p><span className="font-semibold text-slate-900">Location:</span> Pune, Maharashtra, India</p>
              <p><span className="font-semibold text-slate-900">Working Hours:</span> Monday - Saturday, 9:00 AM - 6:00 PM</p>
            </div>

            <div className="mt-8 bg-blue-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Why Contact Us?</h3>
              <p className="text-slate-600 leading-8">
                We can help you with IT hiring support, staffing solutions, recruitment guidance,
                and career-related opportunities in the technology domain.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-md">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Send Us a Message</h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-slate-300 rounded-xl px-4 py-3 w-full outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border border-slate-300 rounded-xl px-4 py-3 w-full outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="border border-slate-300 rounded-xl px-4 py-3 w-full outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="border border-slate-300 rounded-xl px-4 py-3 w-full outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium w-full">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;