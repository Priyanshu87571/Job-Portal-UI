import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600 tracking-wide">
          JP IT <span className="text-slate-900">STAFFING</span>
        </h1>

        <div className="hidden md:flex gap-8 text-slate-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/jobs" className="hover:text-blue-600 transition">Jobs</Link>
          <Link to="/services" className="hover:text-blue-600 transition">Services</Link>
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow-sm transition">
          Hire Talent
        </button>
      </div>
    </nav>
  );
}

export default Navbar;