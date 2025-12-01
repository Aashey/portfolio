import { Map, Scroll, Sword } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const StoryChapter = ({ data, index, onProjectClick,ref }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.3 }
    );
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={domRef}
      className={`min-h-[80vh] flex items-center justify-center py-20 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-12 items-center">
        {/* Icon / Decorator */}
        <div className={`order-1 ${isLeft ? 'md:order-1' : 'md:order-2'} shrink-0`}>
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-900 flex items-center justify-center bg-white shadow-2xl relative">
            <div className="absolute inset-2 border border-gray-300 rounded-full"></div>
            {data.type === 'education' ? <Scroll size={40} className="text-gray-800" /> : <Sword size={40} className="text-gray-800" />}
            {data.level && <div className="absolute -bottom-4 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded-full">LVL {data.level}</div>}
          </div>
        </div>

        {/* Narrative Content */}
        <div ref={ref} className={`order-2 ${isLeft ? 'md:order-2 text-left' : 'md:order-1 md:text-right'} space-y-6`}>
          <div>
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">{data.date} • {data.rpgTitle}</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mt-2 leading-tight">{data.rpgRole}</h2>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 font-serif leading-relaxed italic">
            "{data.rpgDesc}"
          </p>

          {/* Interactive Project Tags */}
          {data.projects && (
            <div className={`pt-4 flex flex-wrap gap-3 ${isLeft ? 'justify-start' : 'justify-end'}`}>
              {data.projects.map((p, i) => (
                <button
                  key={i}
                  onClick={() => onProjectClick(p)}
                  className="flex cursor-pointer items-center gap-2 px-4 py-2 border-2 border-gray-200 text-gray-600 hover:border-gray-900 hover:text-gray-900 rounded-full transition-colors group"
                >
                  <Map size={16} />
                  <span className="font-bold text-sm">{p}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};