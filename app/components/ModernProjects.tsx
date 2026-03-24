"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { ArrowUpRight, Github } from 'lucide-react';
import Section from './Section';

const PROJECT_GRADIENTS = [
    'from-[#FF2D78]/20 to-transparent',
    'from-[#C084FC]/15 to-transparent',
    'from-[#FF6BA8]/15 to-transparent',
    'from-[#C084FC]/20 to-transparent',
];
const PROJECT_ACCENTS = ['#FF2D78', '#C084FC', '#FF6BA8', '#C084FC'];

const ModernProjects = () => {
    const { projects, publications, personal } = PORTFOLIO_DATA;

    return (
        <Section id="work" className="py-20">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-14 flex items-end justify-between flex-wrap gap-6"
            >
                <div>
                    <p className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2 mb-4">
                        <span className="w-6 h-px bg-primary/60" />
                        Selected Projects
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold">
                        Things I've{' '}
                        <span style={{ WebkitTextStroke: '1.5px #FF2D78', color: 'transparent' }}>
                            Built
                        </span>
                    </h2>
                </div>
                <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
                >
                    <Github size={16} />
                    <span>Full archive</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
            </motion.div>

            {/* Project grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map((project, idx) => {
                    const accent = PROJECT_ACCENTS[idx % PROJECT_ACCENTS.length];
                    const grad = PROJECT_GRADIENTS[idx % PROJECT_GRADIENTS.length];
                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            className={`group relative rounded-2xl p-6 flex flex-col justify-between overflow-hidden bg-gradient-to-br ${grad}`}
                            style={{
                                border: `1px solid ${accent}20`,
                                minHeight: '260px',
                            }}
                        >
                            {/* Top accent */}
                            <div
                                className="absolute top-0 left-8 right-8 h-px"
                                style={{ background: `linear-gradient(90deg, transparent, ${accent}70, transparent)` }}
                            />

                            {/* Hover glow */}
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ background: `radial-gradient(circle at 80% 20%, ${accent}10, transparent 60%)` }}
                            />

                            {/* Top row */}
                            <div className="flex justify-between items-start mb-auto relative z-10">
                                <div
                                    className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold font-mono"
                                    style={{ background: `${accent}18`, color: accent, border: `1px solid ${accent}30` }}
                                >
                                    {String(idx + 1).padStart(2, '0')}
                                </div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full border border-white/10 hover:border-white/30 transition-colors"
                                    style={{ background: 'rgba(0,0,0,0.3)' }}
                                >
                                    <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                                </a>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 mt-8">
                                <h3
                                    className="text-xl font-bold mb-2 transition-colors"
                                    style={{ color: 'white' }}
                                >
                                    {project.name}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-1.5">
                                    {project.tech.map(t => (
                                        <span
                                            key={t}
                                            className="px-2.5 py-1 text-xs rounded-lg font-mono"
                                            style={{
                                                background: `${accent}12`,
                                                border: `1px solid ${accent}25`,
                                                color: accent,
                                            }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Research Publication */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative mt-5 rounded-2xl p-8 overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, rgba(255,45,120,0.08) 0%, rgba(192,132,252,0.05) 100%)',
                    border: '1px solid rgba(255,45,120,0.2)',
                }}
            >
                {/* Top accent line */}
                <div className="absolute top-0 left-12 right-12 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,45,120,0.6), transparent)' }} />

                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
                    <div className="flex items-start gap-5">
                        <div
                            className="flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
                            style={{ background: 'rgba(255,45,120,0.15)', border: '1px solid rgba(255,45,120,0.3)' }}
                        >
                            📄
                        </div>
                        <div>
                            <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Latest Publication</p>
                            <h3 className="text-lg font-bold text-white mb-1">"{publications[0].title}"</h3>
                            <p className="text-sm text-gray-500 font-mono">{publications[0].journal}</p>
                            <div className="flex flex-wrap gap-4 mt-3">
                                <Pill label="95.08% F1-Score" color="#FF2D78" />
                                <Pill label="RoBERTa · BERT" color="#C084FC" />
                                <Pill label="28 Emotion Classes" color="#FF6BA8" />
                            </div>
                        </div>
                    </div>
                    <button
                        className="flex-shrink-0 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
                        style={{
                            background: 'linear-gradient(135deg, #FF2D78, #C084FC)',
                            color: 'white',
                            boxShadow: '0 0 20px rgba(255,45,120,0.25)',
                        }}
                    >
                        Read Paper
                    </button>
                </div>
            </motion.div>
        </Section>
    );
};

const Pill = ({ label, color }: { label: string; color: string }) => (
    <span
        className="text-xs font-mono px-3 py-1 rounded-full"
        style={{ background: `${color}15`, border: `1px solid ${color}30`, color }}
    >
        {label}
    </span>
);

export default ModernProjects;
