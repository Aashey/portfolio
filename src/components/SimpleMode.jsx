import { Briefcase, Map, Monitor } from "lucide-react";

export const SimpleMode = ({ heroData: HERO_DATA }) => {
    const allProjects = HERO_DATA.projectDetails;

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans pb-16">
            <header className="bg-gray-50 border-b border-gray-200 py-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">{HERO_DATA.name}</h1>
                    <p className="text-xl text-blue-600 font-medium mb-6">{HERO_DATA.title}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1"><Map size={14} /> {HERO_DATA.location}</span>
                        <span className="flex items-center gap-1"><Briefcase size={14} /> Not looking for work</span>
                    </div>
                    <p className="mt-8 text-gray-600 leading-relaxed max-w-2xl text-lg">
                        {HERO_DATA.summary}
                    </p>
                </div>
            </header>

            <main>

                {/* Technical Skills (bg-white) */}
                <section className="py-16 bg-white px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl font-bold uppercase tracking-wider text-gray-800 mb-2">Technical Skills</h2>
                        <div className="h-1 w-10 bg-gray-800 mb-8"></div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-4">Languages</h3>
                                <div className="flex flex-wrap gap-2">
                                    {HERO_DATA.inventory.languages.map(s => (
                                        <span key={s} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">{s}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-4">Tools & Frameworks</h3>
                                <div className="flex flex-wrap gap-2">
                                    {HERO_DATA.inventory.tools.map(s => (
                                        <span key={s} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">{s}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900 mb-4">Expertise & Methodology</h3>
                                <div className="flex flex-wrap gap-2">
                                    {HERO_DATA.inventory.attributes.map(s => (
                                        <span key={s} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm font-medium">{s}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Professional Experience (bg-gray-50) */}
                <section className="py-16 bg-gray-50 px-6 border-y border-gray-100">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl font-bold uppercase tracking-wider text-gray-800 mb-2">Professional Experience</h2>
                        <div className="h-1 w-10 bg-gray-800 mb-8"></div>

                        <div className="space-y-12">
                            {HERO_DATA.experience.map(job => (
                                <div key={job.id} className="grid md:grid-cols-4 gap-6">
                                    <div className="md:col-span-1">
                                        <span className="text-sm font-medium text-gray-500 block">{job.date}</span>
                                        <span className="text-xs text-gray-400 block mt-1">{job.company}</span>
                                    </div>
                                    <div className="md:col-span-3">
                                        <h3 className="font-bold text-gray-900 text-lg mb-2">{job.role}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">{job.desc}</p>
                                        {job.projects && (
                                            <div className="flex flex-wrap gap-2">
                                                {job.projects.map(p => (
                                                    <span key={p} className="text-xs text-gray-600 bg-white border border-gray-200 px-2 py-1 rounded">{p}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Education (bg-white) */}
                <section className="py-16 bg-white px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl font-bold uppercase tracking-wider text-gray-800 mb-2">Education & Certification</h2>
                        <div className="h-1 w-10 bg-gray-800 mb-8"></div>

                        <div className="space-y-6">
                            {HERO_DATA.education.map(edu => (
                                <div key={edu.id} className="flex justify-between items-start border-b border-gray-100 pb-6 last:border-0">
                                    <div>
                                        <h3 className="font-bold text-gray-900">{edu.role}</h3>
                                        <p className="text-gray-600">{edu.org}</p>
                                    </div>
                                    <span className="text-sm text-gray-500 whitespace-nowrap ml-4">{edu.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects (bg-gray-50) - New Section */}
                <section className="py-16 bg-gray-50 px-6 border-y border-gray-100">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl font-bold uppercase tracking-wider text-gray-800 mb-2">Key Projects</h2>
                        <div className="h-1 w-10 bg-gray-800 mb-8"></div>

                        <div className="space-y-12">
                            {allProjects.map(project => (
                                <div key={project.id} className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                                    <h3 className="font-bold text-gray-900 text-lg mb-2 flex items-center gap-2"><Monitor size={18} className="text-blue-500" />{project.name}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-4">{project.desc}</p>

                                    <h4 className="font-semibold text-gray-700 text-sm mb-2 mt-4">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Interests (bg-white) */}
                <section className="py-16 bg-white px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl font-bold uppercase tracking-wider text-gray-800 mb-2">Interests</h2>
                        <div className="h-1 w-10 bg-gray-800 mb-8"></div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {HERO_DATA.hobbies.map((h, i) => (
                                <div key={i} className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg text-center">
                                    <span className="text-gray-900 mb-2">{h.icon}</span>
                                    <span className="text-gray-700 font-medium text-sm">{h.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>

            <footer className="bg-white border-t border-gray-200 py-12 text-center text-gray-400 text-sm">
                <p>&copy; {new Date().getFullYear()} Aashish Sharma. All rights reserved.</p>
            </footer>
        </div>
    );
};
