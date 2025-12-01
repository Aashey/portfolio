import { useEffect, useRef, useState } from "react";
import { ProjectMapKingdom } from "./ProjectMapKingdom";
import { RestStop } from "./RestStop";
import { ArrowDown, Pocket } from "lucide-react";
import { StoryChapter } from "./StoryChapter";
import { RPGItem } from "./RpgItem";

export const RPGMode = ({ heroData: HERO_DATA }) => {
  const [activeProjectId, setActiveProjectId] = useState("hmis");
  const projectRef = useRef(null);
  const refs = useRef([]);
  refs.current = [];

  const handleProjectClick = (projectName) => {
    // Find the project ID by its name (e.g., "Second Look Health")
    const project = HERO_DATA.projectDetails.find(p => p.name === projectName);
    if (project) {
      setActiveProjectId(project.id);
      projectRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStart = () => {
    const start = document.getElementById('journey-start');
    start?.scrollIntoView({ behavior: 'smooth' });
  }
  const base = '/portfolio';
  const sounds = [
    `${base}/sounds/aboutme.mp3`,
    `${base}/sounds/education.mp3`,
    `${base}/sounds/course.mp3`,
    `${base}/sounds/intern.mp3`,
    `${base}/sounds/trainee.mp3`,
    `${base}/sounds/associate.mp3`,
    `${base}/sounds/technicalskills.mp3`,
    `${base}/sounds/projects.mp3`,
    `${base}/sounds/hobbies.mp3`,
  ];

  const setRef = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  useEffect(() => {
    const players = sounds.map((s) => new Audio(s));

    let currentPlaying = null;
    const playedOnce = new Array(sounds.length).fill(false);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = refs.current.indexOf(entry.target);
          if (index === -1) return;

          if (playedOnce[index]) return;

          if (currentPlaying !== null && currentPlaying !== index) {
            players[currentPlaying].pause();
            players[currentPlaying].currentTime = 0;
          }

          players[index].play();
          currentPlaying = index;

          playedOnce[index] = true;
        });
      },
      { threshold: 0.5 }
    );

    refs.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);


  return (
    <div className="bg-white text-gray-900 font-sans selection:bg-gray-200">

      {/* 1. Full Screen Hero Section */}
      <header ref={setRef} className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6 relative border-b-0 border-gray-100">
        <div className="max-w-4xl mx-auto text-center z-10 space-y-8">
          <div className="inline-block border-b-2 border-gray-900 pb-2">
            <p className="text-gray-400 font-extrabold text-xl font-serif tracking-[0.2em] uppercase">The Chronicle Of</p>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-gray-900 font-serif tracking-tight leading-none">
            {HERO_DATA.name.split(' ')[0]}<br />
            <span className="text-gray-400">{HERO_DATA.name.split(' ')[1]}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 font-serif italic max-w-2xl mx-auto leading-relaxed">
            "{HERO_DATA.rpgSummary}"
          </p>

          <div className="pt-12">
            <button onClick={scrollToStart} className="animate-bounce cursor-pointer p-4 rounded-full border border-gray-200 hover:bg-gray-200 transition-colors">
              <ArrowDown size={24} className="text-gray-400" />
            </button>
            <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">Begin the Journey</p>
          </div>
        </div>

        {/* Minimal Background Decor */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')]"></div>
      </header>

      <main className="relative">
        {/* 2. Journey Sections (Narrative) */}
        <div id="journey-start" className="pt-20">
          {[...HERO_DATA.education, ...HERO_DATA.experience].map((item, index) => (
            <StoryChapter
              ref={setRef}
              key={item.id}
              data={item}
              index={index}
              onProjectClick={handleProjectClick}
            />
          ))}
        </div>

        <section ref={setRef} className="min-h-[60vh] flex flex-col justify-center py-24 bg-gray-50 relative z-10">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <div className="text-center mb-16">
              <Pocket className="mx-auto text-gray-900 mb-4" size={40} />
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">The Ranger's Arsenal</h2>
              <div className="h-1 w-20 bg-gray-900 mx-auto"></div>
              <p className="mt-4 italic text-gray-600">"Over years of campaigns, I have collected these tools, scrolls, and weapons — each honed through battle, each a companion in the trials I faced.{" "}
                With them, I uncover weaknesses, strike with precision, and guard the realms I protect."</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {HERO_DATA.inventory.languages.map(skill => <RPGItem key={skill} name={skill} type="Language Scroll" />)}
              {HERO_DATA.inventory.tools.map(skill => <RPGItem key={skill} name={skill} type="Tool/Artifact" />)}
              {HERO_DATA.inventory.attributes.map(skill => <RPGItem key={skill} name={skill} type="Passive Ability" />)}
            </div>
          </div>
        </section>

        <ProjectMapKingdom
          ref={setRef}
          activeProjectId={activeProjectId}
          onSelectProject={setActiveProjectId}
          refProp={projectRef}
          heroData={HERO_DATA}
        />

        <RestStop ref={setRef} heroData={HERO_DATA} />

        <footer className="py-12 text-center text-gray-400 text-sm font-serif border-t border-gray-100">
          <p>End of Chronicle.</p>
        </footer>
      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Inter:wght@300;400;600&display=swap');
        .font-serif { font-family: 'Cinzel', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
      `}</style>
    </div>
  );
};