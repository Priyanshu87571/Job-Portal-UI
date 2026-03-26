function SearchBar() {
  return (
    <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-4 flex flex-col md:flex-row gap-4">
      <input
        type="text"
        placeholder="Search IT roles..."
        className="flex-1 px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        placeholder="Preferred location..."
        className="flex-1 px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition">
        Search Jobs
      </button>
    </div>
  );
}

export default SearchBar;