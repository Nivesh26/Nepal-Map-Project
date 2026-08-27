
import React from 'react';
import { useNavigate } from 'react-router-dom';
import chilimeImg from '../assets/chilime.jpg';

const Hydropower4: React.FC = () => {
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
              Project #4
            </span>
            <span className="bg-slate-100 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
              Rasuwa District
            </span>
            <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
              Run-of-River (High Head)
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Chilime Hydropower Project
          </h1>
          <p className="text-slate-500 mt-2 text-lg sm:text-xl font-medium">
            Pioneering 22 MW indigenous development model empowering local community shareholders in Rasuwa
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
          <img
            src={chilimeImg}
            alt="Chilime Hydropower Project"
            className="w-full h-80 sm:h-[480px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent flex items-end p-6 sm:p-10">
            <div className="text-white space-y-2">
              <span className="text-xs uppercase tracking-widest text-red-400 font-bold">Location & Basin</span>
              <h2 className="text-2xl sm:text-3xl font-bold">Syafru / Chilime, Rasuwa, Bagmati Province</h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
                Nestled in the picturesque Langtang Himalayan mountain region on the Chilime Khola stream.
              </p>
            </div>
          </div>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">Installed Capacity</span>
            <span className="text-2xl sm:text-4xl font-extrabold text-slate-900">22 <span className="text-lg font-bold text-red-600">MW</span></span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">Annual Generation</span>
            <span className="text-2xl sm:text-4xl font-extrabold text-slate-900">137 <span className="text-lg font-bold text-blue-600">GWh</span></span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">Gross Head</span>
            <span className="text-2xl sm:text-4xl font-extrabold text-slate-900">351 <span className="text-lg font-bold text-slate-600">m</span></span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">Commission Year</span>
            <span className="text-2xl sm:text-4xl font-extrabold text-slate-900">2003</span>
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
                The Chilime Hydropower Project is celebrated across Nepal as the pioneer of the "people's hydro model". Developed by Chilime Hydropower Company Limited (CHPCL)—a subsidiary initiated by NEA—it became the first hydropower project in Nepal constructed entirely by local engineers, contractors, and local equity capital.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Located in Rasuwa district along the pristine Chilime Khola, the project diverts glacial streamflow through a 2.8-kilometer headrace tunnel to an underground powerhouse at Syafru. Operating under a high head of 351 meters, two Pelton turbines deliver clean energy efficiently into the national power grid.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Chilime's financial success laid the foundation for subsidiary mega-projects including Upper Sanjen (14.8 MW), Sanjen (42.5 MW), and Rasuwagadhi (111 MW), expanding Chilime Group's hydro portfolio substantially.
              </p>
            </div>

            {/* Social Equity Model */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Community Ownership & Grassroots Benefit
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                  <span><strong>Local Share Ownership:</strong> 10% equity shares were directly allocated to local residents of Rasuwa District.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                  <span><strong>Nepali Engineering Capability:</strong> Proved that Nepalese engineers and domestic financial institutions can execute high-altitude mountain projects.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 bg-red-100 text-red-600 rounded-full flex items-center justify-center font-bold text-xs mt-0.5">✓</span>
                  <span><strong>Infrastructure Uplift:</strong> Built essential mountain roads, schools, health posts, and local electrification in Rasuwa.</span>
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
                  <span className="text-slate-500 font-medium">Design Discharge</span>
                  <span className="font-bold text-slate-800">7.5 m³/s</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Gross Head</span>
                  <span className="font-bold text-slate-800">351 m</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Headrace Tunnel</span>
                  <span className="font-bold text-slate-800">2.8 km</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Powerhouse</span>
                  <span className="font-bold text-slate-800">Underground (Syafru)</span>
                </div>
                <div className="flex justify-between py-2 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Transmission</span>
                  <span className="font-bold text-slate-800">66 kV line to Trishuli</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-slate-500 font-medium">Developer</span>
                  <span className="font-bold text-slate-800">CHPCL (Chilime)</span>
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
        Nepal Hydropower Infrastructure Project • Chilime Hydropower (22 MW)
      </footer>
    </div>
  );
};

export default Hydropower4;