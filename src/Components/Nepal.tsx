import React, { useState } from 'react';
import { NepalMap } from 'nepal-district-map';
import { DISTRICTS, PROVINCES } from 'nepal-district-map/data';
import hydroImg from '../assets/hydro.png';

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
  const [hoveredMark, setHoveredMark] = useState<typeof MARKERS[0] | null>(null);

  return (
    <div className="flex flex-col items-center p-6 sm:p-8 w-full min-h-screen bg-white">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Nepal Map</h2>
      </div>
      
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 w-full max-w-7xl">
        {/* Map Container */}
        <div className="w-full lg:w-4/5 relative">
          <div style={{
            filter: `
              drop-shadow(1px 0px 0px black) 
              drop-shadow(-1px 0px 0px black) 
              drop-shadow(0px 1px 0px black) 
              drop-shadow(0px -1px 0px black)
            `
          }}>
            <NepalMap
              colorMode="province"
              strokeColor="white"
              strokeWidth={0.8}
              showLabels={false}
              showTooltip={false}
              disabled={true}
            />
          </div>

          {/* SVG Overlay for markers */}
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
                <circle cx={mark.cx} cy={mark.cy} r={10} fill="#ef4444" stroke="white" strokeWidth={3} />
                <circle cx={mark.cx} cy={mark.cy} r={4} fill="white" />
              </g>
            ))}
          </svg>

          {/* Tooltip positioned near the hovered marker */}
          {hoveredMark && (
            <div 
              className="absolute bg-white rounded-xl shadow-2xl border border-gray-100 z-10 w-64 pointer-events-none overflow-hidden transition-all duration-200"
              style={{ 
                left: `calc(${(hoveredMark.cx / 1200) * 100}% + 15px)`, 
                top: `calc(${(hoveredMark.cy / 800) * 100}% - 40px)` 
              }}
            >
              <img 
                src={hydroImg} 
                alt="Hydropower Station" 
                className="w-full h-32 object-cover" 
              />
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2 border-b border-gray-100 pb-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <h3 className="font-bold text-gray-900 leading-tight">{hoveredMark.name}</h3>
                </div>
                <p className="text-sm text-gray-500 font-medium">
                  <span className="text-gray-400">District:</span> {hoveredMark.district}
                </p>
                <p className="text-sm text-gray-500 font-medium mt-1">
                  <span className="text-gray-400">Capacity:</span> {hoveredMark.capacity} MW
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right Side Province Legend */}
        <div className="w-full lg:w-64 bg-white p-5 rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-3 self-center lg:self-start mt-4 lg:mt-6">
          <h3 className="font-bold text-gray-900 text-base border-b border-gray-100 pb-2.5">Provinces</h3>
          <div className="flex flex-col gap-2.5">
            {PROVINCES.map((province) => (
              <div key={province.name} className="flex items-center gap-3 p-1 rounded-lg">
                <span 
                  className="w-4 h-4 rounded-full flex-shrink-0 shadow-sm" 
                  style={{ backgroundColor: province.color }}
                />
                <span className="text-sm font-medium text-gray-700">{province.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nepal;
