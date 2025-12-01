import { Beaker, Compass, Shield } from "lucide-react";

export const ProjectMapKingdom = ({ activeProjectId, onSelectProject, refProp, heroData:HERO_DATA,ref }) => {
  const activeProject = HERO_DATA.projectDetails.find(p => p.id === activeProjectId) || HERO_DATA.projectDetails[0];

  return (
    <section ref={refProp} className="min-h-screen py-20 px-4 bg-white flex items-center justify-center">
      <div ref={ref} className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <Compass className="mx-auto text-gray-900 mb-4" size={40} />
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Kingdoms of the Realm</h2>
          <div className="h-1 w-20 bg-gray-900 mx-auto"></div>

          <p className="text-gray-600 mt-4 italic">"Click a kingdom on the map to reveal its tale of conquest and glory. Detailed accounts of battles fought, strategies executed, and tools wielded await you here."</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-0 border-4 border-black shadow-2xl bg-white">
          {/* Left Panel: Ink Map */}
          <div className="lg:w-1/2 h-[500px] relative bg-[#f8f8f8] overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] border-b-4 lg:border-b-0 lg:border-r-4 border-gray-900">
            <div className="absolute top-6 left-6 font-serif font-bold text-gray-400 uppercase tracking-widest text-sm">Strategic Operations Map</div>

            {/* Simple 'Ink' Style Map Decorations */}
            <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 100 Q 150 50 250 150 T 450 100" fill="none" stroke="black" strokeWidth="4" />
              <path d="M10 400 Q 150 350 350 450" fill="none" stroke="black" strokeWidth="4" />
            </svg>

            {HERO_DATA.projectDetails.map((project) => (
              <button
                key={project.id}
                onClick={() => onSelectProject(project.id)}
                className={`absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group transition-all duration-500 ${activeProjectId === project.id ? 'z-20 scale-125' : 'z-10 hover:scale-110'}`}
                style={{ top: project.coords.top, left: project.coords.left }}
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${activeProjectId === project.id ? 'bg-gray-900 border-gray-900 text-white' : 'bg-white border-gray-400 text-gray-400 group-hover:border-gray-900 group-hover:text-gray-900'}`}>
                  <Shield size={18} />
                </div>
                <span className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 text-[10px] font-bold uppercase tracking-widest bg-white px-2 py-1 border border-gray-200 shadow-sm whitespace-nowrap transition-opacity ${activeProjectId === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                  {project.name}
                </span>
              </button>
            ))}
          </div>

          {/* Right Panel: Scroll Description */}
          <div className="lg:w-1/2 h-[500px] p-12 lg:p-16 flex flex-col justify-center bg-gray-50">
            {activeProject ? (
              <div className="animate-fadeIn space-y-6">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-gray-900 mb-1">{activeProject.rpgName}</h3>
                  <div className="h-1 w-20 bg-gray-900"></div>
                </div>

                <p className="leading-relaxed text-gray-600 text-xl">
                  "{activeProject.rpgDesc}"
                </p>

                <div className="pt-6">
                  <h4 className="font-bold text-gray-600 text-xs uppercase tracking-widest mb-3 flex items-center gap-2"><Beaker size={14} /> Tools of the Trade</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.tech.map(t => (
                      <span key={t} className="px-3 py-1 border border-gray-300 text-gray-600 text-xs font-bold rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};