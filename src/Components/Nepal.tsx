import React, { useState } from 'react';
import { NepalMap, type Province } from 'nepal-district-map';
import { DISTRICTS, DISTRICT_PROVINCE } from 'nepal-district-map/data';
import hydroImg from '../assets/hydro.png';

// 7 Province Metadata & Distinct Color Configuration
export const PROVINCES_DATA: Record<Province, {
  name: string;
  fill: string;
  stroke: string;
  capital: string;
  districtsCount: number;
  code: string;
  description: string;
}> = {
  Koshi: {
    name: 'Koshi Province',
    fill: '#EF4444', // Red
    stroke: '#DC2626',
    capital: 'Biratnagar',
    districtsCount: 14,
    code: 'Province 1',
    description: 'Home to Mt. Everest (Sagarmatha), Kanchenjunga, tea gardens & rich biodiversity.'
  },
  Madhesh: {
    name: 'Madhesh Province',
    fill: '#F59E0B', // Amber / Orange
    stroke: '#D97706',
    capital: 'Janakpur',
    districtsCount: 8,
    code: 'Province 2',
    description: 'Fertile Terai plains, historic Janaki Temple & famous Mithila art heritage.'
  },
  Bagmati: {
    name: 'Bagmati Province',
    fill: '#10B981', // Emerald Green
    stroke: '#059669',
    capital: 'Hetauda',
    districtsCount: 13,
    code: 'Province 3',
    description: 'Federal capital Kathmandu valley, central governance & ancient UNESCO heritage.'
  },
  Gandaki: {
    name: 'Gandaki Province',
    fill: '#3B82F6', // Blue
    stroke: '#2563EB',
    capital: 'Pokhara',
    districtsCount: 11,
    code: 'Province 4',
    description: 'Tourism center Pokhara, Annapurna Himalayan range & scenic lakes.'
  },
  Lumbini: {
    name: 'Lumbini Province',
    fill: '#8B5CF6', // Purple
    stroke: '#7C3AED',
    capital: 'Deukhuri',
    districtsCount: 12,
    code: 'Province 5',
    description: 'Sacred birthplace of Lord Buddha in Lumbini & Terai agricultural hub.'
  },
  Karnali: {
    name: 'Karnali Province',
    fill: '#EC4899', // Pink
    stroke: '#DB2777',
    capital: 'Birendranagar',
    districtsCount: 10,
    code: 'Province 6',
    description: 'Rara Lake, Shey Phoksundo National Park & pristine alpine wilderness.'
  },
  Sudurpashchim: {
    name: 'Sudurpashchim Province',
    fill: '#14B8A6', // Teal
    stroke: '#0D9488',
    capital: 'Godawari',
    districtsCount: 9,
    code: 'Province 7',
    description: 'Shuklaphanta National Park, Khaptad plateau & rich far-western tradition.'
  }
};

// Province list array for convenience
const PROVINCE_KEYS = Object.keys(PROVINCES_DATA) as Province[];

// Override fill and stroke for nepal-district-map
const CUSTOM_PROVINCE_COLORS = Object.entries(PROVINCES_DATA).reduce((acc, [key, val]) => {
  acc[key as Province] = { fill: val.fill, stroke: val.stroke };
  return acc;
}, {} as Record<Province, { fill: string; stroke: string }>);

// Fixed Hydropower locations
const MARKERS_DATA = [
  { name: 'Upper Tamakoshi Hydropower', district: 'Dolakha', capacity: 456 },
  { name: 'Kali Gandaki A Hydropower', district: 'Syangja', capacity: 144 },
  { name: 'Middle Marsyangdi Hydropower', district: 'Lamjung', capacity: 70 },
  { name: 'Chilime Hydropower', district: 'Rasuwa', capacity: 22 },
  { name: 'Kulekhani I Hydropower', district: 'Makwanpur', capacity: 60 }
];

// Map fixed data to their district coordinates
const MARKERS = MARKERS_DATA.map((data, index) => {
  const districtObj = DISTRICTS.find(d => d.name === data.district) || DISTRICTS[0];
  return {
    id: `hydro-${index}`,
    name: data.name,
    district: data.district,
    capacity: data.capacity,
    cx: districtObj.cx,
    cy: districtObj.cy,
  };
});

const Nepal: React.FC = () => {
  const [selectedProvince, setSelectedProvince] = useState<Province | null>(null);
  const [hoveredDistrict, setHoveredDistrict] = useState<string | null>(null);
  const [hoveredMark, setHoveredMark] = useState<typeof MARKERS[0] | null>(null);
  const [showLabels, setShowLabels] = useState<boolean>(true);
  const [showMarkers, setShowMarkers] = useState<boolean>(true);

  // Active province information object
  const activeProvinceInfo = selectedProvince ? PROVINCES_DATA[selectedProvince] : null;

  // Find hovered district's province
  const hoveredProvince = hoveredDistrict ? DISTRICT_PROVINCE[hoveredDistrict] : null;

  return (
    <div className="min-h-screen bg-slate-900 text-white p-4 sm:p-8 font-sans">
      {/* Top Header */}
      <div className="max-w-7xl mx-auto mb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-3">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Interactive Map of Nepal
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight mb-3">
          Nepal <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-amber-400 to-blue-400">7 Provinces</span> Map
        </h1>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
          Explore Nepal's 7 distinct provinces, 77 districts, provincial capitals, and major hydropower project locations.
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-6">
          <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl px-5 py-2.5 backdrop-blur">
            <span className="text-slate-400 text-xs uppercase tracking-wider block font-medium">Provinces</span>
            <span className="text-xl font-extrabold text-amber-400">7</span>
          </div>
          <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl px-5 py-2.5 backdrop-blur">
            <span className="text-slate-400 text-xs uppercase tracking-wider block font-medium">Districts</span>
            <span className="text-xl font-extrabold text-emerald-400">77</span>
          </div>
          <div className="bg-slate-800/80 border border-slate-700/60 rounded-xl px-5 py-2.5 backdrop-blur">
            <span className="text-slate-400 text-xs uppercase tracking-wider block font-medium">Hydropower Stations</span>
            <span className="text-xl font-extrabold text-red-400">5</span>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Province Colors Legend & Controls */}
        <div className="lg:col-span-4 bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 shadow-xl backdrop-blur-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-100">7 Provinces</h2>
            {selectedProvince && (
              <button
                onClick={() => setSelectedProvince(null)}
                className="text-xs text-slate-400 hover:text-white bg-slate-700 hover:bg-slate-600 px-2.5 py-1 rounded-lg transition"
              >
                Clear Filter ✕
              </button>
            )}
          </div>

          {/* Province Buttons Grid */}
          <div className="space-y-2 mb-6">
            {PROVINCE_KEYS.map((provKey) => {
              const prov = PROVINCES_DATA[provKey];
              const isSelected = selectedProvince === provKey;
              return (
                <button
                  key={provKey}
                  onClick={() => setSelectedProvince(isSelected ? null : provKey)}
                  className={`w-full text-left flex items-center justify-between p-3 rounded-xl border transition-all duration-200 ${
                    isSelected
                      ? 'bg-slate-700/90 border-slate-400 shadow-md ring-2 ring-slate-400/50 scale-[1.01]'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/80'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span 
                      className="w-4 h-4 rounded-full flex-shrink-0 shadow" 
                      style={{ backgroundColor: prov.fill }}
                    />
                    <div>
                      <div className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                        {prov.name}
                        <span className="text-[10px] text-slate-400 font-mono px-1.5 py-0.5 rounded bg-slate-800">
                          {prov.code}
                        </span>
                      </div>
                      <div className="text-xs text-slate-400">
                        Capital: <span className="text-slate-300">{prov.capital}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-slate-300 bg-slate-800/90 px-2 py-1 rounded-md border border-slate-700/50">
                      {prov.districtsCount} Dist.
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Map Controls */}
          <div className="border-t border-slate-700/80 pt-4 space-y-3">
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Map Overlay Controls</h3>
            <div className="flex items-center justify-between text-sm text-slate-300 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800">
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h10M7 12h10m-7 5h7" />
                </svg>
                District Labels
              </span>
              <input
                type="checkbox"
                checked={showLabels}
                onChange={(e) => setShowLabels(e.target.checked)}
                className="w-4 h-4 accent-emerald-500 cursor-pointer"
              />
            </div>
            <div className="flex items-center justify-between text-sm text-slate-300 bg-slate-900/50 p-2.5 rounded-xl border border-slate-800">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500 inline-block animate-ping"></span>
                Hydropower Markers
              </span>
              <input
                type="checkbox"
                checked={showMarkers}
                onChange={(e) => setShowMarkers(e.target.checked)}
                className="w-4 h-4 accent-red-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Nepal Map & Interactive Details */}
        <div className="lg:col-span-8 flex flex-col items-center">
          
          {/* Active Hover / Selection Banner */}
          <div className="w-full bg-slate-800/80 border border-slate-700/80 rounded-xl p-4 mb-4 backdrop-blur flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              {hoveredProvince || selectedProvince ? (
                <>
                  <span 
                    className="w-5 h-5 rounded-full shadow" 
                    style={{ backgroundColor: PROVINCES_DATA[(hoveredProvince || selectedProvince)!]?.fill }}
                  />
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {PROVINCES_DATA[(hoveredProvince || selectedProvince)!]?.name}
                    </h3>
                    <p className="text-xs text-slate-400">
                      Capital: <span className="text-slate-200 font-medium">{PROVINCES_DATA[(hoveredProvince || selectedProvince)!]?.capital}</span> | {PROVINCES_DATA[(hoveredProvince || selectedProvince)!]?.districtsCount} Districts
                    </p>
                  </div>
                </>
              ) : (
                <div>
                  <h3 className="text-sm font-bold text-slate-300">All 7 Provinces Active</h3>
                  <p className="text-xs text-slate-400">Hover or click any district / province on the map to explore.</p>
                </div>
              )}
            </div>

            {hoveredDistrict && (
              <div className="bg-slate-900/90 border border-slate-700 px-3 py-1.5 rounded-lg text-xs">
                <span className="text-slate-400">District:</span>{' '}
                <span className="font-bold text-amber-300">{hoveredDistrict}</span>
              </div>
            )}
          </div>

          {/* Interactive Nepal SVG Map Container */}
          <div className="w-full bg-slate-950/70 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
            
            {/* 7 Province Map Render */}
            <div className="relative">
              <NepalMap
                colorMode="province"
                provinceColors={CUSTOM_PROVINCE_COLORS}
                selectedProvince={selectedProvince}
                strokeColor="rgba(255, 255, 255, 0.7)"
                strokeWidth={0.8}
                hoverColor="#FDE047"
                showLabels={showLabels}
                labelFontSize={8}
                labelColor="rgba(255, 255, 255, 0.95)"
                showTooltip={true}
                dimOpacity={0.25}
                onDistrictHover={(districtName) => setHoveredDistrict(districtName)}
                onDistrictClick={(districtName) => {
                  const prov = DISTRICT_PROVINCE[districtName];
                  if (prov) {
                    setSelectedProvince(selectedProvince === prov ? null : prov);
                  }
                }}
              />

              {/* SVG Overlay for Hydropower Markers */}
              {showMarkers && (
                <svg 
                  viewBox="0 0 1200 800" 
                  className="absolute top-0 left-0 w-full h-full pointer-events-none"
                >
                  {MARKERS.map((mark) => (
                    <g 
                      key={mark.id} 
                      className="pointer-events-auto cursor-pointer transition-transform hover:scale-125 origin-center"
                      style={{ transformOrigin: `${mark.cx}px ${mark.cy}px` }}
                      onMouseEnter={() => setHoveredMark(mark)}
                      onMouseLeave={() => setHoveredMark(null)}
                    >
                      {/* Pulse animation ring */}
                      <circle cx={mark.cx} cy={mark.cy} r={14} fill="#ef4444" opacity={0.3} className="animate-ping origin-center" style={{ transformOrigin: `${mark.cx}px ${mark.cy}px` }} />
                      <circle cx={mark.cx} cy={mark.cy} r={10} fill="#ef4444" stroke="white" strokeWidth={2.5} />
                      <circle cx={mark.cx} cy={mark.cy} r={4} fill="white" />
                    </g>
                  ))}
                </svg>
              )}

              {/* Tooltip positioned near hovered Hydropower marker */}
              {hoveredMark && (
                <div 
                  className="absolute bg-slate-900/95 border border-slate-700 rounded-xl shadow-2xl z-20 w-64 pointer-events-none overflow-hidden backdrop-blur-md"
                  style={{ 
                    left: `calc(${(hoveredMark.cx / 1200) * 100}% + 10px)`, 
                    top: `calc(${(hoveredMark.cy / 800) * 100}% - 40px)` 
                  }}
                >
                  <img 
                    src={hydroImg} 
                    alt="Hydropower Station" 
                    className="w-full h-28 object-cover border-b border-slate-800" 
                  />
                  <div className="p-3">
                    <div className="flex items-center space-x-2 mb-1.5">
                      <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></div>
                      <h3 className="font-bold text-slate-100 text-sm leading-tight">{hoveredMark.name}</h3>
                    </div>
                    <p className="text-xs text-slate-400">
                      <span className="text-slate-500">District:</span> <span className="text-slate-200">{hoveredMark.district}</span>
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      <span className="text-slate-500">Capacity:</span> <span className="text-emerald-400 font-bold">{hoveredMark.capacity} MW</span>
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Map Caption */}
            <div className="mt-4 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-800">
              <span>* Each color represents one of the 7 official provinces of Nepal.</span>
              <span>Click any province/district to highlight.</span>
            </div>
          </div>

          {/* Selected Province Detailed Information Card */}
          {activeProvinceInfo && (
            <div className="w-full mt-6 bg-slate-800/90 border border-slate-700 rounded-2xl p-6 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-4 mb-4">
                <div className="flex items-center space-x-3">
                  <span 
                    className="w-5 h-5 rounded-full shadow" 
                    style={{ backgroundColor: activeProvinceInfo.fill }}
                  />
                  <div>
                    <h2 className="text-xl font-bold text-white">{activeProvinceInfo.name}</h2>
                    <span className="text-xs font-mono text-slate-400">{activeProvinceInfo.code}</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">Capital City</span>
                  <span className="text-sm font-bold text-amber-300">{activeProvinceInfo.capital}</span>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                {activeProvinceInfo.description}
              </p>
              <div className="flex items-center justify-between text-xs text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span>Total Districts: <strong className="text-white">{activeProvinceInfo.districtsCount}</strong></span>
                <span>Hydropower Stations: <strong className="text-emerald-400">{MARKERS.filter(m => DISTRICT_PROVINCE[m.district] === selectedProvince).length}</strong></span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Nepal;

