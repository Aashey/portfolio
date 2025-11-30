import React, { useState, useEffect, useRef } from 'react';
import {
  Cpu,
  Gamepad2, Mic, Dribbble,
  Feather, BookOpen,
} from 'lucide-react';
import { heroData } from './data';
import { RPGMode } from './components/RpgMode';
import { SimpleMode } from './components/SimpleMode';

const HERO_DATA = {
  ...heroData,
  hobbies: [
    { name: "Gaming", icon: <Gamepad2 size={24} />, desc: "Sharpening reflexes in virtual arenas." },
    { name: "Singing", icon: <Mic size={24} />, desc: "Bardic arts to boost party morale." },
    { name: "Basketball", icon: <Dribbble size={24} />, desc: "Physical training on the court." },
    { name: "Tech Trends", icon: <Cpu size={24} />, desc: "Studying ancient and future artifacts." }
  ]
}

const ModeToggle = ({ isRPG, toggleMode }) => (
  <button
    onClick={toggleMode}
    className={`fixed cursor-pointer top-6 right-6 z-50 flex items-center gap-2 px-6 py-2 rounded-full font-bold transition-all duration-300 shadow-xl ${isRPG
      ? "bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-200 font-serif"
      : "bg-gray-900 text-white border border-gray-700 hover:bg-gray-600 font-sans"
      }`}
  >
    {isRPG ? <><Feather size={18} /> Civilian Mode</> : <><BookOpen size={18} /> Story Mode</>}
  </button>
);

const App = () => {
  const [isRPG, setIsRPG] = useState(true);

  const handleToggle = () => {
    setIsRPG(!isRPG);
  };

  return (
    <>
      <ModeToggle isRPG={isRPG} toggleMode={handleToggle} />
      {isRPG ? <RPGMode heroData={HERO_DATA} /> : <SimpleMode heroData={HERO_DATA} />}
    </>
  );
};

export default App;