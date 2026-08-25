import React, { useState } from 'react';
import { NepalMap } from 'nepal-district-map';
import { DISTRICTS, PROVINCES } from 'nepal-district-map/data';

import upperTamakoshiImg from '../assets/upper_tamakoshi.jpg';
import kaliGandakiImg from '../assets/kali_gandaki.jpg';
import middleMarsyangdiImg from '../assets/middle_marsyangdi.jpg';
import chilimeImg from '../assets/chilime.jpg';
import kulekhaniImg from '../assets/kulekhani.jpg';

import team1Img from '../assets/team1.jpg';
import team2Img from '../assets/team2.jpg';
import team3Img from '../assets/team3.jpg';
import team4Img from '../assets/team4.jpg';
import team5Img from '../assets/team5.jpg';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Er. Ankit Sharma',
    role: 'Lead Hydropower Engineer',
    bio: 'Over 12 years of experience in high-altitude tunnel engineering, structural design, and civil project execution across Himalayan hydro basins.',
    image: team1Img,
  },
  {
    id: 2,
    name: 'Sujata Thapa',
    role: 'Senior GIS & Spatial Analyst',
    bio: 'Specialist in river basin spatial mapping, remote sensing, geographic information systems, and topographical terrain modeling.',
    image: team2Img,
  },
  {
    id: 3,
    name: 'Er. Bikram Rai',
    role: 'Chief Energy Planner',
    bio: 'Expert in national power grid planning, feasibility studies, investment strategy, and large-scale renewable energy infrastructure.',
    image: team3Img,
  },
  {
    id: 4,
    name: 'Pooja Shrestha',
    role: 'Sustainability Analyst',
    bio: 'Focuses on environmental impact assessments (EIA), riverine ecology preservation, and community economic equity integration.',
    image: team4Img,
  },
  {
    id: 5,
    name: 'Er. Dipendra Adhikari',
    role: 'Grid Operations Manager',
    bio: 'Specializes in real-time transmission grid synchronization, peak-load dispatch management, and cross-border power trading systems.',
    image: team5Img,
  },
];

// Fixed Hydropower locations with distinct images for each project
const MARKERS_DATA = [
  { name: 'Upper Tamakoshi Hydropower', district: 'Dolakha', capacity: 456, image: upperTamakoshiImg },
  { name: 'Kali Gandaki A Hydropower', district: 'Syangja', capacity: 144, image: kaliGandakiImg },
  { name: 'Middle Marsyangdi Hydropower', district: 'Lamjung', capacity: 70, image: middleMarsyangdiImg },
  { name: 'Chilime Hydropower', district: 'Rasuwa', capacity: 22, image: chilimeImg },
  { name: 'Kulekhani I Hydropower', district: 'Makwanpur', capacity: 60, image: kulekhaniImg }
];

// Map fixed data to their district coordinates
const MARKERS = MARKERS_DATA.map((data, index) => {
  const districtObj = DISTRICTS.find(d => d.name === data.district) || DISTRICTS[0];
  return {
    id: `hydro-${index}`,
    name: data.name,
    district: data.district,
    capacity: data.capacity,
    image: data.image,
    cx: districtObj.cx,
    cy: districtObj.cy,
  };
});

const Nepal: React.FC = () => {
  const [hoveredMark, setHoveredMark] = useState<typeof MARKERS[0] | null>(null);

  return (
    <div className="flex flex-col items-center p-6 sm:p-8 w-full min-h-screen bg-white">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Nepal Hydropower Map</h2>
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
            {MARKERS.map((mark) => {
              const isHovered = hoveredMark?.id === mark.id;
              return (
                <g 
                  key={mark.id} 
                  className={`pointer-events-auto cursor-pointer transition-transform duration-200 origin-center ${
                    isHovered ? 'scale-150' : 'hover:scale-125'
                  }`}
                  style={{ transformOrigin: `${mark.cx}px ${mark.cy}px` }}
                  onMouseEnter={() => setHoveredMark(mark)}
                  onMouseLeave={() => setHoveredMark(null)}
                >
                  <circle cx={mark.cx} cy={mark.cy} r={10} fill="#ef4444" stroke="white" strokeWidth={3} />
                  <circle cx={mark.cx} cy={mark.cy} r={4} fill="white" />
                </g>
              );
            })}
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
                src={hoveredMark.image} 
                alt={hoveredMark.name} 
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

      {/* Hydropower Projects List at the Bottom */}
      <div className="w-full max-w-7xl mt-10 pt-6 border-t border-gray-200">
        <h3 className="font-bold text-gray-900 text-lg mb-4">Hydropower Projects</h3>
        <div className="flex flex-wrap gap-3">
          {MARKERS_DATA.map((project, idx) => {
            const mark = MARKERS[idx];
            const isHovered = hoveredMark?.id === mark.id;
            return (
              <div 
                key={idx} 
                className={`flex items-center gap-2.5 bg-white border px-4 py-2.5 rounded-xl shadow-sm cursor-pointer transition-all duration-200 ${
                  isHovered 
                    ? 'border-red-500 ring-2 ring-red-100 scale-105 bg-red-50/40' 
                    : 'border-gray-200 hover:border-red-300 hover:shadow-md'
                }`}
                onMouseEnter={() => setHoveredMark(mark)}
                onMouseLeave={() => setHoveredMark(null)}
              >
                <span className={`w-3 h-3 bg-red-500 rounded-full inline-block flex-shrink-0 transition-transform ${
                  isHovered ? 'scale-125' : ''
                }`}></span>
                <span className="text-sm font-semibold text-gray-800">{project.name}</span>
              </div>
            );
          })}
        </div>

        {/* Detailed Projects & Experiences Section */}
        <div className="mt-12 pt-8 border-t border-gray-200/80">
          <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2.5 h-8 bg-red-500 rounded-full"></div>
              <h3 className="text-2xl font-bold text-gray-900">
                Hydropower Development & Project Experiences in Nepal
              </h3>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/60 shadow-xs">
                Nepal possesses an estimated theoretical hydropower potential of over 83,000 MW, with roughly 42,000 MW recognized as technically and economically feasible. Fed by perpetual Himalayan snowmelt and major river basins including the Koshi, Gandaki, and Karnali, the country has undergone a remarkable transformation from chronic power outages to energy self-sufficiency. The strategic development of both run-of-river and storage facilities across diverse provinces has modernized the national grid, serving as the primary engine for industrial growth and rural electrification.
              </p>

              <p className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/60 shadow-xs">
                Among the landmark undertakings highlighted on this map, the <strong className="text-gray-900 font-semibold">Upper Tamakoshi Hydropower Project (456 MW)</strong> in Dolakha stands out as a historic milestone of national engineering capability. Financed primarily through domestic financial institutions and public mobilization, its execution required excavating extensive underground caverns, penstock shafts, and complex tunneling through intricate Himalayan mountain geology. Similarly, the <strong className="text-gray-900 font-semibold">Kali Gandaki A Hydropower Plant (144 MW)</strong> in Syangja serves as a vital baseload contributor, utilizing sophisticated desilting basins to manage high sediment loads transported by seasonal monsoon flows.
              </p>

              <p className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/60 shadow-xs">
                Constructing and operating large-scale water infrastructure in Nepal's steep mountain topography involves overcoming steep technical and geological hurdles. Engineering teams face fragile fault zones, landslide-prone slopes, and extreme seasonal river discharge variations. Lessons gained from projects across Rasuwa, Lamjung, and Makwanpur have driven significant innovations in sediment-resistant hydro turbines, underground powerhouse designs, and climate-resilient water diversion structures, establishing Nepal as an internationally recognized case study in high-altitude hydro engineering.
              </p>

              <p className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/60 shadow-xs">
                While run-of-river projects produce peak output during wet summer months, maintaining grid stability during the dry winter season relies heavily on reservoir storage plants like <strong className="text-gray-900 font-semibold">Kulekhani I (60 MW)</strong>. Functioning as Nepal's principal storage facility, Kulekhani provides essential peak-load management and voltage stabilization. Complementing technical stability, community-driven models such as <strong className="text-gray-900 font-semibold">Chilime Hydropower (22 MW)</strong> pioneered local economic equity by allocating equity shares directly to project-affected residents, creating a sustainable framework for grassroots investment and public participation.
              </p>

              <p className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/60 shadow-xs">
                Beyond electricity generation, hydropower projects deliver transformative socio-economic benefits to remote mountain communities. Building access roads, transmission corridors, and bridges to reach project sites connects isolated rural settlements to national markets, healthcare, and education centers. Modern project frameworks actively integrate environmental safeguard protocols, compensatory reforestation, and watershed management to protect riverine ecosystems and preserve local biodiversity alongside energy expansion.
              </p>

              <p className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/60 shadow-xs">
                Looking toward the future, Nepal is rapidly positioning itself as a clean energy hub in South Asia. With major gigawatt-scale projects under construction and power trade agreements established with India and Bangladesh, Nepal is expanding its role from domestic electrification to regional cross-border green power export. By substituting fossil-fuel energy across the region during peak production months, Nepal’s hydropower journey demonstrates how sustainable natural resource development can power national prosperity while supporting broader regional decarbonization goals.
              </p>
            </div>
          </div>
        </div>

        {/* Meet Our Team Section */}
        <div className="mt-12 pt-8 border-t border-gray-200/80">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-red-600 bg-red-50 px-3 py-1 rounded-full inline-block mb-3">
              Our Experts
            </span>
            <h3 className="text-3xl font-bold text-gray-900">
              Meet Our Team
            </h3>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-sm sm:text-base">
              The dedicated engineers, GIS specialists, and environmental analysts driving Nepal's hydro potential and spatial project mapping.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div 
                key={member.id} 
                className="group bg-white border border-gray-200/80 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div className="w-full aspect-square overflow-hidden rounded-xl mb-4 bg-gray-100">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-1">{member.name}</h4>
                <span className="text-xs font-semibold text-red-600 bg-red-50 px-2.5 py-0.5 rounded-full mb-2">
                  {member.role}
                </span>
                <p className="text-xs text-gray-500 leading-relaxed mt-1">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nepal;
