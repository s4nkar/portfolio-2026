
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { ArrowUpRight, Github, BookOpen } from 'lucide-react';
import Section from './Section';

const Projects = () => {
    const { projects, publications } = PORTFOLIO_DATA;

    return (
        <Section id="projects" className="bg-gradient-to-b from-transparent to-black/20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
            >
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                    <p className="text-gray-400 max-w-2xl">Showcasing innovation in AI, NLP, and Full-stack engineering.</p>
                </div>
                <a
                    href="https://github.com/s4nkar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white hover:text-primary transition-colors pb-2 border-b border-transparent hover:border-primary"
                >
                    <Github size={18} /> View GitHub
                </a>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                {projects.map((project, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="group relative rounded-3xl overflow-hidden glass-card hover:bg-white/5 transition-all p-8 flex flex-col h-full"
                    >
                        {/* Hover Decor */}
                        <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight className="text-white w-8 h-8" />
                        </div>

                        <h3 className="text-2xl font-bold mb-4 group-hover:text-secondary transition-colors">{project.name}</h3>
                        <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Publications Section */}
            <div className="mt-20">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                    <BookOpen className="text-accent" /> Research Publications
                </h3>
                <div className="grid grid-cols-1 gap-6">
                    {publications.map((pub, idx) => (
                        <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h4 className="text-lg font-semibold text-white mb-2">{pub.title}</h4>
                                <p className="text-gray-400 text-sm">{pub.journal}</p>
                            </div>
                            <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20 whitespace-nowrap">
                                Read Paper
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Projects;
