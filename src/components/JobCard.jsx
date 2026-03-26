function JobCard({ title, company, location, type, salary }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition border border-slate-100">
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {type}
        </span>
        <span className="text-sm text-slate-500">{salary}</span>
      </div>

      <h2 className="text-xl font-semibold text-slate-800">{title}</h2>
      <p className="text-slate-600 mt-1">{company}</p>
      <p className="text-sm text-slate-500 mt-1">{location}</p>

      <button className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl font-medium transition">
        Apply Now
      </button>
    </div>
  );
}

export default JobCard;