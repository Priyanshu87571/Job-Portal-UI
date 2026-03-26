import { useState } from "react";
import JobCard from "../components/JobCard";

function Jobs() {
  const jobsData = [
    {
      title: "Frontend Developer",
      company: "TechNova Solutions",
      location: "Pune",
      type: "Full Time",
      salary: "₹6 - ₹10 LPA",
    },
    {
      title: "Java Backend Developer",
      company: "CodeSphere Technologies",
      location: "Bangalore",
      type: "Full Time",
      salary: "₹8 - ₹14 LPA",
    },
    {
      title: "UI/UX Designer",
      company: "NextGen Systems",
      location: "Remote",
      type: "Remote",
      salary: "₹5 - ₹8 LPA",
    },
    {
      title: "Software Test Engineer",
      company: "CloudAxis Pvt Ltd",
      location: "Hyderabad",
      type: "Contract",
      salary: "₹4 - ₹7 LPA",
    },
    {
      title: "React Developer Intern",
      company: "DevMatrix",
      location: "Remote",
      type: "Internship",
      salary: "₹20k / month",
    },
    {
      title: "Data Analyst",
      company: "InfiSoft Technologies",
      location: "Mumbai",
      type: "Hybrid",
      salary: "₹5 - ₹9 LPA",
    },
  ];

  // State for filters
  const [searchTitle, setSearchTitle] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [jobType, setJobType] = useState("");

  // Filtered jobs
  const filteredJobs = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      job.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
      (jobType === "" || job.type === jobType)
    );
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          Current Openings
        </span>

        <h1 className="text-5xl font-bold text-slate-900">
          Explore <span className="text-blue-600">IT Job Opportunities</span>
        </h1>

        <p className="text-slate-600 text-lg mt-6 max-w-3xl mx-auto leading-8">
          Discover the latest openings from our hiring partners and apply for roles that match your skills and goals.
        </p>
      </section>

      {/* Search / Filter UI */}
      <section className="max-w-7xl mx-auto px-6 pb-10">
        <div className="bg-white rounded-3xl p-6 shadow-md grid md:grid-cols-4 gap-4">
          
          {/* Search by Title */}
          <input
            type="text"
            placeholder="Search role..."
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Filter by Location */}
          <input
            type="text"
            placeholder="Location..."
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
            className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Filter by Job Type */}
          <select
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Job Types</option>
            <option value="Full Time">Full Time</option>
            <option value="Remote">Remote</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>
            <option value="Hybrid">Hybrid</option>
          </select>

          {/* Reset Button */}
          <button
            onClick={() => {
              setSearchTitle("");
              setSearchLocation("");
              setJobType("");
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 font-medium"
          >
            Reset Filters
          </button>
        </div>
      </section>

      {/* Results Count */}
      <section className="max-w-7xl mx-auto px-6 pb-6">
        <p className="text-slate-600 font-medium">
          {filteredJobs.length} job{filteredJobs.length !== 1 ? "s" : ""} found
        </p>
      </section>

      {/* Jobs Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        {filteredJobs.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {filteredJobs.map((job, index) => (
              <JobCard key={index} {...job} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-10 shadow-md text-center">
            <h2 className="text-2xl font-semibold text-slate-900">No Jobs Found</h2>
            <p className="text-slate-600 mt-3">
              Try changing your search keywords or filters.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Jobs;