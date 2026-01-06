
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { Briefcase, Calendar, MapPin, GraduationCap, Award } from 'lucide-react';
import Section from './Section';

const Experience = () => {
    const { experience, education } = PORTFOLIO_DATA;

    return (
        <Section id="experience">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-4">The <span className="text-gradient">Journey</span></h2>
                <p className="text-gray-400 max-w-2xl">Professional milestones and academic achievements.</p>
            </motion.div>

            <div className="relative border-l border-white/10 ml-3 md:ml-6 space-y-12">
                {/* Experience Section */}
                {experience.map((exp, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="pl-8 md:pl-12 relative group"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[5px] md:-left-[7px] top-0 w-3 h-3 md:w-4 md:h-4 bg-primary rounded-full ring-4 ring-black group-hover:ring-primary/20 transition-all" />

                        <div className="glass-card p-6 md:p-8 rounded-2xl hover:bg-white/5 transition-all">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                                    <div className="text-lg text-gray-300 font-medium">{exp.company}</div>
                                </div>
                                <div className="flex flex-col md:items-end text-sm text-gray-400 gap-1">
                                    <div className="flex items-center gap-2"><Calendar size={14} /> {exp.duration}</div>
                                    <div className="flex items-center gap-2"><MapPin size={14} /> {exp.location}</div>
                                </div>
                            </div>

                            <ul className="space-y-2 mt-4">
                                {exp.achievements.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-400 text-sm md:text-base">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}

                {/* Education Separator */}
                <div className="pl-8 md:pl-12 pt-8">
                    <h3 className="text-2xl font-bold flex items-center gap-3 text-white">
                        <GraduationCap className="text-secondary" /> Education
                    </h3>
                </div>

                {/* Education Section */}
                {education.map((edu, idx) => (
                    <motion.div
                        key={`edu-${idx}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="pl-8 md:pl-12 relative group"
                    >
                        <div className="absolute -left-[5px] md:-left-[7px] top-2 w-3 h-3 md:w-3 md:h-3 bg-secondary rounded-full ring-4 ring-black" />

                        <div className="p-6 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all">
                            <div className="flex flex-col md:flex-row justify-between md:items-center gap-2">
                                <div>
                                    <div className="flex items-center gap-3">
                                        <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                                        {/* @ts-ignore */}
                                        {edu.honors && (
                                            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                                                <Award size={12} className="text-amber-400" />
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
                                                    {/* @ts-ignore */}
                                                    {edu.honors}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-gray-400">{edu.institution}</p>
                                </div>
                                <span className="px-3 py-1 rounded-full bg-black/30 border border-white/10 text-xs text-gray-300">
                                    {edu.year}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
