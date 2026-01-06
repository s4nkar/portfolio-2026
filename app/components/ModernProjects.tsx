
"use client";
import React from 'react';
import { BentoGrid, BentoItem } from './BentoGrid';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { ArrowUpRight, Folder, GitBranch, Github } from 'lucide-react';
import Section from './Section';

const ModernProjects = () => {
    const { projects, publications, personal } = PORTFOLIO_DATA;

    return (
        <Section id="work" className="py-20">
            <div className="flex items-end justify-between mb-12 px-4 gap-8">
                <div>
                    <h2 className="text-4xl font-bold mb-2">Selected <span className="text-gradient">Work</span></h2>
                    <p className="text-gray-400">Research papers and full-stack applications.</p>
                </div>
                <div className="flex items-center gap-4 mb-2 shrink-0">
                    <div className="h-px bg-white/10 w-16 md:w-32 hidden md:block"></div>
                    <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
                        <Github size={16} /> Explore full archive
                    </a>
                </div>
            </div>

            <BentoGrid className="!auto-rows-[minmax(300px,auto)]">
                {projects.map((project, idx) => (
                    <BentoItem
                        key={idx}
                        colSpan={idx === 0 ? 8 : 4} // First project is wider
                        rowSpan={1}
                        className="group flex flex-col justify-between bg-gradient-to-br from-white/5 to-transparent"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">
                                <Folder className="text-secondary w-6 h-6" />
                            </div>
                            <a href={project.link} className="p-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-white" />
                            </a>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">{project.name}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span key={t} className="px-2 py-1 text-xs rounded border border-white/10 bg-black/20 text-gray-300">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </BentoItem>
                ))}

                {/* Research Publication Card */}
                <BentoItem colSpan={12} rowSpan={1} className="!min-h-[200px] flex flex-col justify-center bg-primary/5 border-primary/20">
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
                        <div className="flex items-center gap-6">
                            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                                <GitBranch className="text-primary w-8 h-8" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-2 text-white">Latest Publication</h3>
                                <p className="text-lg text-gray-300 italic">"{publications[0].title}"</p>
                                <p className="text-sm text-primary mt-1">{publications[0].journal}</p>
                                <ul className="text-gray-400 text-sm space-y-2 mt-4">
                                    {publications[0].description && publications[0].description.map((desc, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-secondary shrink-0" />
                                            <span className="leading-relaxed">{desc}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <button className="px-6 py-3 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-colors whitespace-nowrap">
                            Read Research
                        </button>
                    </div>
                </BentoItem>
            </BentoGrid>

        </Section>
    );
};

export default ModernProjects;
