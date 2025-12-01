import { Flame } from "lucide-react";

export const RestStop = ({heroData:HERO_DATA,ref}) => (
  <section ref={ref} className="py-32 bg-gray-50 border-t border-gray-200">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <div className="mb-12">
        <div className="text-center mb-16">
          <Flame className="mx-auto text-gray-900 mb-4" size={40} />
        <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">The Rest Stop</h2>
          <div className="h-1 w-20 bg-gray-900 mx-auto"></div>
        <p className="text-gray-600 italic mt-4 text-lg">"When the bugs are slain and the build is green, I lay down my sword in the meadows of leisure."</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {HERO_DATA.hobbies.map((hobby, idx) => (
          <div key={idx} className="group p-6 bg-white rounded-xl border border-gray-100 hover:border-gray-300 hover:shadow-lg transition-all">
            <div className="text-gray-400 group-hover:text-gray-900 mb-4 flex justify-center transition-colors">{hobby.icon}</div>
            <h3 className="font-bold text-gray-900 mb-2">{hobby.name}</h3>
            <p className="text-xs text-gray-500">{hobby.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);