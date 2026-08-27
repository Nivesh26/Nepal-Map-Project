
import React from 'react';
import { useNavigate } from 'react-router-dom';
import kulekhaniImg from '../assets/kulekhani.jpg';

const Hydropower5: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      {/* Top Header Navigation */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-red-600 transition-colors py-2 px-3 rounded-lg hover:bg-slate-100 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Map
          </button>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider font-mono">Operational</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1 w-full space-y-8">
        {/* Title & Badge */}
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-3">
            <span className="bg-red-50 text-red-600 border border-red-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Project #5
            </span>
            <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
              Makwanpur District
            </span>
            <span className="bg-amber-50 text-amber-700 border border-amber-200 text-xs font-semibold px-3 py-1 rounded-full">
              Reservoir Storage Facility (Indra Sarobar)
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Kulekhani I Hydropower Project
          </h1>
          <p className="text-slate-500 mt-2 text-lg sm:text-xl font-medium">
            Nepal's vital 60 MW storage power plant and emergency grid frequency stabilizer
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
          <img
            src={kulekhaniImg}
            alt="Kulekhani I Hydropower"
            className="w-full h-80 sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent flex items-end p-6 sm:p-10">
            <div className="text-white space-y-2">
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold font-mono">Location & Reservoir</span>
              <h2 className="text-2xl sm:text-3xl font-bold">Markhu / Kulekhani, Makwanpur, Bagmati Province</h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                Home to Indra Sarobar, Nepal's largest man-made lake reservoir holding 85.3 million cubic meters of water.
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">Installed Capacity</span>
            <span className="text-2xl sm:text-4xl font-extrabold text-slate-900">60 <span className="text-lg font-bold text-red-600">MW</span></span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">Reservoir Capacity</span>
            <span className="text-2xl sm:text-4xl font-extrabold text-slate-900">85.3 <span className="text-lg font-bold text-amber-600">M m³</span></span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">Gross Head</span>
            <span className="text-2xl sm:text-4xl font-extrabold text-slate-900">550 <span className="text-lg font-bold text-slate-600">m</span></span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">Commission Year</span>
            <span className="text-2xl sm:text-4xl font-extrabold text-slate-900">1982</span>
          </div>
        </div>

        {/* Overview & Technical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Detailed Narrative */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Project Overview
              </h3>
              <p className="text-slate-600 leading-relaxed">
                The Kulekhani I Hydropower Project holds a unique place in Nepal's power grid as the nation's primary storage hydroelectric facility. Constructed between 1977 and 1982 with funding support from the World Bank, OECF Japan, UNDP, and Kuwait Fund, it acts as a critical buffer during the dry winter season when run-of-river flow drops dramatically.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The centerpiece of Kulekhani is the 114-meter-high rockfill dam impounding the Kulekhani River to form Indra Sarobar lake (covering 2.2 sq. km). Water stored during monsoon months is released through a 5.8-kilometer headrace tunnel and inclined penstock shaft operating under a massive 550-meter gross head.
              </p>
              <p className="text-slate-600 leading-relaxed">
                The underground powerhouse at Dhausing houses two 30 MW Pelton turbines. Water discharged from Kulekhani I feeds downstream into Kulekhani II (32 MW) and Kulekhani III (14 MW) cascading projects, maximizing overall system efficiency.
              </p>
            </div>

            {/* Strategic Value */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Grid Stabilization & Emergency Reserve
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                  <span><strong>Peak Load Management:</strong> Dispatches instant emergency electricity during evening peak hours across Kathmandu Valley and central grid.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                  <span><strong>Cascading Efficiency:</strong> Generates electricity 3 times sequentially across Kulekhani I (60 MW), II (32 MW), and III (14 MW).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                  <span><strong>Black Start Capability:</strong> Can start independently without grid voltage to restore system power following total blackouts.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Specifications Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Technical Specifications
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Turbine Type</span>
                  <span className="font-bold text-slate-800">Pelton (2 Units)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Dam Type</span>
                  <span className="font-bold text-slate-800">Rockfill (114 m high)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Gross Head</span>
                  <span className="font-bold text-slate-800">550 m</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Reservoir Lake</span>
                  <span className="font-bold text-slate-800">Indra Sarobar (2.2 km²)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Powerhouse</span>
                  <span className="font-bold text-slate-800">Underground (Dhausing)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Transmission</span>
                  <span className="font-bold text-slate-800">132 kV grid connection</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500 font-medium">Owner / Operator</span>
                  <span className="font-bold text-slate-800">NEA</span>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6 rounded-3xl shadow-xl space-y-4">
              <h4 className="font-bold text-lg">Explore Other Projects</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                Check out other major hydropower installations across Gandaki, Bagmati, and Lumbini provinces.
              </p>
              <button
                onClick={() => navigate('/')}
                className="w-full py-3 bg-red-600 hover:bg-red-500 text-white font-bold text-sm rounded-xl transition-colors cursor-pointer"
              >
                Return to Interactive Map
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-400">
        Nepal Hydropower Infrastructure Project • Kulekhani I Hydropower (60 MW)
      </footer>
    </div>
  );
};

export default Hydropower5;