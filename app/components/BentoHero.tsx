
"use client";
import React from 'react';
import { BentoGrid, BentoItem } from './BentoGrid';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { Github, Linkedin, Mail, MapPin, ArrowRight, Code2, BrainCircuit, Globe, Terminal, FileJson, Sparkles } from 'lucide-react';

const BentoHero = () => {
    const { personal, skills } = PORTFOLIO_DATA;

    return (
        <section id="home" className="pt-24 md:pt-32 pb-12 w-full">
            <BentoGrid>
                {/* 1. Main Title & Intro - Large Block */}
                <BentoItem colSpan={8} rowSpan={2} className="flex flex-col justify-between min-h-[400px]">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="flex justify-between items-start">
                        <div className="px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-mono text-secondary inline-block">
                            Available for hire
                        </div>
                        <Sparkles className="text-secondary/50 animate-pulse" />
                    </div>

                    <div className="mt-8">
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-4">
                            Sankar <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Dev S</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl">
                            Full-stack Engineer & AI Researcher. <br />
                            Building the bridge between <span className="text-white">Conceptual AI</span> and <span className="text-white">Production Reality</span>.
                        </p>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <a href="#contact" className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2">
                            Let's Talk <ArrowRight size={18} />
                        </a>
                        <a href="#work" className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-colors">
                            View Work
                        </a>
                    </div>
                </BentoItem>

                {/* 2. Photo / Avatar Block - Visual Focus */}
                <BentoItem colSpan={4} rowSpan={2} className="relative !p-0 overflow-hidden group">
                    {/* Placeholder for real image later - using generative gradient for now */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black z-0" />
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 opacity-60 hover:scale-110" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                        <div className="flex items-center gap-2 text-white/80">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                            <span className="text-sm font-mono">London, UK</span>
                        </div>
                    </div>
                </BentoItem>

                {/* 3. Social Stack - Compact Links */}
                <BentoItem colSpan={2} rowSpan={1} className="flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-colors cursor-pointer group" >
                    <a href={personal.github} target="_blank" className="flex flex-col items-center gap-2">
                        <Github className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
                        <span className="text-xs text-gray-400">GitHub</span>
                    </a>
                </BentoItem>
                <BentoItem colSpan={2} rowSpan={1} className="flex flex-col items-center justify-center gap-4 hover:bg-[#0077b5]/20 transition-colors cursor-pointer group text-center">
                    <a href={personal.linkedin} target="_blank" className="flex flex-col items-center gap-2">
                        <Linkedin className="w-8 h-8 text-white group-hover:text-[#0077b5] group-hover:scale-110 transition-transform" />
                        <span className="text-xs text-gray-400">LinkedIn</span>
                    </a>
                </BentoItem>

                {/* 4. Tech Stack Marquee / Grid */}
                <BentoItem colSpan={8} rowSpan={1} className="flex flex-col justify-center">
                    <h3 className="text-xs font-mono text-gray-500 mb-4 uppercase tracking-widest">Core Technologies</h3>
                    <div className="flex flex-wrap gap-x-8 gap-y-4 items-center opacity-60 hover:opacity-100 transition-opacity">
                        <TechIcon icon={BrainCircuit} label="AI/ML" />
                        <TechIcon icon={Globe} label="Next.js" />
                        <TechIcon icon={Terminal} label="Python" />
                        <TechIcon icon={FileJson} label="TypeScript" />
                        <TechIcon icon={Code2} label="React" />
                    </div>
                </BentoItem>

            </BentoGrid>
        </section>
    );
};

const TechIcon = ({ icon: Icon, label }: { icon: any, label: string }) => (
    <div className="flex items-center gap-2 group cursor-default">
        <Icon className="w-5 h-5 text-secondary group-hover:rotate-12 transition-transform" />
        <span className="text-sm font-medium text-gray-300">{label}</span>
    </div>
);

export default BentoHero;
