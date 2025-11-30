import { Beaker, Code, Coffee, Layout, Save, Shield, Star, Target, Terminal } from "lucide-react";

export const RPGItem = ({ name, type }) => {
  const iconMap = {
    Python: <Code size={24} className="text-gray-800" />,
    Java: <Coffee size={24} className="text-gray-800" />,
    JavaScript: <Terminal size={24} className="text-gray-800" />,
    Selenium: <Beaker size={24} className="text-gray-800" />,
    PostgreSQL: <Save size={24} className="text-gray-800" />,
    Cypress: <Target size={24} className="text-gray-800" />,
    ReactJs: <Layout size={24} className="text-gray-800" />,
    GitHub: <Star size={24} className="text-gray-800" />,
    default: <Shield size={24} className="text-gray-800" />
  };

  return (
    <div className="group relative bg-white border-2 border-gray-200 p-6 rounded hover:border-gray-900 transition-all cursor-pointer hover:-translate-y-1 shadow-sm hover:shadow-md">
      <div className="flex flex-col items-center gap-3">
        {iconMap[name] || iconMap.default}
        <span className="text-sm font-bold text-gray-900 font-serif tracking-wider text-center">{name}</span>
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-40 bg-gray-900 text-white text-xs p-3 rounded hidden group-hover:block z-20 text-center shadow-xl">
        <p className="font-bold border-b border-gray-700 mb-1 pb-1">{name}</p>
        <p className="text-gray-300 italic">{type}</p>
      </div>
    </div>
  );
};