import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
        
        <div>
          <h2 className="text-2xl font-bold text-white">JP IT STAFFING</h2>
          <p className="mt-4 text-slate-400 leading-7">
            Providing IT staffing, recruitment, and talent acquisition solutions for growing businesses and skilled professionals.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <div className="flex flex-col gap-3">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/jobs" className="hover:text-white">Jobs</Link>
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <div className="flex flex-col gap-3">
            <p>IT Staffing</p>
            <p>Permanent Hiring</p>
            <p>Contract Staffing</p>
            <p>Talent Acquisition</p>
          </div>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <div className="flex flex-col gap-3">
            <p>Email: info@jpitstaffing.com</p>
            <p>Phone: +91 98765 43210</p>
            <p>Pune, Maharashtra, India</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 text-center py-5 text-slate-500">
        © 2026 JP IT STAFFING. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;