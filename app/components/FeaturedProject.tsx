"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../data/portfolio';
import { ArrowUpRight, Star, Shield, Zap } from 'lucide-react';
import Section from './Section';

const FeaturedProject = () => {
    const { featuredProject } = PORTFOLIO_DATA;

    // Parse result metrics from the results string
    const metrics = [
        { label: 'Macro F1', value: '≥ 0.95', icon: Star, color: '#FF2D78' },
        { label: 'NER F1', value: '≥ 0.95', icon: Zap, color: '#C084FC' },
        { label: 'RAG P@3', value: '≥ 85%', icon: Shield, color: '#FF6BA8' },
    ];

    return (
        <Section id="featured" className="py-16">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8"
            >
                <p className="text-xs font-mono text-gray-500 uppercase tracking-widest flex items-center gap-2 mb-4">
                    <span className="w-6 h-px bg-primary/60" />
                    Featured Project
                </p>
                <h2 className="text-4xl md:text-5xl font-bold">
                    Latest{' '}
                    <span style={{ WebkitTextStroke: '1.5px #FF2D78', color: 'transparent' }}>
                        Work
                    </span>
                </h2>
            </motion.div>

            {/* Main card */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-3xl overflow-hidden group"
                style={{
                    background: 'linear-gradient(135deg, rgba(255,45,120,0.06) 0%, rgba(192,132,252,0.04) 50%, rgba(13,13,13,0.95) 100%)',
                    border: '1px solid rgba(255,45,120,0.2)',
                }}
            >
                {/* Top accent gradient line */}
                <div
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, rgba(255,45,120,0.6), rgba(192,132,252,0.4), transparent)' }}
                />

                {/* Hover glow */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ background: 'radial-gradient(circle at 30% 20%, rgba(255,45,120,0.08), transparent 60%)' }}
                />

                <div className="relative z-10 p-8 md:p-12">
                    {/* Top row: title + year + CTA */}
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-10">
                        <div className="flex-1">
                            {/* Badge */}
                            <div className="flex items-center gap-3 mb-4">
                                <span
                                    className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest font-bold"
                                    style={{
                                        background: 'linear-gradient(135deg, rgba(255,45,120,0.15), rgba(192,132,252,0.1))',
                                        border: '1px solid rgba(255,45,120,0.3)',
                                        color: '#FF2D78',
                                    }}
                                >
                                    ★ Featured · {featuredProject.year}
                                </span>
                                <span
                                    className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest"
                                    style={{
                                        background: 'rgba(52,211,153,0.1)',
                                        border: '1px solid rgba(52,211,153,0.25)',
                                        color: '#34d399',
                                    }}
                                >
                                    7 Containers · Local-First
                                </span>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
                                {featuredProject.name}
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed">
                                Privacy-preserving bilingual AI compliance platform for German SMEs — zero external API calls, full on-device inference.
                            </p>
                        </div>

                        {/* CTA */}
                        <a
                            href={featuredProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105 self-start"
                            style={{
                                background: 'linear-gradient(135deg, #FF2D78, #C084FC)',
                                color: '#fff',
                                boxShadow: '0 0 25px rgba(255,45,120,0.3)',
                            }}
                        >
                            View on GitHub
                            <ArrowUpRight size={16} />
                        </a>
                    </div>

                    {/* Metrics row */}
                    <div className="flex flex-wrap gap-3 mb-10">
                        {metrics.map((m, idx) => (
                            <motion.div
                                key={m.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + idx * 0.1 }}
                                className="flex items-center gap-3 px-5 py-3 rounded-2xl"
                                style={{
                                    background: `${m.color}0D`,
                                    border: `1px solid ${m.color}30`,
                                }}
                            >
                                <m.icon size={18} style={{ color: m.color }} />
                                <div>
                                    <p className="text-xs font-mono text-gray-500">{m.label}</p>
                                    <p className="text-lg font-bold font-mono" style={{ color: m.color }}>{m.value}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-4 mb-10">
                        {featuredProject.highlights.map((highlight, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + idx * 0.08 }}
                                className="flex items-start gap-4 group/item"
                            >
                                {/* Number badge */}
                                <span
                                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono mt-0.5"
                                    style={{
                                        background: 'rgba(255,45,120,0.1)',
                                        border: '1px solid rgba(255,45,120,0.2)',
                                        color: '#FF6BA8',
                                    }}
                                >
                                    {idx + 1}
                                </span>
                                {/* Text with left accent on hover */}
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed pl-3 border-l-2 border-transparent group-hover/item:border-primary/40 transition-colors">
                                    {highlight}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Tech stack */}
                    <div>
                        <p className="text-[10px] font-mono uppercase tracking-widest text-gray-600 mb-3">Tech Stack</p>
                        <div className="flex flex-wrap gap-2">
                            {featuredProject.tech.map((t) => (
                                <span
                                    key={t}
                                    className="px-3 py-1.5 text-xs rounded-lg font-mono transition-all duration-200 hover:scale-105"
                                    style={{
                                        background: 'rgba(255,45,120,0.08)',
                                        border: '1px solid rgba(255,45,120,0.2)',
                                        color: '#FF6BA8',
                                    }}
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Results bar at bottom */}
                    {/* <div
                        className="mt-8 pt-6 border-t border-white/5"
                    >
                        <p className="text-xs font-mono text-gray-500">
                            <span className="text-primary font-semibold">Results:</span>{' '}
                            {featuredProject.results}
                        </p>
                    </div> */}
                </div>
            </motion.div>
        </Section>
    );
};

export default FeaturedProject;
